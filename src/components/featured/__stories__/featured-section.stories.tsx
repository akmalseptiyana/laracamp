import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";

import { FeaturedSection } from "../featured-section";
import { Button } from "@/components/ui/button";

import image1 from "../../../../public/images/image-1.jpg";
import image2 from "../../../../public/images/image-2.jpg";
import image3 from "../../../../public/images/image-3.jpg";

const meta = {
  title: "Components/FeaturedSection",
  component: FeaturedSection,
  tags: ["autodocs"],
} satisfies Meta<typeof FeaturedSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badge: {
      title: "Interview",
      content: "Before taking any program it is good to choose the path",
    },
    button: <Button variant="secondary">Learn More</Button>,
    content: {
      preheading: "better career",
      heading: "Prepare The Journey",
      paragraph:
        "We do really care to our students’ future career so it would be good if you are taking a quick interview",
    },
    image: <Image src={image1} alt="interview" width={340} height={440} />,
    number: { text: "1.", className: "bg-yellow" },
  },
};

export const Sample = {
  render: () => (
    <div className="my-20 flex flex-col gap-y-28">
      <FeaturedSection
        badge={{
          title: "Interview",
          content: "Before taking any program it is good to choose the path",
        }}
        button={<Button variant="secondary">Learn More</Button>}
        content={{
          preheading: "better career",
          heading: "Prepare The Journey",
          paragraph:
            "We do really care to our students’ future career so it would be good if you are taking a quick interview",
        }}
        image={<Image src={image1} alt="interview" width={340} height={440} />}
        number={{ text: "1.", className: "bg-yellow" }}
      />

      <FeaturedSection
        badge={{
          title: "Focus",
          content: "Study and follow the journey based on your career path",
        }}
        button={<Button variant="secondary">View Demo</Button>}
        content={{
          preheading: "STUDY HARDER",
          heading: "Finish The Project",
          paragraph:
            "Each of you will be joining the private group and also working together with team members on project",
        }}
        image={<Image src={image2} alt="focus" width={340} height={440} />}
        number={{ text: "2.", className: "bg-purple" }}
      />

      <FeaturedSection
        badge={{
          title: "Final Gate",
          content: "Demonstration for your final project to the judges",
        }}
        button={<Button variant="secondary">Showcase</Button>}
        content={{
          preheading: "END GAME",
          heading: "Big Demo Day",
          paragraph:
            "Learn how to speaking in public to demonstrate your final project and receive the important feedbacks",
        }}
        image={<Image src={image3} alt="final gate" width={340} height={440} />}
        number={{ text: "3.", className: "bg-green" }}
      />
    </div>
  ),
};
