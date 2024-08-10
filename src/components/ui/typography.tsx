"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

const variants = {
  h1: "text-4xl font-bold leading-tight",
  h2: "text-3xl font-semibold leading-snug",
  h3: "text-2xl font-semibold leading-none",
  h4: "text-xl font-medium leading-none",
  body1: "text-base font-normal leading-relaxed",
  body2: "text-sm font-normal leading-relaxed",
  caption: "text-xs font-light leading-none",
};

const Typography = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { variant?: keyof typeof variants }
>(({ className, variant = "body1", ...props }, ref) => (
  <p
    ref={ref}
    className={cn(variants[variant], className)}
    {...props}
  />
));

Typography.displayName = "Typography";

export { Typography };
