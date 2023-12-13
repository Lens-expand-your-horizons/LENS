<script setup lang="ts">
import { Page } from '@/utils/types';
import type { Result } from '@/utils/types';

const query = useRoute().query.q as string;
let queryTranslated: string;
let detectedLang: string;
let results: Result[];

await fetch('https://api.lens-s.com/dev_v1', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `DeepL-Auth-Key ${useRuntimeConfig().public.deeplApiKey}`,
    },
    body: JSON.stringify({
        text: [query],
        target_lang: 'JA',
    }),
})
    .then(response => response.json())
    .then((data) => {
        queryTranslated = data.translations[0].text;
        detectedLang = data.translations[0].detected_source_language;
        console.log(queryTranslated);
        return data.translations[0].text;
    })
    .catch(error => console.error(error));

await fetch('https://customsearch.googleapis.com/customsearch/v1?' + new URLSearchParams({
    q: queryTranslated,
    key: useRuntimeConfig().public.gcseApiKey,
    cx: '018b4df2d1b814105',
}))
    .then(response => response.json())
    .then((data) => {
        results = data.items;
        console.log(results);
    })
    .catch(error => console.error(error));

</script>

<template lang="pug">
.page.flex-container
    .Header
        LensRow.flex-item
        form(action="/search", method="get").page__container.flex-item.flex-container
            SearchBox.flex-item(:page="Page.search", :text="queryTranslated")
        NuxtLink(to='/')
            | Home
    .Contents
        .result
            div(v-for="r in results" :key="r.cacheId")
                img(:src="`https://www.google.com/s2/favicons?domain=${r.displayLink}&sz=128`")
                h3(v-html="r.htmlTitle")
                div(v-html="r.htmlSnippet")
</template>

<style lang="scss">
body {
    margin: 20px; // bodyの外側の余白を指定する
    padding: 50px 10px 50px 10px; // bodyの内側余白を指定する(上:右:下:左)
    background-color: #fff;
}

.flex-item {
    position: relative;
    color: #111;
    z-index: 1; // LensRowをその他の要素よりも上に配置
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
    background-color: #A7C2EA;
    color: white;
    display: flex; // 子要素を横並びにするために追加
    gap: 30px;
    padding: 25px; // 内側の余白を設定
    z-index: 0; // 必要に応じてz-indexを調整
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

.result {
    width: 600px;
    margin-left: 130px;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    // 他のスタイルを追加
}
</style>
