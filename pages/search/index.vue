<template lang="pug">
div
    form(action="/search" method="get")
        NuxtLink(to="/")
            svg(viewBox="0 0 24 24")
                path(:d="mdiGlasses")
            h1 LENS
        input(type="search", name="q", placeholder="Search...")
        input.hide(type="submit", value="Search")
        label(for="search")
            svg(viewBox="0 0 24 24")
                path(:d="mdiSearchWeb")
</template>

<script setup lang="ts">
import { mdiSearchWeb, mdiGlasses } from '@mdi/js';
</script>

<style lang="scss">

</style>