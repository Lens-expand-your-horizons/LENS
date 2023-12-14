<script setup lang="ts">
import { ref } from 'vue';

const {
    name = 'region',
    placeholder = '',
    defaultSelected = '',
    options = [],
} = defineProps<{
    name: string,
    placeholder: string,
    defaultSelected?: string,
    options: { value: string, label: string }[],
}>();

const selected = ref(defaultSelected);

</script>

<template lang="pug">
div
    label(for="countries")
    select#country.custom-select(
        :name="name"
        v-model="selected"
    )
        option(
            value=""
            disabled
        ) {{ placeholder }}
        option(
            v-for="opt in options"
            :value="opt.value"
            :label="opt.label"
            :selected="opt.value === defaultSelected"
        ) 
</template>

<style>
/* セレクトボックスのスタイル */
.custom-select {
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    width: 250px;
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z" fill="none" stroke="#000"/></svg>');
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: center;
    background-color: #fff;
    background-size: 16px;
}

/* ホバー時のスタイル */
.custom-select:hover {
    border-color: #555;
}

/* アクティブ時のスタイル */
.custom-select:focus {
    outline: none;
    border-color: dodgerblue;
}
</style>
