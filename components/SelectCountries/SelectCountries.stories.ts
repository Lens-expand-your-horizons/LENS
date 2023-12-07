import SelectCountries from './SelectCountries.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
    title: 'components/SelectCountries',
    component: SelectCountries,
    argTypes: {
    },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args

export const Home = {
    args: {
        page: 'home',
    },
};

export const Search = {
    args: {
        page: 'search',
    },
};
