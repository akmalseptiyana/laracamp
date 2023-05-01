import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    wrapperClassName: "w-56",
    placeholder: "Your Email Here",
    label: "Email Address",
    id: "email",
    name: "email",
    type: "email",
  },
};

export const InputImage: Story = {
  args: {
    id: "avatar",
    name: "avatar",
    type: "file",
    accept: "image/*",
  },
};
