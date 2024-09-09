import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../..//lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-neutral-100 hover:bg-neutral-900  active:bg-white active:ring-[6px] active:ring-neutral-400  disabled:text-neutral-500  disabled:bg-neutral-200",
        secondary:
          " border border-neutral-400 bg-neutral-300 text-white hover:bg-neutral-400 hover:border hover:border-neutral-400 active:bg-neutral-300 active:ring-[6px] active:ring-neutral-400 disabled:text-neutral-500 disabled:bg-neutral-200  disabled:border-none ",
        teritary:
          "text-white hover:bg-neutral-200 active:bg-neutral-200 disabled:text-neutral-400",
      },
      size: {
        small: "px-[103px] py-[14.5px] text-base",
        normal: "px-[103px] py-[14.5px] text-base",
        large: "px-[103px] py-[14.5px] text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "normal",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
