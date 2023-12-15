<script setup lang="ts">
const {
    name = 'region',
    placeholder = '',
    modelValue = '',
    options = [],
} = defineProps<{
    name: string,
    placeholder: string,
    modelValue?: string,
    options: { value: string, label: string }[],
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', val: string): void,
}>();

const selected = computed({
    get: () => modelValue,
    set: (val) => emit('update:modelValue', val),
});

</script>

<template lang="pug">
.selectRegion
    select.custom-select(
        :name="name"
        v-model="selected"
    )
        option(
            value=""
            disabled
        ) {{ placeholder }}
        option(
            v-for="opt in options"
            :value="opt.value"
            :label="opt.label"
            :selected="opt.value === selected"
        ) 
</template>

<style scoped lang="scss">
.selectRegion {
    container-type: size;
    display: block;
    width: 100%;
    height: 100%;
    max-width: 20rem;
    min-height: 2.5rem;
}

.custom-select {
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    line-height: 100cqh;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z" fill="none" stroke="#000"/></svg>');
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: center;
    background-color: #fff;
    background-size: 16px;

    &:hover {
        border-color: #555;
    }

    &:focus {
        outline: none;
        border-color: dodgerblue;
    }
}
</style>
