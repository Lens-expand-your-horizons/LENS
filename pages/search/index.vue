<template lang="pug">
div
    h1 LENS
    form(action="/search" method="get")
        input(type="text" name="q" placeholder="Search...")
        input(type="submit" value="Search")
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

</style>