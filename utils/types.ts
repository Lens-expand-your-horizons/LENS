export enum Page {
    home = 'home',
    search = 'search',
}

export enum CheckBoxSize {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export type GoogleResult = {
    kind: string;
    title: string;
    htmlTitle: string;
    translatedTitle?: string;
    link: string;
    displayLink: string;
    snippet: string;
    htmlSnippet: string;
    translatedSnippet?: string;
    cacheId: string;
    formattedUrl: string;
    htmlFormattedUrl: string;
    pagemap: any;
    mime?: string;
    fileFormat?: string;
    image?: {
        contextLink: string;
        height: number;
        width: number;
        byteSize: number;
        thumbnailLink: string;
        thumbnailHeight: number;
        thumbnailWidth: number;
    };
    labels?: [
        {
            name: string;
            displayName: string;
            label_with_op: string;
        },
    ];
};

export type DeepLResult = {
    translations: {
        detected_source_language: string;
        text: string;
    }[];
};
