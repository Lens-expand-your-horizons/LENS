<template lang="pug">
div
    form(action="/search" method="get")
        NuxtLink(to="/")
            svg(viewBox="0 0 24 24")
                path(:d="mdiGlasses")
            h1 LENS
        input(type="search", name="q", enterkeyhint="search", placeholder="Search...", :value="$route.query.q")
        input.hide(type="submit", name="search" value="Search")
        label(for="search")
            svg(viewBox="0 0 24 24")
                path(:d="mdiSearchWeb")
    .result
        .column(v-for="c in columns" :key="c.searchEngine")
            h2 {{c.searchEngine}}
            div
                div(v-for="row in c.result" :key="row.id")
                    h3 {{ row.name }}
                    div {{ row.detail }}
</template>

<script setup lang="ts">
import { mdiSearchWeb, mdiGlasses } from '@mdi/js';
const columns = [
    {
        searchEngine: 'Google',
        result: [
            {
                id: 1,
                name: 'result1',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
            },
            {
                id: 2,
                name: 'result2',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
            },
        ]
    },
    {
        searchEngine: 'Bing',
        result: [
            {
                id: 1,
                name: 'result1',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
            },
            {
                id: 2,
                name: 'result2',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
            },
        ]
    }
]
</script>

<style lang="scss">
body {
  background-color: #fa4d4d;
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
</style>