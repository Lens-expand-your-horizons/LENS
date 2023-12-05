<script setup lang="ts">
useSeoMeta({
    title: 'LENS: expand your horizons',
    description: 'Meta search engine that allows you to search the web in different languages and different countries.',
    ogTitle: 'LENS: expand your horizons',
    ogDescription: 'Meta search engine that allows you to search the web in different languages and different countries.',
    ogUrl: 'https://lens-s.com',
});
</script>

<template lang="pug">
.page.flex-container
    TitleRow.flex-item
    form(action="Japanese", method="get").page__container.flex-item.flex-container
        SearchBox.flex-item
        hr
        // p 英文のWebサイトを日本語で検索・閲覧できます
</template>

<style lang="scss">
/* ページ全体の背景色を指定 */
body {
    background-color: #fff;
}

/* フォームのスタイル */
.page.flex-container {
    margin: 150px; // 他のスタイルを追加
}

form {
    justify-content: flex-start; // 要素を左寄せにする
    padding-left: 20px; // 左側の余白を追加
    margin: 30px; // 他のスタイルを追加
}

hr {
    border: none;
    border-bottom: 1px solid black; // 下線のスタイルを指定
}

p {
    margin: 50px;
    text-decoration: underline; // テキストの下線を追加
    color: gray;
}

/* 検索結果のスタイル */
.result {
    display: flex;
    flex-direction: column; // 他のスタイルを追加
}

/* 検索結果の各列のスタイル */
.column {
    margin-bottom: 20px; // 他のスタイルを追加
}

/* その他、必要なスタイルを追加 */
/* ... */

.flex {
    &-container {
        justify-content: flex-start; // 要素を左寄せにする
        padding-left: 20px; // 左側の余白を追加
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
