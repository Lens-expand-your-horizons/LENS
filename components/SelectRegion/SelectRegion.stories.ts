import SelectRegion from './SelectRegion.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
    title: 'components/SelectRegion',
    component: SelectRegion,
    argTypes: {
        name: { control: 'text' },
        placeholder: { control: 'text' },
        options: { control: 'object' },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args

export const Default = {
    args: {
        name: 'language',
        placeholder: 'Select Language',
        options: [
            { value: 'en', label: 'English' },
            { value: 'fr', label: 'French' },
            { value: 'es', label: 'Spanish' },
        ],
    },
};
