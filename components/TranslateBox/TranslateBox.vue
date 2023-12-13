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
  dt 翻訳前
  dd {{ origin }}
  dt 翻訳後
  dd {{ translate }}
</template>

<style lang="scss">
.Box {
    border: 1px solid #111; /* 外枠を追加 */
    padding: 15px; /* 内側の余白を設定 */
    background-color: #f1f1f1; /* 赤色の背景を設定 */
    border-radius: 10px;
    width: 530px;

    dt {
        font-weight: bold; /* 「翻訳後」の文字を太くする */
    }

    dd {
        margin-left: 60px; /* dd要素の文字を右にずらす */
    }
}
</style>
