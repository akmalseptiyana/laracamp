import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Poppins } from "next/font/google";

import { cn } from "@/utils/classnames";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const buttonVariants = cva(
  cn(
    "relative inline-flex select-none appearance-none items-center overflow-hidden rounded-full text-base font-medium transition-all duration-300 focus:outline-none",
    poppins.className
  ),
  {
    variants: {
      variant: {
        primary:
          "bg-purple hover:bg-navy focus:bg-navy active:bg-navy border-2 border-transparent text-white",
        secondary:
          "border-purple-soft-two bg-purple-soft-one text-purple hover:bg-navy focus:bg-navy active:bg-navy border-2 hover:border-transparent",
        alternative: "text-navy",
        disabled:
          "bg-soft-grey text-grey cursor-not-allowed border-2 border-transparent",
        loading: "bg-navy cursor-wait border-2 border-transparent text-white",
      },
      size: {
        default: "px-6 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isDisabled?: boolean;
  isLoading?: boolean;
}

/**
 * these default values can be removed completely by setting the variant as null
 */

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, variant, size, isDisabled, isLoading, ...props },
    ref
  ) => {
    if (isDisabled) variant = "disabled";
    if (isLoading) variant = "loading";

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isDisabled || isLoading}
        ref={ref}
        {...props}
      >
        <span
          className={cn(
            "inline-flex items-center transition-all duration-300",
            isLoading
              ? "invisible -top-full opacity-0"
              : "visible top-0 opacity-100"
          )}
        >
          {children}
        </span>
        <span
          className={cn(
            "absolute bottom-0 left-0 right-0 z-10 inline-flex items-center justify-center transition-all duration-300",
            isLoading ? "top-0 opacity-100" : "-top-full opacity-0"
          )}
        >
          <svg
            className="h-6 w-6 animate-spin"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.2"
              cx="14"
              cy="14"
              r="13"
              className="stroke-white"
              strokeWidth="2"
            />
            <path
              d="M14 1C21.1797 1 27 6.8203 27 14C27 18.0209 25.1745 21.6154 22.3071 24"
              className="stroke-white"
              strokeWidth="2"
            />
          </svg>
        </span>
      </button>
    );
  }
);
