<template lang="pug">
div
    form(action="/search" method="get")
        NuxtLink(to="/")
            svg(viewBox="0 0 24 24")
                path(:d="mdiGlasses")
            h1 LENS
        input(type="search", name="q", placeholder="Search...", :value="$route.query.q")
        input.hide(type="submit", name="search" value="Search")
        label(for="search")
            svg(viewBox="0 0 24 24")
                path(:d="mdiSearchWeb")
    .result
        .column
            h2 {{c1.searchEngine}}
            div
                div(v-for="row in c1.result" :key="row.id")
                    h3 {{ row.name }}
                    div {{ row.detail }}
        .column
            h2 {{c2.searchEngine}}
            div
                div(v-for="row in c2.result" :key="row.id")
                    h3 {{ row.name }}
                    div {{ row.detail }}
</template>

<script setup lang="ts">
import { mdiSearchWeb, mdiGlasses } from '@mdi/js';
const c1 = {
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
};
const c2 = {
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
};
</script>

<style lang="scss">

</style>