import { FeaturedItems } from "./featured/featured-items";
import { GlobeIcon } from "./ui/icons/globe-icon";
import { SandboxIcon } from "./ui/icons/sandbox-icon";
import { UsersIcon } from "./ui/icons/users-icon";
import { BriefcaseIcon } from "./ui/icons/briefcase-icon";

export function Features() {
  return (
    <section className="container mx-auto px-4">
      <div className="mb-4 flex flex-col items-center justify-center">
        <span className="mb-2 inline-block font-semibold uppercase text-green">
          OUR SUPER BENEFITS
        </span>
        <h2 className="mb-10 text-[30px] font-semibold text-navy">
          Learn Faster & Better
        </h2>
      </div>

      <FeaturedItems
        className="xl:px-32"
        features={[
          {
            icon: <GlobeIcon />,
            key: "diversity",
            paragraph:
              "Learn from anyone around the world and get a new skills",
            title: "Diversity",
          },
          {
            icon: <SandboxIcon />,
            key: "guideline",
            paragraph:
              "Lara will help you to choose which path that suitable for you",
            title: "A.I Guideline",
          },
          {
            icon: <UsersIcon />,
            key: "mentoring",
            paragraph:
              "We will ensure that you will get what you really do need",
            title: "1-1 Mentoring",
          },
          {
            icon: <BriefcaseIcon />,
            key: "future job",
            paragraph:
              "Get your dream job in your dream company together with us",
            title: "Future Job",
          },
        ]}
      />
    </section>
  );
}
