<script setup lang="ts">
import { mdiGlasses } from '@mdi/js';
</script>

<template lang="pug">
hgroup.titleRow
    svg(viewBox="0 0 24 24")
        path(:d="mdiGlasses")
    h1 LENS
</template>

<style lang="scss">
.titleRow {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    svg {
        width: 2rem;
        height: 2rem;
    }
    h1 {
        font-size: 2rem;
        margin: 0;
        padding: 0;
    }
}
</style>