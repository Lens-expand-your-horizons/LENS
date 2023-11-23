<script setup lang="ts">
import { mdiMagnify } from '@mdi/js';

const emits = defineEmits(['submit']);

</script>

<template lang="pug">
.SearchBox
    input#q.q(type="search", enterkeyhint="search", name="q", placeholder="Search...")
    input#search.hide(type="submit", name="search", value="Search")
    label(for="search")
        svg(viewBox="0 0 24 24")
            path(:d="mdiMagnify")
</template>

<style lang="scss">
.SearchBox {
    .q{
        font-size: 1.5rem;
        padding: 0 1rem;
    }
    .hide{
        display: none;
    }
    label{
        svg{
            width: 20rem;
            height: 2rem;
        }
        cursor: pointer;
    }
}
</style>