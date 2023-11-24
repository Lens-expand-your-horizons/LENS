<script setup lang="ts">
import { mdiMagnify } from '@mdi/js';

const emits = defineEmits(['submit']);

mounted() {
    this.$gcse.load(this.callback());
},

</script>

<template lang="pug">
.SearchBox
    script(async, src="https://cse.google.com/cse.js?cx=018b4df2d1b814105")
    .gcse-search
    input#q.q(type="search", enterkeyhint="search", name="q", placeholder="Search...")
    label(for="q")
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
            width: 2rem;
            height: 2rem;
        }
        cursor: pointer;
    }
}
</style>