<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    origin: {
        type: String,
        default: '',
    },
    translate: {
        type: String,
        default: '',
    },
});
</script>

<template lang="pug">
dl.Box
    dt Original
    dd {{ origin }}
    dt Translated
    dd {{ translate }}
</template>

<style lang="scss">
.Box {
    border: 1px solid #111;
    padding: 15px;
    background-color: #f1f1f1;
    border-radius: 10px;
    width: 100%;
    max-width: 35rem;

    dt {
        font-weight: bold;
    }

    dd {
        margin-left: 2rem;
    }
}
</style>
