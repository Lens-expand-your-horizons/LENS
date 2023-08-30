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
    font-size: 1rem;
    label {  
        display: block;
        padding: .5rem;
        border-radius: 1.2rem;
        text-align: center;
        background: #c8eac3;
        color: #000;
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