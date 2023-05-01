import { ReactNode } from "react";
import { Poppins } from "next/font/google";

import { cn } from "@/utils/classnames";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

interface FeaturedItem {
  key: string;
  title: string;
  paragraph: string;
  icon: ReactNode;
}

interface FeaturedItemsProps {
  features: FeaturedItem[];
  className?: string;
}

export function FeaturedItems({ features, className }: FeaturedItemsProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 grid-rows-1 place-content-center gap-8 md:grid-cols-2 xl:grid-cols-4",
        className,
        poppins.className
      )}
    >
      {features.map((feature) => {
        return (
          <div className="group" key={feature.key}>
            <div className="flex flex-col items-center gap-y-3 md:items-start">
              <span className="flex h-14 w-14 items-center justify-center rounded-full group-odd:bg-green group-even:bg-purple">
                {feature.icon}
              </span>
              <h4 className="text-xl font-medium text-grey">{feature.title}</h4>
              <p className="text-grey">{feature.paragraph}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
