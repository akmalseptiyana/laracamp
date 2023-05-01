import { ReactNode } from "react";
import { Poppins } from "next/font/google";

import { cn } from "@/utils/classnames";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

interface FeaturedSectionProps {
  number: {
    text: ReactNode;
    className: string;
  };
  content: {
    preheading: string;
    heading: string;
    paragraph: string;
  };
  button: ReactNode;
  badge: {
    title: string;
    content: string;
  };
  image: string | ReactNode;
}

export function FeaturedSection({
  number,
  content,
  badge,
  button,
  image,
}: FeaturedSectionProps) {
  return (
    <div className={cn("group container mx-auto px-4", poppins.className)}>
      <div className="flex flex-col items-center justify-center gap-x-16 gap-y-20 md:flex-row md:gap-x-28 md:gap-y-0 xl:gap-x-36">
        <div className="w-full md:w-4/12 md:group-odd:order-2 md:group-even:order-1 2xl:w-3/12">
          <h3 className="mb-3 font-semibold uppercase text-green">
            {content.preheading || "Pre Heading"}
          </h3>
          <h2 className="mb-5 text-[30px] font-semibold text-navy">
            {content.heading || "Heading"}
          </h2>
          <h3 className="mb-8 leading-8 text-grey">
            {content.paragraph || "Paragraph"}
          </h3>
          {button}
        </div>
        <div className="relative md:group-odd:order-1 md:group-even:order-2">
          <div
            className={cn(
              "absolute left-0 top-0 z-10 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-white p-4 text-2xl font-semibold text-white",
              number.className || "bg-green"
            )}
          >
            {number.text}
          </div>
          <div className="absolute bottom-0 right-0 z-10 w-56 translate-x-4 translate-y-4 rounded-xl bg-white p-4 md:translate-x-1/4 xl:translate-x-1/2 xl:translate-y-1/2">
            <span className="mb-2 flex items-center gap-x-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green p-1">
                <svg
                  viewBox="0 0 12 8"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M1.83325 4L4.46483 6.5L10.1666 1.5"
                    className="stroke-white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-medium text-navy">{badge.title}</span>
            </span>
            <p className="hidden text-sm text-grey md:block">{badge.content}</p>
          </div>
          <div className="relative h-[340px] w-[240px] max-w-full overflow-hidden rounded-bl-[59px] rounded-br-3xl rounded-tl-3xl rounded-tr-[59px] xl:h-[440px] xl:w-[340px]">
            {typeof image === "string" ? (
              <img src={image} alt={badge.title} />
            ) : (
              image
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
