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

export const Large: Story<ButtonProps> = (args) => (
  <Button {...args}>Texto</Button>
);
Large.args = {
  size: "primaryLarge",
};
export const Medium: Story<ButtonProps> = (args) => (
  <Button {...args}>Texto</Button>
);
Medium.args = {
  size: "primaryMedium",
};
export const Small: Story<ButtonProps> = (args) => (
  <Button {...args}>Texto</Button>
);
Small.args = {
  size: "primarySmall",
};
