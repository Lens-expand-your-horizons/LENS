<template lang="pug">
div
    h1 LENS
    form(action="search", method="get") 
        input(type="search", name="q", placeholder="Search...")
        label(for="search")
            svg(viewBox="0 0 24 24")
                path(:d="mdiGlasses")
        input.hide(type="submit", name="search" value="Search")
        label(for="search")
            svg(viewBox="0 0 24 24")
                path(:d="mdiSearchWeb")
        div
            input(type="checkbox", name="country", value="Japan")
            label(for="Japan") Japan
            input(type="checkbox", name="country", value="China")
            label(for="China") China
            input(type="checkbox", name="country", value="Korea")
            label(for="Korea") Korea
            input(type="checkbox", name="country", value="Taiwan")
            label(for="Taiwan") Taiwan
            input(type="checkbox", name="country", value="Hong Kong")
            label(for="Hong Kong") Hong Kong
            input(type="checkbox", name="country", value="Thailand")
            label(for="Thailand") Thailand
            input(type="checkbox", name="country", value="Philippines")
            label(for="Philippines") Philippines
            input(type="checkbox", name="country", value="Vietnam")
            label(for="Vietnam") Vietnam
            input(type="checkbox", name="country", value="Indonesia")
            label(for="Indonesia") Indonesia
            input(type="checkbox", name="country", value="Malaysia")
            label(for="Malaysia") Malaysia
            input(type="checkbox", name="country", value="Singapore")
            label(for="Singapore") Singapore
            input(type="checkbox", name="country", value="India")
            label(for="India") India
            input(type="checkbox", name="country", value="United States")
            label(for="United States") United States
            input(type="checkbox", name="country", value="United Kingdom")
            label(for="United Kingdom") United Kingdom
            input(type="checkbox", name="country", value="France")
            label(for="France") France

        details
            summary
                | Advanced Search
            div
                div
                    h2 Search Language
                    input(type="checkbox", name="searchLanguage", value="Japanese")
                    label(for="Japanese") Japanese
                    input(type="checkbox", name="searchLanguage", value="English")
                    label(for="English") English
                    input(type="checkbox", name="searchLanguage", value="Chinese")
                    label(for="Chinese") Chinese
                    input(type="checkbox", name="searchLanguage", value="Korean")
                    label(for="Korean") Korean
                div
                    h2 Translate To
                    select(name="translateTo")
                        option(value="Japanese") Japanese
                        option(value="English") English
                        option(value="Chinese") Chinese
                        option(value="Korean") Korean
                div
                    h2 Search Engine
                    input(type="checkbox", name="searchEngine", value="Google")
                    label(for="Google") Google
                    input(type="checkbox", name="searchEngine", value="Bing")
                    label(for="Bing") Bing
                    input(type="checkbox", name="searchEngine", value="Yahoo")
                    label(for="Yahoo") Yahoo
                    input(type="checkbox", name="searchEngine", value="Baidu")
                    label(for="Baidu") Baidu
                    input(type="checkbox", name="searchEngine", value="Yandex")
                    label(for="Yandex") Yandex
                    input(type="checkbox", name="searchEngine", value="DuckDuckGo")
                    label(for="DuckDuckGo") DuckDuckGo
                    input(type="checkbox", name="searchEngine", value="Ask")
                    label(for="Ask") Ask
                    input(type="checkbox", name="searchEngine", value="AOL")
                    label(for="AOL") AOL
                    input(type="checkbox", name="searchEngine", value="Excite")
                    label(for="Excite") Excite
                    input(type="checkbox", name="searchEngine", value="Lycos")
                    label(for="Lycos") Lycos
                    input(type="checkbox", name="searchEngine", value="WebCrawler")
                    label(for="WebCrawler") WebCrawler
                    input(type="checkbox", name="searchEngine", value="InfoSeek")
                    label(for="InfoSeek") InfoSeek
                    input(type="checkbox", name="searchEngine", value="AltaVista")
                    label(for="AltaVista") AltaVista
                    input(type="checkbox", name="searchEngine", value="HotBot")
                    label(for="HotBot") HotBot
                    input(type="checkbox", name="searchEngine", value="AllTheWeb")
                    label(for="AllTheWeb") AllTheWeb
                    input(type="checkbox", name="searchEngine", value="Galaxy")
                    label(for="Galaxy") Galaxy
                    input(type="checkbox", name="searchEngine", value="WOW")
                    label(for="WOW") WOW
                    input(type="checkbox", name="searchEngine", value="Teoma")
                    label(for="Teoma") Teoma
                    input(type="checkbox", name="searchEngine", value="Gigablast")
                    label(for="Gigablast") Gigablast
                    input(type="checkbox", name="searchEngine", value="LookSmart")
                    label(for="LookSmart") LookSmart
                    input(type="checkbox", name="searchEngine", value="Wisenut")
                    label(for="Wisenut") Wisenut
                    input(type="checkbox", name="searchEngine", value="Search")
                    label(for="Search") Search
                    input(type="checkbox", name="searchEngine", value="Dogpile")
                    label(for="Dogpile") Dogpile
                    input(type="checkbox", name="searchEngine", value="Mamma")
                    label(for="Mamma") Mamma
                    input(type="checkbox", name="searchEngine", value="HotSheet")
                    label(for="HotSheet") HotSheet
                    input(type="checkbox", name="searchEngine", value="MetaCrawler")
                    label(for="MetaCrawler") MetaCrawler
                    input(type="checkbox", name="searchEngine", value="IxQuick")
                    label(for="IxQuick") IxQuick
                    input(type="checkbox", name="searchEngine", value="ExciteUK")
                    label(for="ExciteUK") ExciteUK
                    input(type="checkbox", name="searchEngine", value="InfoSpace")
                    label(for="InfoSpace") InfoSpace
                    input(type="checkbox", name="searchEngine", value="Netscape")
                    label(for="Netscape") Netscape
                    input(type="checkbox", name="searchEngine", value="AltaVistaUK")
                    label(for="AltaVistaUK") AltaVistaUK

                    
</template>

<script setup lang="ts">
import { mdiSearchWeb, mdiGlasses } from '@mdi/js';
</script>

<style lang="scss">
.submit.btn{
    display: none;
}
</style>