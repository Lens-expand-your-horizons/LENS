<template lang="pug">
slot
</template>

<script setup>
</script>

<style lang="scss">
$bg: #e7e7eb;

*, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    background-color: $bg;
}
</style>