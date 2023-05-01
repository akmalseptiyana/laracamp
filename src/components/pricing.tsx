import Link from "next/link";

import { Button } from "./ui/button";
import { createNanoID } from "@/utils/nanoid";

export function Pricing() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-10 max-h-[597px] bg-[#4D1DAB]" />
      <div className="container relative z-20 mx-auto px-4 pt-16">
        <div className="flex flex-col justify-center gap-x-0 gap-y-20 md:flex-row md:gap-x-4 md:gap-y-0 xl:gap-x-8">
          <div className="w-full md:mt-20 md:w-4/12 2xl:w-3/12">
            <h2 className="mb-3 font-semibold uppercase text-green">
              GOOD INVESTMENT
            </h2>
            <h3 className="mb-5 text-[30px] font-semibold text-white">
              Start Your Journey
            </h3>
            <p className="mb-8 leading-8 text-[#CBB0FF]">
              We do have a couple of plans that might fit for you. Kindly
              download our full syallbus below.
            </p>

            <Link href="#about">
              <Button variant="alternative" className="bg-green text-white">
                View Syllabus
              </Button>
            </Link>
          </div>

          {items.map((pricing) => (
            <div key={createNanoID()} className="w-full md:w-4/12 xl:w-3/12">
              <div className="flex flex-col rounded-[40px] border border-[#EAE8F5] bg-white px-5 py-8">
                <h4 className="mb-2 text-center font-semibold uppercase text-green">
                  {pricing.name}
                </h4>
                <h5 className="mb-5 text-center text-[42px] font-semibold text-navy">
                  {pricing.price}
                </h5>

                <ul className="mb-8 flex flex-col gap-y-5">
                  {pricing.listFeature.map((feature) => (
                    <li
                      key={createNanoID()}
                      className="flex items-center gap-x-2 border-b border-gray-100 pb-[15px] last:border-b-0"
                    >
                      <span className="mr-2 h-5 w-5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="10"
                            cy="10"
                            r="10"
                            className="fill-green"
                          />
                          <path
                            d="M5.83325 10L8.46483 12.5L14.1666 7.5"
                            className="stroke-white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/register">
                  <Button
                    variant={pricing.cta.variant}
                    className="w-full justify-center text-center"
                  >
                    {pricing.cta.text}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type TPricing = {
  key: string;
  name: string;
  price: string;
  listFeature: string[];
  cta: {
    text: string;
    variant: "primary" | "secondary" | "alternative" | "disabled" | "loading";
  };
};

const items: TPricing[] = [
  {
    key: "gila-belajar",
    name: "GILA BELAJAR",
    price: "$280K",
    listFeature: [
      "Pro Techstack Kit",
      "iMac Pro 2021 & Display",
      "1-1 Mentoring Program",
      "Final Project Certificate",
      "Offline Course Videos",
      "Future Job Opportinity",
      "Premium Design Kit",
      "Website Builder",
    ],
    cta: {
      text: "Take This Plan",
      variant: "primary",
    },
  },
  {
    key: "baru-mulai",
    name: "BARU MULAI",
    price: "$140K",
    listFeature: [
      "Pro Techstack Kit",
      "iMac Pro 2021 & Display",
      "1-1 Mentoring Program",
      "Offline Course Videos",
    ],
    cta: {
      text: "Start With This Plan",
      variant: "secondary",
    },
  },
];
