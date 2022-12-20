import { ComponentStory, Meta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primaryButtonSuccess: true,
  primaryButtonError: false,
  primaryButtonWarning: false,
  secondaryButtonSuccess: false,
  secondaryButtonError: false,
  secondaryButtonWarning: false,
  success: false,
  error: false,
  warning: false,
  disabled: false,
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  medium: true,
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  large: true,
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  small: true,
  children: "Button",
};
