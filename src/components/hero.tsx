import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center gap-x-16 gap-y-20 md:flex-row md:gap-x-20 md:gap-y-0 xl:gap-x-28">
        <div className="w-full md:w-6/12 xl:w-5/12 2xl:w-4/12">
          <span className="mb-5 inline-block font-semibold uppercase text-green">
            LEARN FROM EXPERTS
          </span>
          <h1 className="mb-5 text-[42px] font-semibold text-navy">
            Start your <span className="text-purple">Developer Journey</span>{" "}
            Today
          </h1>
          <p className="mb-8 leading-8 text-grey">
            Our bootcamp is helping junior developers who are really passionate
            in the programming.
          </p>

          <Link href="#about">
            <Button variant="primary" className="relative px-8">
              Get Started
            </Button>
          </Link>
        </div>

        <div className="relative max-w-full">
          <div className="absolute left-0 top-0 z-10 w-56 -translate-x-4 -translate-y-4 rounded-xl bg-white p-4 md:-translate-x-1/4 md:-translate-y-1/4 xl:-translate-x-1/2 xl:-translate-y-1/2">
            <span className="mb-2 flex items-center gap-x-2">
              <span className="h-5 w-5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" fill="#31B380" />
                  <path
                    d="M5.83325 10L8.46483 12.5L14.1666 7.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-medium text-navy">Great & Solid</span>
            </span>
            <p className="text-sm text-grey">
              We help people how to finish the project together
            </p>
          </div>

          <div className="absolute bottom-0 right-0 z-10 w-56 translate-x-4 translate-y-4 rounded-xl bg-white p-4 md:translate-x-1/4 md:translate-y-1/4 xl:translate-x-1/2 xl:translate-y-1/2">
            <span className="mb-2 flex items-center gap-x-2">
              <span className="h-5 w-5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" fill="#31B380" />
                  <path
                    d="M5.83325 10L8.46483 12.5L14.1666 7.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-medium text-navy">Up to Date</span>
            </span>
            <p className="text-sm text-grey">
              We encourage people to use the latest techstack
            </p>
          </div>

          <div className="relative h-[240px] w-[390px] max-w-full overflow-hidden rounded-[59px] xl:h-[340px] xl:w-[490px]">
            <span className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-purple">
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 6.40192C15.5 7.55663 15.5 10.4434 13.5 11.5981L4.5 16.7942C2.5 17.9489 1.05473e-06 16.5056 1.15568e-06 14.1962L1.60994e-06 3.80385C1.71089e-06 1.49445 2.5 0.0510707 4.5 1.20577L13.5 6.40192Z"
                    fill="white"
                  />
                </svg>
              </span>
            </span>
            <Image
              src="/images/hero-image.jpg"
              alt="meeting"
              priority
              fill
              quality={90}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
