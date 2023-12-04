import CheckBoxRow from './CheckBoxRow.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
    title: 'components/CheckBoxRow',
    component: CheckBoxRow,
    argTypes: {
        array: {
            control: 'object',
        },
        color: {
            control: 'color',
        },
        size: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'large'],
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
    args: {
        array: ['Japan', 'China', 'Korea', 'Taiwan', 'Thailand', 'Vietnam', 'Philippines', 'Indonesia', 'Malaysia', 'Singapore', 'Myanmar', 'Cambodia', 'Laos', 'Brunei', 'East Timor'],
        color: 'primary',
        label: 'Button',
    },
};

export const Secondary = {
    args: {
        array: ['Japan', 'China', 'Korea', 'Taiwan', 'Thailand', 'Vietnam', 'Philippines', 'Indonesia', 'Malaysia', 'Singapore', 'Myanmar', 'Cambodia', 'Laos', 'Brunei', 'East Timor'],
        color: 'secondary',
        label: 'Button',
    },
};

export const Large = {
    args: {
        array: ['Japan', 'China', 'Korea', 'Taiwan', 'Thailand', 'Vietnam', 'Philippines', 'Indonesia', 'Malaysia', 'Singapore', 'Myanmar', 'Cambodia', 'Laos', 'Brunei', 'East Timor'],
        size: 'large',
        label: 'Button',
    },
};

export const Small = {
    args: {
        array: ['Japan', 'China', 'Korea', 'Taiwan', 'Thailand', 'Vietnam', 'Philippines', 'Indonesia', 'Malaysia', 'Singapore', 'Myanmar', 'Cambodia', 'Laos', 'Brunei', 'East Timor'],
        size: 'small',
        label: 'Button',
    },
};
