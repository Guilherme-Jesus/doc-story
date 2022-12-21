import { ComponentMeta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "outline"],
      },
    },
  },
} as ComponentMeta<typeof Button>;

export const Primary: Story<ButtonProps> = (args) => (
  <Button {...args}>Primary Button</Button>
);

export const Secondary: Story<ButtonProps> = (args) => (
  <Button {...args}>Secondary Button</Button>
);

Secondary.args = {
  variant: "secondary",
};
export const Outline: Story<ButtonProps> = (args) => (
  <Button {...args}>Outline Button</Button>
);

Outline.args = {
  variant: "outline",
};
