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
</template>

<style lang="scss">
/* ここにCSSを記述します */

/* ページ全体の背景色を指定 */
body {
  background-color: #fff;
}

/* フォームのスタイル */
.page.flex-container {
  margin: 170px;
  /* 他のスタイルを追加 */
}

.page__container.flex-item.flex-container{
  margin: 30px;
  /* 他のスタイルを追加 */
}

/* 検索結果のスタイル */
.result {
  display: flex;
  flex-direction: column;
  /* 他のスタイルを追加 */
}

/* 検索結果の各列のスタイル */
.column {
  margin-bottom: 20px;
  /* 他のスタイルを追加 */
}

/* その他、必要なスタイルを追加 */
/* ... */

.flex {
    &-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

</style>