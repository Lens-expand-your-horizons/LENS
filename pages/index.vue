<template lang="pug">
.room 
    h1 LENS
    form(action="search", method="get") 
        input(type="search", name="q", placeholder="Search...")
        input(type="submit", value="Search")
        div
            input(type="checkbox", name="Japan", value="Japan")
            label(for="Japan") Japan
            input(type="checkbox", name="China", value="China")
            label(for="China") China
            input(type="checkbox", name="Korea", value="Korea")
            label(for="Korea") Korea
            input(type="checkbox", name="Taiwan", value="Taiwan")
            label(for="Taiwan") Taiwan
            input(type="checkbox", name="Hong Kong", value="Hong Kong")
            label(for="Hong Kong") Hong Kong
            input(type="checkbox", name="Thailand", value="Thailand")
            label(for="Thailand") Thailand
            input(type="checkbox", name="Philippines", value="Philippines")
            label(for="Philippines") Philippines
            input(type="checkbox", name="Vietnam", value="Vietnam")
            label(for="Vietnam") Vietnam
            input(type="checkbox", name="Indonesia", value="Indonesia")
            label(for="Indonesia") Indonesia
            input(type="checkbox", name="Malaysia", value="Malaysia")
            label(for="Malaysia") Malaysia
            input(type="checkbox", name="Singapore", value="Singapore")
            label(for="Singapore") Singapore
            input(type="checkbox", name="India", value="India")
            label(for="India") India
            input(type="checkbox", name="United States", value="United States")
            label(for="United States") United States
            input(type="checkbox", name="United Kingdom", value="United Kingdom")
            label(for="United Kingdom") United Kingdom
            input(type="checkbox", name="France", value="France")
            label(for="France") France
        details
            summary
                | Advanced Search
            div
                div
                    h2 Search Language
                    input(type="checkbox", name="Japanese", value="Japanese")
                    label(for="Japanese") Japanese
                    input(type="checkbox", name="English", value="English")
                    label(for="English") English
                    input(type="checkbox", name="Chinese", value="Chinese")
                    label(for="Chinese") Chinese
                    input(type="checkbox", name="Korean", value="Korean")
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
                    input(type="checkbox", name="Google", value="Google")
                    label(for="Google") Google
                    input(type="checkbox", name="Bing", value="Bing")
                    label(for="Bing") Bing
                    input(type="checkbox", name="Yahoo", value="Yahoo")
                    label(for="Yahoo") Yahoo
                    input(type="checkbox", name="Baidu", value="Baidu")
                    label(for="Baidu") Baidu
                    input(type="checkbox", name="Yandex", value="Yandex")
                    label(for="Yandex") Yandex
                    input(type="checkbox", name="DuckDuckGo", value="DuckDuckGo")
                    label(for="DuckDuckGo") DuckDuckGo
                    input(type="checkbox", name="Ask", value="Ask")
                    label(for="Ask") Ask
                    input(type="checkbox", name="AOL", value="AOL")
                    label(for="AOL") AOL
                    input(type="checkbox", name="Excite", value="Excite")
                    label(for="Excite") Excite
                    input(type="checkbox", name="Lycos", value="Lycos")
                    label(for="Lycos") Lycos
                    input(type="checkbox", name="WebCrawler", value="WebCrawler")
                    label(for="WebCrawler") WebCrawler
                    input(type="checkbox", name="InfoSeek", value="InfoSeek")
                    label(for="InfoSeek") InfoSeek
                    input(type="checkbox", name="AltaVista", value="AltaVista")
                    label(for="AltaVista") AltaVista
                    input(type="checkbox", name="HotBot", value="HotBot")
                    label(for="HotBot") HotBot
                    input(type="checkbox", name="AllTheWeb", value="AllTheWeb")
                    label(for="AllTheWeb") AllTheWeb
                    input(type="checkbox", name="Galaxy", value="Galaxy")
                    label(for="Galaxy") Galaxy
                    input(type="checkbox", name="WOW", value="WOW")
                    label(for="WOW") WOW
                    input(type="checkbox", name="Teoma", value="Teoma")
                    label(for="Teoma") Teoma
                    input(type="checkbox", name="Gigablast", value="Gigablast")
                    label(for="Gigablast") Gigablast
                    input(type="checkbox", name="LookSmart", value="LookSmart")
                    label(for="LookSmart") LookSmart
                    input(type="checkbox", name="Wisenut", value="Wisenut")
                    label(for="Wisenut") Wisenut
                    input(type="checkbox", name="Search", value="Search")
                    label(for="Search") Search
                    input(type="checkbox", name="Dogpile", value="Dogpile")
                    label(for="Dogpile") Dogpile
                    input(type="checkbox", name="Mamma", value="Mamma")
                    label(for="Mamma") Mamma
                    input(type="checkbox", name="HotSheet", value="HotSheet")
                    label(for="HotSheet") HotSheet
                    input(type="checkbox", name="MetaCrawler", value="MetaCrawler")
                    label(for="MetaCrawler") MetaCrawler
                    input(type="checkbox", name="IxQuick", value="IxQuick")
                    label(for="IxQuick") IxQuick
                    input(type="checkbox", name="ExciteUK", value="ExciteUK")
                    label(for="ExciteUK") ExciteUK
                    input(type="checkbox", name="InfoSpace", value="InfoSpace")
                    label(for="InfoSpace") InfoSpace
                    input(type="checkbox", name="Netscape", value="Netscape")
                    label(for="Netscape") Netscape
                    input(type="checkbox", name="AltaVistaUK", value="AltaVistaUK")
                    label(for="AltaVistaUK") AltaVistaUK
                    input(type="checkbox", name="ecosia", value="ecosia")
                    label(for="ecosia") ecosia 
                    
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
</style>