import type { Meta, StoryObj } from "@storybook/react";

import { FeaturedItems } from "../featured-items";
import { GlobeIcon } from "@/components/ui/icons/globe-icon";
import { SandboxIcon } from "@/components/ui/icons/sandbox-icon";
import { UsersIcon } from "@/components/ui/icons/users-icon";
import { BriefcaseIcon } from "@/components/ui/icons/briefcase-icon";

const meta = {
  title: "Components/FeaturedItems",
  component: FeaturedItems,
  tags: ["autodocs"],
} satisfies Meta<typeof FeaturedItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    features: [
      {
        icon: <GlobeIcon />,
        key: "diversity",
        title: "Diversity",
        paragraph: "Learn from anyone around the world and get a new skills",
      },
      {
        icon: <SandboxIcon />,
        key: "guideline",
        title: "A.I Guideline",
        paragraph:
          "Lara will help you to choose which path that suitable for you",
      },
      {
        icon: <UsersIcon />,
        key: "mentoring",
        title: "1-1 Mentoring",
        paragraph: "We will ensure that you will get what you really do need",
      },
      {
        icon: <BriefcaseIcon />,
        key: "future job",
        title: "Future Job",
        paragraph: "Get your dream job in your dream company together with us",
      },
    ],
  },
};
