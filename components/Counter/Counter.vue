<script setup lang="ts">
import { ref } from 'vue';
// クリックしたらカウントUPするだけのボタン
const state = ref(0);
const increment = () => {
  state.value++;
};
</script>

<template>
  <div>Count: {{ state }}</div>
  <button @click="increment">Increment</button>
</template>
