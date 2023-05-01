import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";
import { GoogleIcon } from "../icons/google-icon";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Button {...args}>Get Started</Button>,
};

Primary.args = {
  variant: "primary",
};

export const Secondary: Story = {
  render: (args) => <Button {...args}>Sign In</Button>,
};

Secondary.args = {
  variant: "secondary",
};

export const Alternative: Story = {
  render: (args) => (
    <Button {...args}>
      <GoogleIcon />
      <span className={`ml-2`}>Sign In with Google</span>
    </Button>
  ),
};

Alternative.args = {
  variant: "alternative",
  className: "border-2 border-[#E7E5F4]",
};
