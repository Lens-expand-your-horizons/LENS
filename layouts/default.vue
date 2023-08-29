<template lang="pug">
div
    slot
</template>
<script>
export default {
    
}
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