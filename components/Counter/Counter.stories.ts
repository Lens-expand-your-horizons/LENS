import { Story } from "@storybook/vue3";
import Counter from "./Counter.vue";

export default {
  title: "components/Counter",
  component: Counter,
}

const Template: Story<typeof Counter> = () => ({
  components: { Counter },
  template: "<Counter />",
});

export const Default = Template.bind({});
Default.storyName = "Increment Counter Button";