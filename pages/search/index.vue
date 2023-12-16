<script setup lang="ts">
import { Page } from '@/utils/types';
import type { DeepLResult, GoogleResult } from '@/utils/types';
import { fromOptions, toOptions } from '@/utils/consts';

const query = ref(useRoute().query.q as string);
const from = ref(useRoute().query.from as string ?? 'auto');
const to = ref(useRoute().query.to as string ?? 'JA');
const translator = ref(useRoute().query.translator as string ?? 'google');
const queryOrigin = ref(query.value);

const results: Ref<GoogleResult[]> = ref([]);
const queryTranslated = ref('');
const detectedLang = ref('');
const resultsToBeTranslated: string[] = [];

const translate = async () => {
    return await useFetch(`/translate/${translator}`, {
        server: false,
        lazy: true,
        baseURL: 'https://api.lens-s.com/dev_v1',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            text: [query.value],
            source_lang: from.value === 'auto' ? undefined : from.value,
            target_lang: to.value,
        },
        onResponse({ request, response, options }) {
            const data = response._data as DeepLResult;
            queryTranslated.value = data.translations[0].text;
            detectedLang.value = data.translations[0].detected_source_language;
            search();
        },
    }) as {
        data: Ref<DeepLResult>,
        pending: Ref<boolean>,
    };
};

const search = async () => {
    return await useFetch('/search/google', {
        server: false,
        lazy: true,
        baseURL: 'https://api.lens-s.com/dev_v1',
        query: {
            q: queryTranslated.value,
        },
        onResponse({ request, response, options }) {
            const data = response._data as {
                items: GoogleResult[],
            };
            results.value = data.items;
            results.value.forEach((r) => {
                resultsToBeTranslated.push(r.title);
                resultsToBeTranslated.push(r.snippet);
                backTranslate();
            });
        },
    }) as {
        data: Ref<{
            items: GoogleResult[],
        }>,
        pending: Ref<boolean>,
    };
};

const backTranslate = async () => {
    return await useFetch(`/translate/${translator}`, {
        server: false,
        lazy: true,
        baseURL: 'https://api.lens-s.com/dev_v1',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            text: resultsToBeTranslated,
            target_lang: detectedLang.value,
        },
        onResponse({ request, response, options }) {
            const data = response._data as DeepLResult;
            data.translations.forEach((t, i) => {
                if (i % 2 === 0) {
                    results.value[i / 2].translatedTitle = t.text;
                } else {
                    results.value[(i - 1) / 2].translatedSnippet = t.text;
                }
            });
        },
    }) as {
        data: Ref<DeepLResult>,
        pending: Ref<boolean>,
    };
};

translate();

const submit = (e: Event) => {
    e.preventDefault();
    queryOrigin.value = query.value;
    translate();
};

</script>

<template lang="pug">
.page
    form(@submit="submit").Header.flex-container
        NuxtLink(to='/').flex-item.Logo
            TitleRow
        SearchBox.flex-item(:page="Page.search", v-model="query")
        .flex-item.flex-container.selects
            SelectRegion.flex-item(
                name="from"
                placeholder="入力した言語"
                v-model="detectedLang"
                :options="fromOptions"
            )
            SelectRegion.flex-item(
                name="to"
                placeholder="検索する言語"
                v-model="to"
                :options="toOptions"
            )
    .Contents(fallback-tag="div" fallback="Loading...")
        TranslateBox.TranslateBox(
            :origin="queryOrigin"
            :translate="queryTranslated"
        )
        .result(v-for="r in results" :key="r.cacheId")
            a(:href="`https://translate.google.com/translate?sl=${to}&tl=${detectedLang}&u=${r.link}`")
                hgroup
                    .SiteTitle
                        img.favicon(:src="`https://www.google.com/s2/favicons?domain=${r.displayLink}&sz=128`")
                        p.URL(v-html="r.displayLink")
                    h3.Title(v-html="r.translatedTitle")
                    p.nativeTitle(v-html="r.htmlTitle")
            p.text(v-html="r.translatedSnippet")

</template>

<style lang="scss">
.flex {
    &-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem
    }

    &-item {
        width: 100%;
    }
}

.Header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 7rem; // 高さを変更
    background-color: #f1f1f1;
    padding: 1rem; // 内側の余白を設定
    z-index: 1; // 必要に応じてz-indexを調整
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
    justify-content: start;

    .Logo {
        flex: 0 0 8rem;
    }

    .selects {
        justify-content: start;
    }

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        height: auto;
        gap: 1rem;

        .Logo {
            width: 10rem;
            flex: 0 0 3rem;
        }

        .selects {
            justify-content: center;
        }
    }

    @media screen and (max-width: 35rem) {
        .Logo {
            width: 6rem;
            flex: 0 0 2rem;
        }

        .SearchBox {
            height: 2.5rem;
        }

        .SelectRegion {
            height: 2.5rem;
        }

        .selects {
            flex-direction: column;
            gap: 0.5rem;
        }
    }
}

.Contents {
    padding-top: 10rem;
    width: 40rem; // 幅を調整
    margin-left: 10rem;
    justify-items: left;

    @media screen and (max-width: 1200px) {
        padding-top: 15rem;
        width: 90%;
        margin: 0 auto 0;
    }

    @media screen and (max-width: 35rem) {
        padding-top: 16rem;
    }

    .TranslateBox {
        display: block;
    }

    .result {
        margin-top: 30px;
        display: flex;
        flex-direction: column;

        .SiteTitle {
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            .favicon {
                width: 22px;
                height: 22px;
                border-radius: 50%;
                border: 1px solid #3c4043;
                margin-right: 10px;
            }

            .URL {
                font-size: 14px;
            }
        }

        .Title {
            color: #4754cb;
            text-decoration: underline; // Titleに下線を追加
        }

        .nativeTitle {
            color: #3c8fbe;
            margin-left: 3rem;
        }
    }
}
</style>
