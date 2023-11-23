<template lang="pug">
.root
    form(action="/search", method="get")
        .image 
            .lens 
                img(src="/lens.svg", alt="lens")
            .glasses 
                img(src="/glasses.svg", alt="glasses")
        .searchbox 
            input(type="search", style="width: 400px; height: 40px; border-radius: 30px;",
            name="q", placeholder="     検索/Webサイト名を入力")
            .searchbotton 
                input#search(type="submit", name="search", value="Search")
            .magglass 
                label(for="search")
                    <svg width="30" height="30" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.5712 24.9462H26.1887L25.6987 24.4737C27.4137 22.4787 28.4462 19.8887 28.4462 17.0712C28.4462 10.7887 23.3537 5.69624 17.0712 5.69624C10.7887 5.69624 5.69623 10.7887 5.69623 17.0712C5.69623 23.3537 10.7887 28.4462 17.0712 28.4462C19.8887 28.4462 22.4787 27.4137 24.4737 25.6987L24.9462 26.1887V27.5712L33.6962 36.3037L36.3037 33.6962L27.5712 24.9462ZM17.0712 24.9462C12.7137 24.9462 9.19623 21.4287 9.19623 17.0712C9.19623 12.7137 12.7137 9.19624 17.0712 9.19624C21.4287 9.19624 24.9462 12.7137 24.9462 17.0712C24.9462 21.4287 21.4287 24.9462 17.0712 24.9462Z" fill="black"/>
                    </svg>
        .pacountry 
            .country(v-for="country in options.country" :key="country")
                input(type="checkbox", name="country", :value="country", :id="country")
                label(:for="country") {{ country }}
        
        details 
            summary 
                .adbox="Advanced Search"
            .adad  
                .translate 
                    regular TRANSLATE TO
                    select(name="translateTo")
                        option(
                            v-for="translateTo in options.translateTo"
                            :key="translateTo" :value="translateTo"
                            ) {{ translateTo }}
                .searchlanguage  
                    regular Search Language
                    searchLanguage(v-for="searchLanguage in options.searchLanguage" :key="searchLanguage")
                        input(type="checkbox", name="searchLanguage", :value="searchLanguage", :id="searchLanguage")
                        label(:for="searchLanguage") {{ searchLanguage }}
                .searchengine 
                    regular Search Engine
                    searchEngine(v-for="searchEngine in options.searchEngine" :key="searchEngine")
                        input(type="checkbox", name="searchEngine", :value="searchEngine", :id="searchEngine")
                        label(:for="searchEngine") {{ searchEngine }}
        
</template>

<script setup>

const options = {
    country: [
        'Japan',
        'China',
        'Korea',
        'Russia',
        'Germany',
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

body{
    background-color: #e7e7eb;
}

.image{
    display: flex;
    justify-content: center;
    margin: 20px;
}

.lens{
    width: 300px;
    position: relative;
    top: 30px;
    margin-left: -30px;
}

.glasses{
    position: relative;
    top: 20px;
}

.searchbox{
    text-align: center
}

.magglass{
    margin-top: -36px;
    margin-left: 330px;
}

.searchbotton{
    display:none;
}

.pacountry{
    display: flex;
    overflow-x: scroll;
    overflow: scroll;
    width: 450px;
    align-items:stretch;
    position: relative;
    top: 20px;
    left: 420px;
}

.pacountry::-webkit-scrollbar{
  display: none;
}

.country label{
    display: block;
    background: #fff;
    color: #000;
    border: 2px solid #111;
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    border-radius: 20px;

    cursor: pointer;
}
.country input:checked+label{
    background: #d9d9d9;
    color: #111;
}
.country input{
    display: none;
}

.adbox{
    display: block;
    text-align: center;
    border: 2px solid #111212;
    background: #d9d9d9;
    padding: 20px;
    width: 300px;
    border-radius: 30px;
    cursor: pointer;  
    position: relative;
    left: 490px;
}
.translate {
    background: #ffffff;
    border: 2px solid #111;
    border-radius: 10px;
    position: relative;
    top: 0px;
    left: 0px;
    text-align: center;
    padding: 20px;
    margin-top: 30px;
}

.translate select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    min-width: 230px;
    height: 2.8em;
    padding: .4em 3.6em .4em .8em;
    border: 2px solid #111;
    border-radius: 3px;
    color: #333333;
    font-size: 1em;
    cursor: pointer;
    margin-left: 30px;
}

.translate select:focus {
    outline: 1px solid #111;
}

.searchlanguage {
    display: flex;
    overflow-x: scroll;
    align-items:stretch; 
    background: #ffffff;
    border: 2px solid #111;
    border-radius: 3px;
    position: relative;
    top: 0px;
    left: 0px;
    text-align: center;
    padding: 20px;
    margin-top: 30px;
}
.searchlanguage label{
    display: block;
    background: #fff;
    border: 2px solid #111;
    color: #000;
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    border-radius: 20px;

    cursor: pointer;
}
.searchlanguage input:checked+label{
    background: #d9d9d9;
    color: #111;
}
.searchlanguage input{
    display: none;
}

.searchlanguage::-webkit-scrollbar{
  display: none;
}

.searchengine{
    display: flex;
    overflow-x: scroll;
    align-items:stretch;
    background: #ffffff;
    border: 2px solid #111;
    border-radius: 3px;
    position: relative;
    top: 0px;
    left: 0px;
    text-align: center;
    padding: 20px;
    margin-top: 30px;
}
.searchengine label{
    display: block;
    border: 2px solid #111;
    background: #fff;
    color: #000;
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    border-radius: 20px;

    cursor: pointer;
}
.searchengine input:checked+label{
    background: #d9d9d9;
    color: #111;
}
.searchengine input{
    display: none;
}

.searchengine::-webkit-scrollbar{
  display: none;
}
</style>
