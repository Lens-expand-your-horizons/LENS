<template lang="pug">
div
    label(for="language")
    input#language.custom-select(
        type="text"
        name="language"
        list="languageList"
        v-model="selectedLanguage"
        placeholder="使う言語を選択してください"
    )
    datalist#languageList
        option(
            v-for="language in language"
            :key="language.value"
            :value="language.label"
        )
</template>

<script setup>
import { ref } from 'vue';

const selectedLanguage = ref(null);

const language = [
    { value: 'japan', label: 'Japan' },
    { value: 'usa', label: 'USA' },
    // 他の国のデータも追加することができます
];
</script>

<style>
/* セレクトボックスのスタイル */
.custom-select {
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    width: 300px;
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
