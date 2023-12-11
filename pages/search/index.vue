<script setup lang="ts">
import { Page } from '@/components/types';
import type { Result } from '@/components/types';

let results: Result[];
const q = useRoute().query.q as string;
const params = new URLSearchParams({
    q,
    key: useRuntimeConfig().public.gcseApiKey,
    cx: '018b4df2d1b814105',
});
await fetch('https://customsearch.googleapis.com/customsearch/v1?' + params)
    .then((response) => response.json())
    .then((data) => {
        results = data.items;
        console.log(results);
    })
    .catch((error) => console.error(error));
</script>

<template lang="pug">
.page.flex-container
    .Header
        LensRow.flex-item
        form(action="/search", method="get").page__container.flex-item.flex-container
            SearchBox.flex-item(:page="Page.search")
        NuxtLink(to='/')
            | Home
    .Contents
        .result
            div(v-for="r in results" :key="r.cacheId")
                hgroup
                    img.Icon(:src="r.pagemap.cse_thumbnail ? r.pagemap.cse_thumbnail[0].src : './favicon.svg'",)
                    p.SiteName(v-html="r.displayLink")
                    p.URL(v-html="r.displayLink")
                    h3.Title(v-html="r.htmlTitle")
                    p.nativeTitle(v-html="r.htmlTitle")
                p.text(v-html="r.htmlSnippet")

</template>

<style lang="scss">
.Title {
    color: #4754cb;
}
.nativeTitle {
    color: #3c8fbe;
}
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
    background-color: #a7c2ea;
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
.result {
    width: 800px; // 幅を調整
    margin-left: 130px;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    // 他のスタイルを追加
}

.result-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px; // 各結果間のマージンを調整
}

.result-content {
    flex: 1; // タイトルとその他のコンテンツを横並びにする
}

.Title {
    color: #4754cb;
    text-decoration: underline; // Titleに下線を追加
}

.SiteName,
.URL {
    margin-bottom: 5px; // SiteNameとURL間のマージンを追加
}
</style>
