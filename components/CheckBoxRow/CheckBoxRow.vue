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
.check-box-row
    CheckBox.check-box-row__item(
        v-for="item in props.array"
        :label="item"
        :size="props.size"
        :color="props.color"
    )
</template>

<style lang="scss">
.check-box-row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100cqw;
    padding: 1rem 0;
    overflow-x: scroll;
    mask: linear-gradient(to right, #fff, #fff calc(100cqw - 5rem), transparent);

    &__item{
        flex-shrink: 0;
        overflow: hidden;
    }
}
</style>