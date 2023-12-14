<script setup lang="ts">
import { Page } from '@/utils/types';
import type { DeepLResult, GoogleResult } from '@/utils/types';
import { fromOptions, toOptions } from '@/utils/consts';

const query = useRoute().query.q as string;
const from = useRoute().query.from as string ?? 'auto';
const to = useRoute().query.to as string ?? 'JA';
let queryTranslated = '';
let detectedLang = '';
let results: GoogleResult[];
const resultsToBeTranslated: string[] = [];

await fetch('https://api.lens-s.com/dev_v1/translate/deepl', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        text: [query],
        source_lang: from === 'auto' ? undefined : from,
        target_lang: to,
    }),
})
    .then((response) => response.json())
    .then((data) => {
        queryTranslated = data.translations[0].text;
        detectedLang = data.translations[0].detected_source_language;
        return data.translations[0].text;
    });

await fetch(
    `https://api.lens-s.com/dev_v1/search/google?q=${queryTranslated}`,
)
    .then((response) => response.json())
    .then((data) => {
        results = data.items;
        results.forEach((r) => {
            resultsToBeTranslated.push(r.title);
            resultsToBeTranslated.push(r.snippet);
        });
    });

await fetch('https://api.lens-s.com/dev_v1/translate/deepl', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        text: resultsToBeTranslated,
        target_lang: detectedLang,
    }),
})
    .then((response) => response.json())
    .then((data: DeepLResult) => {
        data.translations.forEach((t, i) => {
            if (i % 2 === 0) {
                results[i / 2].translatedTitle = t.text;
            } else {
                results[(i - 1) / 2].translatedSnippet = t.text;
            }
        });
    });
</script>

<template lang="pug">
.page.flex-container
    form(action="/search", method="get").Header
        NuxtLink(to='/').flex-item.Home
            TitleRow
        form(action="/search", method="get").page__container.flex-item.flex-container
            SearchBox.flex-item(:page="Page.search", :text="query")
        SelectRegion.flex-item.Countries(
            name="from"
            placeholder="入力した言語"
            :options="fromOptions"
        )
        SelectRegion.flex-item.Language(
            name="to"
            placeholder="検索したい言語"
            :options="toOptions"
        )
    .Contents
        TranslateBox.flex-item.Box(
            :origin="query"
            :translate="queryTranslated"
        )
        .result(v-for="r in results" :key="r.cacheId")
            a(:href="r.link")
                hgroup
                    .SiteTitle
                        img.favicon(:src="`https://www.google.com/s2/favicons?domain=${r.displayLink}&sz=128`")
                        p.URL(v-html="r.displayLink")
                    h3.Title(v-html="r.translatedTitle")
                    p.nativeTitle(v-html="r.htmlTitle")
            p.text(v-html="r.translatedSnippet")

</template>

<style lang="scss">
.SiteTitle {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.URL {
    font-size: 14px;
}

.favicon {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid #3c4043;
    /* 外枠を追加 */
    margin-right: 10px;
    /* アイコンとURLの間のマージンを追加 */
}

.Home {
    display: block;
    width: 7rem;
}

.nativeTitle {
    color: #3c8fbe;
    margin-left: 20px;
}

body {
    margin: 20px; // bodyの外側の余白を指定する
    padding: 50px 10px 50px 10px; // bodyの内側余白を指定する(上:右:下:左)
    background-color: #fff;
}

.flex-item {
    position: relative;
    color: #111;
}

form {
    position: relative;
    z-index: 1; // LensRowをその他の要素よりも上に配置
}

.Header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px; // 高さを変更
    background-color: #f1f1f1;
    display: flex; // 子要素を横並びにするために追加
    gap: 30px;
    padding: 25px; // 内側の余白を設定
    z-index: 1; // 必要に応じてz-indexを調整
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
}

button.back-button {
    width: 100px;
    height: 40px;
    border-radius: 50px; // 楕円形にするための設定
    background-color: #fff; // 青色の背景
    color: #111; // 文字色
    text-align: center; // 文字を中央揃え
    line-height: 40px; // ボタンの高さと同じにする
    cursor: pointer;
}

.Box {
    display: block;
    margin-left: 130px;
    margin-top: 20px;
}

.Contents {
    padding-top: 40px;

    .result {
        width: 800px; // 幅を調整
        margin-left: 130px;
        margin-top: 30px;
        display: flex;
        flex-direction: column;

        .Title {
            color: #4754cb;
            text-decoration: underline; // Titleに下線を追加
        }
    }
}
</style>
