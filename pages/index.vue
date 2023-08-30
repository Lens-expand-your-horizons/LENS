<script setup lang="ts">
import { mdiSearchWeb, mdiGlasses } from '@mdi/js';

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
    h1 LENS
    form(action="search", method="get") 
        input(type="search", enterkeyhint="search", name="q", placeholder="Search...")
        label(for="search")
            svg(viewBox="0 0 24 24")
                path(:d="mdiGlasses")
        input.hide(type="submit", name="search" value="Search")
        label(for="search")
            svg(viewBox="0 0 24 24")
                path(:d="mdiSearchWeb")
        div
            CheckBoxRow(:array="options.country")

        details
            summary Advanced Search
            div
                div
                    h2 Search Language
                    CheckBoxRow(:array="options.searchLanguage")
                div
                    h2 Translate To
                    select(name="translateTo")
                        option(
                            v-for="translateTo in options.translateTo"
                            :key="translateTo" :value="translateTo"
                        ) {{ translateTo }}
                div
                    h2 Search Engine
                    CheckBoxRow(:array="options.searchEngine")

                    
</template>

<style lang="scss">
.submit.btn{
    display: none;
}
</style>