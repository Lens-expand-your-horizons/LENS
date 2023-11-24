<script setup lang="ts">
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
    ],}
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
<style>
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