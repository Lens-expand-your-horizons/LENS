<script setup lang="ts">
enum CheckBoxSize {
    small = 'small',
    medium = 'medium',
    large = 'large',
}
const props = withDefaults(defineProps<{
    label: string,
    size?: CheckBoxSize,
    color?: string,
}>(), {
    size: CheckBoxSize.medium,
    color: 'secondary',
});

const emits = defineEmits(['click']);

</script>

<template lang="pug">
.root
    input(type="checkbox", name="country", :value="props.label", :id="props.label")
    label(:for="props.label") {{ props.label }}
</template>

<style lang="scss">
.root {
    display: flex;
    align-items: center;
    label {  
        display: block;
        background: #c8eac3;
        color: #000;
        padding: .5rem;
        text-align: center;
        border-radius: 1rem;
        cursor: pointer;
    }
    input {
        display: none;
        &:checked + label {
            background: #1a720d;
            color: #FFF;
        }
    }
}
</style>