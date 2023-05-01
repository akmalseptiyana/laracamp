import Head from "next/head";
import Image from "next/image";

import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { LayoutRoot } from "@/components/layout/layout-root";
import { Partnership } from "@/components/partnership";
import { FeaturedSection } from "@/components/featured/featured-section";
import { Button } from "@/components/ui/button";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Laracamp</title>
        <meta name="description" content="laracamp landing page replica" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutRoot>
        <Hero />
        <Partnership />
        <Features />
        {featuredSections.map((featuredSection, index) => (
          <FeaturedSection key={index} {...featuredSection} />
        ))}
        <Pricing />
        <Partnership />
      </LayoutRoot>
      <Footer />
    </>
  );
}

const featuredSections = [
  {
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
    image: (
      <Image
        src="/images/image-1.jpg"
        alt="interview"
        width={340}
        height={440}
      />
    ),
    number: {
      text: "1.",
      className: "bg-yellow",
    },
  },
  {
    badge: {
      title: "Focus",
      content: "Study and follow the journey based on your career path",
    },
    button: <Button variant="secondary">View Demo</Button>,
    content: {
      preheading: "STUDY HARDER",
      heading: "Finish The Project",
      paragraph:
        "Each of you will be joining the private group and also working together with team members on project",
    },
    image: (
      <Image src="/images/image-2.jpg" alt="focus" width={340} height={440} />
    ),
    number: {
      text: "2.",
      className: "bg-purple",
    },
  },
  {
    badge: {
      title: "Final Gate",
      content: "Demonstration for your final project to the judges",
    },
    button: <Button variant="secondary">Showcase</Button>,
    content: {
      preheading: "END GAME",
      heading: "Big Demo Day",
      paragraph:
        "Learn how to speaking in public to demonstrate your final project and receive the important feedbacks",
    },
    image: (
      <Image
        src="/images/image-3.jpg"
        alt="final gate"
        width={340}
        height={440}
      />
    ),
    number: {
      text: "3.",
      className: "bg-green",
    },
  },
];
