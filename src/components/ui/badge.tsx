import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Poppins } from "next/font/google";

import { cn } from "@/utils/classnames";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const badgeVariants = cva(
  cn("inline-flex items-center rounded-full", poppins.className),
  {
    variants: {
      variant: {
        success: "bg-soft-green border-green text-green border",
        warning: "bg-soft-yellow border-yellow text-yellow border",
        danger: "bg-soft-red border-red text-red border",
      },
      size: {
        default: "px-4 py-1",
      },
    },
    defaultVariants: {
      variant: "success",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * these default values can be removed completely by setting the variant as null
 */

export const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
};
