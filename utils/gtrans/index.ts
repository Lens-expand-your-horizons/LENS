import {
    DEFAULT_RAISE_EXCEPTION,
    DEFAULT_USER_AGENT,
    LANGUAGES,
} from './consts';
import { GTokenAcquirer } from './gtoken';
import { RequestInitRubust, fetchOk, fetchRobust } from '@/utils/fetchRobust';

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
    ): Promise<[Response, any]> {
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
        const data = await r.then((r) => r.json());
        return [await r, data];
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

    translate(text: string, dest = 'en', src = 'auto', ...kwargs: any[]) {
        dest = dest.toLowerCase().split('-')[0];
        src = src.toLowerCase().split('-')[0];

        if (src !== 'auto' && not(src in LANGUAGES)) {
            return text;
        }
    }
}
