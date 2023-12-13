export class Translated {
    src: string;
    dest: string;
    origin: string;
    text: string;
    pronunciation: string;
    extraData?: { [key: string]: string };
    response?: Response;
    constructor(
        src: string,
        dest: string,
        origin: string,
        text: string,
        pronunciation: string,
        extraData?: { [key: string]: string },
        response?: Response,
    ) {
        this.src = src;
        this.dest = dest;
        this.origin = origin;
        this.text = text;
        this.pronunciation = pronunciation;
        this.extraData = extraData;
        this.response = response;
    }

    toObject(): Object {
        return {
            src: this.src,
            dest: this.dest,
            origin: this.origin,
            text: this.text,
            pronunciation: this.pronunciation,
            extraData: this.extraData,
        };
    }

    toString(): string {
        return JSON.stringify(this.toObject());
    }
}
