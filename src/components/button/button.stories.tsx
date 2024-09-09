import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "UI/Button/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "teritary"],
      control: { type: "radio" },
      description: "The variant of the button",
      defaultValue: "primary",
    },
    size: {
      options: ["normal", "small", "large"],
      control: { type: "radio" },
      description: "The size of the button",
      defaultValue: "normal",
    },
    className: {
      description: "Additional classes for customizing the button style",
      defaultValue: "", // Default value can be set here
    },
    children: {
      description: "Content of the button",
      defaultValue: "Button",
    },
    asChild: {
      control: { type: "boolean" },
      description: "If true, the button will render as a child component",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const primary: Story = {
  args: {
    variant: "primary",
    size: "normal",
    className: "",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    ...primary.args,
    variant: "secondary",
  },
};

export const teritary: Story = {
  args: {
    ...primary.args,
    variant: "teritary",
  },
};

export const Large: Story = {
  args: {
    ...primary.args,
    size: "large",
  },
};

export const Small: Story = {
  args: {
    ...primary.args,
    size: "small",
  },
};
