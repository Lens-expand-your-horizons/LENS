<template lang="pug">
.root
    form(action="/search", method="get")
        img(src="/lens.svg", alt="lens")
        .glasses 
            svg(viewBox="0 0 24 24")
                path(:d="mdiGlasses")
        .searchbox 
            input(type="search", style="width: 400px; height: 40px;"
            name="q", placeholder="  検索/Webサイト名を入力") 
            input#search(type="submit", name="search", value="Search")
            label(for="search")
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.5712 24.9462H26.1887L25.6987 24.4737C27.4137 22.4787 28.4462 19.8887 28.4462 17.0712C28.4462 10.7887 23.3537 5.69624 17.0712 5.69624C10.7887 5.69624 5.69623 10.7887 5.69623 17.0712C5.69623 23.3537 10.7887 28.4462 17.0712 28.4462C19.8887 28.4462 22.4787 27.4137 24.4737 25.6987L24.9462 26.1887V27.5712L33.6962 36.3037L36.3037 33.6962L27.5712 24.9462ZM17.0712 24.9462C12.7137 24.9462 9.19623 21.4287 9.19623 17.0712C9.19623 12.7137 12.7137 9.19624 17.0712 9.19624C21.4287 9.19624 24.9462 12.7137 24.9462 17.0712C24.9462 21.4287 21.4287 24.9462 17.0712 24.9462Z" fill="black"/>
                </svg>
        div
            .country(v-for="country in options.country" :key="country")
                input(type="checkbox", name="country", :value="country", :id="country")
                label(:for="country") {{ country }}
        
        details
            summary Advanced Search
            div
                div
                    h2 Search Language
                    .searchLanguage(v-for="searchLanguage in options.searchLanguage" :key="searchLanguage")
                        input(type="checkbox", name="searchLanguage", :value="searchLanguage")
                        label(:for="searchLanguage") {{ searchLanguage }}
                div
                    h2 Translate To
                    select(name="translateTo")
                        option(
                            v-for="translateTo in options.translateTo"
                            :key="translateTo" :value="translateTo"
                        ) {{ translateTo }}
                div
                    h2 Search Engine
                    .searchEngine(v-for="searchEngine in options.searchEngine" :key="searchEngine")
                        input(type="checkbox", name="searchEngine", :value="searchEngine")
                        label(:for="searchEngine") {{ searchEngine }}
        
</template>

<script setup>

import { mdiSearchWeb, mdiGlasses } from '@mdi/js';

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

<style lang="scss">

.searchbox{ 
    width: 200px;        
    position: relative;  
    top: 0px;
    left: 0px;
}

body{
    background-color: #e7e7eb;
}

.country{
    display: flex;
}
.country label{
    display: block;
    width: 180px;
    background: #c8eac3;
    color: #000;
    padding: 40px;
    margin: 50px;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    border-radius: 20px;
    cursor: pointer;
}
.country input:checked+label{
    background: #1a720d;
    color: #FFF;
}
.country input{
    display: none;
}

summary{
    display: block;
    width: 100px;
    background: #987fc0;
    color: #000;
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    border-radius: 30px;
    cursor: pointer;  
}

.glasses{
    width: 200px
}

</style>
