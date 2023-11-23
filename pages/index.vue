<script setup lang="ts">
useSeoMeta({
    title: 'LENS: expand your horizons',
    description: 'Meta search engine that allows you to search the web in different languages and different countries.',
    ogTitle: 'LENS: expand your horizons',
    ogDescription: 'Meta search engine that allows you to search the web in different languages and different countries.',
    ogUrl: 'https://lens-s.com',
});

const options = {
    country: [
        'Japan',
        'China',
        'Korea',
        'Taiwan',
        'Hong Kong',
        'Thailand',
        'Philippines',
        'Vietnam',
        'Indonesia',
        'Malaysia',
        'Singapore',
        'India',
        'United States',
        'United Kingdom',
        'France',
    ],
    searchLanguage: [
        'Japanese',
        'English',
        'Chinese',
        'Korean',
    ],
    translateTo: [
        'Japanese',
        'English',
        'Chinese',
        'Korean',
    ],
    searchEngine: [
        'Google',
        'Bing',
        'Yahoo',
        'Baidu',
        'Yandex',
        'DuckDuckGo',
        'Ask',
        'AOL',
        'Excite',
        'Lycos',
        'WebCrawler',
        'InfoSeek',
        'AltaVista',
        'HotBot',
        'AllTheWeb',
        'Galaxy',
        'WOW',
        'Teoma',
        'Gigablast',
        'LookSmart',
        'Wisenut',
        'Search',
        'Dogpile',
        'Mamma',
        'HotSheet',
        'MetaCrawler',
        'IxQuick',
        'ExciteUK',
        'InfoSpace',
        'Netscape',
        'AltaVistaUK',
    ],
};
</script>

<template lang="pug">
.page.flex-container
    TitleRow.flex-item
    form(action="search", method="get").page__container.flex-item.flex-container
        SearchBox.flex-item
        fieldset.flex-item.page__field
            CheckBoxRow(:array="options.country")

        details.page__container.flex-item.flex-container
            AdvancedSearchToggle.flex-item
            fieldset.flex-item.page__field
                legend.page__group-title Search Language
                CheckBoxRow(:array="options.searchLanguage")
            fieldset.flex-item.page__field
                legend.page__group-title Translate To
                select(name="translateTo")
                    option(
                        v-for="translateTo in options.translateTo"
                        :key="translateTo" :value="translateTo"
                    ) {{ translateTo }}
            fieldset.flex-item.page__field
                legend.page__group-title Search Engine
                CheckBoxRow(:array="options.searchEngine")

                    
</template>

<style lang="scss">
/* ここにCSSを記述します */

/* ページ全体の背景色を指定 */
body {
  background-color: #fff;
}

/* フォームのスタイル */
form {
  margin-bottom: 20px;
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

        &--row{
            flex-direction: row;
        }
    }
    &-item{
        flex-shrink: 0;
        overflow: visible;
    }
}


</style>