import SelectLanguage from './SelectLanguage.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
    title: 'components/SelectLanguage',
    component: SelectLanguage,
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
