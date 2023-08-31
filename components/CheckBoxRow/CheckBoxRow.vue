<script setup lang="ts">
import CheckBox from '../CheckBox/CheckBox.vue';

enum CheckBoxSize {
    small = 'small',
    medium = 'medium',
    large = 'large',
}
const props = withDefaults(defineProps<{
    array: string[],
    size?: CheckBoxSize,
    color?: string,
}>(), {
    size: CheckBoxSize.medium,
    color: 'secondary',
});

const emits = defineEmits(['click']);

</script>

<template lang="pug">
.CheckBoxRow
    CheckBox.item(
        v-for="item in props.array"
        :label="item"
        :size="props.size"
        :color="props.color"
    )
</template>

<style lang="scss">
.CheckBoxRow {
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: scroll;
    .item{
        flex-shrink: 0;
        overflow: hidden;
        justify-content: center;
        gap: 2rem;   
    }
}
</style>