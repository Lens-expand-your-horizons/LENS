/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    "../components/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../layouts/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../pages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
