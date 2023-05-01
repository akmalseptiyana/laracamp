import type { Meta, StoryObj } from "@storybook/react";
import Link from "next/link";

import { Navbar } from "../navbar";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Navbar {...args}>
      <Link href="/program">Program</Link>
      <Link href="/mentor">Mentor</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/business">Business</Link>
    </Navbar>
  ),
};

Default.args = {
  cta: (
    <>
      <Button variant="secondary" className="relative px-8">
        Sign In
      </Button>
      <Button variant="primary" className="relative px-8">
        Sign Up
      </Button>
    </>
  ),
  pathname: "/program",
  className: { active: "text-purple", idle: "text-navy" },
};
