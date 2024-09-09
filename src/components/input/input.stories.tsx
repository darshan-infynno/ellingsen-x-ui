import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  title: "UI/Input/Input",
  tags: ["autodocs"],
  component: Input,
  argTypes: {
    suffix: {
      control: { type: "text" },
      description: "ReactNode",
      defaultValue: "", // Default value can be set here
    },
    suffixClassName: {
      control: { type: "text" },
      defaultValue: "inputs", // Default value can be set here
    },
    Prefix: {
      control: { type: "text" },
      description: "ReactNode",
      defaultValue: "@", // Default value can be set here
    },
    prefixClassName: {
      control: { type: "text" },
      description: "string",
      defaultValue: "inputs",
      className: "text-primary-700 pl-10",
    },
    sizing: {
      options: ["normal", "small", "large"],
      control: { type: "radio" },
      description: "The variant of the button",
      defaultValue: "normal",
    },
    validation: {
      options: ["default", "sucess", "error"],
      control: { type: "radio" },
      description: "The variant of the button",
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};

export const Customized: Story = {
  args: {
    placeholder: "Email address",
    type: "text",
    defaultValue: "Email address",
  },
};

export const Prefix: Story = {
  args: {
    placeholder: "",
    type: "text",
    prefix: "@",
  },
};

export const Suffix: Story = {
  args: {
    placeholder: "",
    type: "text",
    suffix: "(inc. VAT)",
  },
};
