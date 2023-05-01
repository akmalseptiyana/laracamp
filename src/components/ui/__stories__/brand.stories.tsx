import type { Meta, StoryObj } from "@storybook/react";

import { Brand } from "../brand";

const meta = {
  title: "Components/Brand",
  component: Brand,
  tags: ["autodocs"],
} satisfies Meta<typeof Brand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  render: (args) => (
    <div className="min-h-min w-full bg-green p-10">
      <Brand {...args} className="h-16 w-32" />
    </div>
  ),
};

Dark.args = {
  variant: "dark",
};

export const Light: Story = {
  render: (args) => (
    <div className="min-h-min w-full bg-navy p-10">
      <Brand {...args} className="h-16 w-32" />
    </div>
  ),
};

Light.args = {
  variant: "light",
};
