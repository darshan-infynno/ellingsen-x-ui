import { Meta, StoryObj } from "@storybook/react";
import { PhoneNumberInput } from "./phone-number-input";

const meta: Meta<typeof PhoneNumberInput> = {
  title: "UI/Input/PhoneNumberInput",
  component: PhoneNumberInput,
  tags: ["autodocs"],
  argTypes: {
    InputProps: {
      control: { type: "object" },
      description: "Props passed to the Input component",
      defaultValue: {}, // Default Input props
    },
    containerClassName: {
      control: { type: "text" },
      description: "Additional classes for the PhoneNumberInput wrapper",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text for the input field",
      defaultValue: "Enter your phone number",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the input field",
      defaultValue: false,
    },
    countrySelectorClassName: {
      control: { type: "text" },
      description: "CSS class for the country selector wrapper",
    },
    flagClassName: {
      control: { type: "text" },
      description: "CSS class for the flag container",
    },
    flagIconClassName: {
      control: { type: "text" },
      description: "CSS class for the flag icon",
    },
    countryCodeClassName: {
      control: { type: "text" },
      description: "CSS class for the country code text",
    },
    dropdownClassName: {
      control: { type: "text" },
      description: "CSS class for the dropdown container",
    },
    dropdownMenuClassName: {
      control: { type: "text" },
      description: "CSS class for the dropdown menu items",
    },
    MenuflagIconClassName: {
      control: { type: "text" },
      description: "CSS class for the flag icons in the dropdown menu",
    },
    onCountryChange: {
      action: "onCountryChange",
      description: "Callback when the country is changed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PhoneNumberInput>;

export const Default: Story = {
  args: {
    placeholder: "Phone number",
    disabled: false,
  },
};
