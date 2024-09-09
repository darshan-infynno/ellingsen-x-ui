import { type VariantProps, cva, cx } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";

const inputVariants = cva(
  "w-full placeholder:text-base focus:border-none focus:border-color-black focus:outline-none border-none text-base py-4 placeholder:text-neutral-600  bg-black focus:border-none text-white focus:placeholder:text-neutral-400 text-white px-5 disabled:gradient-error",
  {
    variants: {
      sizing: {
        normal: "text-base",
        small: "text-sm",
        large: "text-lg",
      },
      validation: {
        default: "",
        success: "",
        error: "bg-gradient-error border-none",
      },
    },
    defaultVariants: {
      sizing: "normal",
      validation: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  suffix?: React.ReactNode;
  suffixClassName?: string;
  prefixClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      sizing,
      validation,
      suffix,
      suffixClassName,
      prefixClassName,
      prefix,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative flex">
        {prefix && (
          <span
            className={cx(
              "absolute left-5 inline-block py-4 text-neutral-700",
              prefixClassName
            )}
          >
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          className={cn(inputVariants({ sizing, validation, className }))}
          type={type}
          {...props}
        />
        {suffix && (
          <span
            className={cx(
              "absolute right-5 inline-block py-4 text-sm font-normal text-neutral-700",
              suffixClassName
            )}
          >
            {suffix}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
