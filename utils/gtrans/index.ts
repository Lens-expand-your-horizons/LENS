import {
    DEFAULT_RAISE_EXCEPTION,
    DEFAULT_USER_AGENT,
    LANGCODES,
    LANGUAGES,
    SPECIAL_CASES,
} from './consts';
import { GTokenAcquirer } from './gtoken';
import { Translated } from './models';
import { RequestInitRubust, fetchOk, fetchRobust } from '@/utils/fetchRobust';

export type TranslateResult<T> = T extends string
    ? Promise<Translated>
    : Promise<Translated>[];

export class GTranslator {
    serviceUrls: string[];
    raiseExceptions: boolean;
    client: RequestInitRubust;
    tokenAcquirer: GTokenAcquirer;
    constructor(
        serviceUrls = ['translate.google.com'],
        userAgent = DEFAULT_USER_AGENT,
        raiseExceptions = DEFAULT_RAISE_EXCEPTION,
        timeout = null,
        maxRetries = null,
    ) {
        this.serviceUrls = serviceUrls;
        this.raiseExceptions = raiseExceptions;
        this.client = {
            headers: {
                'User-Agent': userAgent,
            },
            timeout,
            maxRetries,
        };
        this.tokenAcquirer = new GTokenAcquirer();
    }

    private _pick_service_url() {
        if (this.serviceUrls.length === 1) {
            return this.serviceUrls[0];
        }
        return this.serviceUrls[
            Math.floor(Math.random() * this.serviceUrls.length)
        ];
    }

    private async _translate(
        text: string,
        dest: string,
        src: string,
        override: string,
    ): Promise<[any[], Response]> {
        const token = this.tokenAcquirer.do(text);
        const url = `https://${this._pick_service_url()}/translate_a/single`;
        const params = new URLSearchParams({
            query: text,
            src,
            dest,
            token,
            override,
        });
        const r = fetchOk(url + '?' + params, this.client);
        const data: any[] = await r.then((r) => r.json());
        return [data, await r];
    }

    private _parse_extra_data(data: any) {
        const responsePartsNameMapping = {
            0: 'translation',
            1: 'all-translations',
            2: 'original-language',
            5: 'possible-translations',
            6: 'confidence',
            7: 'possible-mistakes',
            8: 'language',
            11: 'synonyms',
            12: 'definitions',
            13: 'examples',
            14: 'see-also',
        };

        const extra: { [key: string]: string } = {};

        for (const [index, category] of Object.entries(
            responsePartsNameMapping,
        )) {
            extra[category] = data[index] ?? null;
        }

        return extra;
    }

    private async _translate_single(
        text: string,
        dest: string,
        src: string,
        override: string,
    ): Promise<Translated> {
        const origin = text;
        const [data, response] = await this._translate(
            text,
            dest,
            src,
            override,
        );

        const translated = data[0].map((x: any) => x[0] || '').join('');

        const extraData = this._parse_extra_data(data);

        src = data[2];

        return new Translated(src, dest, origin, text, '');
    }

    translate<T extends string | string[]>(
        text: T,
        dest = 'en',
        src = 'auto',
        override = '',
    ): T extends string ? Promise<Translated> : Promise<Translated>[] {
        dest = dest.toLowerCase().split('-')[0];
        src = src.toLowerCase().split('-')[0];

        if (src !== 'auto' && !(src in LANGUAGES)) {
            if (dest in SPECIAL_CASES) {
                dest = SPECIAL_CASES[dest];
            } else if (dest in LANGCODES) {
                dest = LANGCODES[dest];
            } else {
                throw new Error(`Invalid destination language: ${dest}`);
            }
        }

        if (typeof text === 'string') {
            return this._translate_single(
                text,
                dest,
                src,
                override,
            ) as T extends string ? Promise<Translated> : never;
        }

        const result = text.map((t) => this.translate(t, dest, src, override));
        return result as T extends string ? never : Promise<Translated>[];
    }
}
