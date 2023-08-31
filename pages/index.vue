<script setup lang="ts">
import { mdiGlasses } from '@mdi/js';

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
.room
    TitleRow
    form(action="search", method="get")
        label(for="q")
        SearchBox
        fieldset
            CheckBoxRow(:array="options.country")

        details.advS
            summary.toggle Advanced Search
            div
                fieldset
                    legend Search Language
                    CheckBoxRow(:array="options.searchLanguage")
                fieldset
                    legend Translate To
                    select(name="translateTo")
                        option(
                            v-for="translateTo in options.translateTo"
                            :key="translateTo" :value="translateTo"
                        ) {{ translateTo }}
                fieldset
                    legend Search Engine
                    CheckBoxRow(:array="options.searchEngine")

                    
</template>

<style lang="scss">
.advS {
    width: 80%;
}
</style>