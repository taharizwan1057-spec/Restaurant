"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-brand-orange-light via-brand-orange to-brand-orange-deep text-white shadow-lg shadow-brand-orange/30 hover:shadow-glow hover:scale-[1.03] active:scale-[0.98]",
        secondary:
          "bg-brand-black text-white hover:bg-brand-orange hover:shadow-glow",
        outline:
          "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white",
        ghost: "text-brand-black hover:bg-brand-orange/10",
        whatsapp:
          "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-[1.03] active:scale-[0.98]",
        glass:
          "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
        link: "text-brand-orange underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children?: ReactNode;
}

/**
 * When `asChild` is true the Button renders a <button> wrapper with the
 * button styles, and the child element (typically an <a>) is the only
 * descendant. This lets anchors inherit the button's pill styles without
 * losing href / target behavior, while remaining keyboard-focusable as a
 * real button.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {asChild ? (
        <span className="flex w-full items-center justify-center gap-2">{children}</span>
      ) : (
        children
      )}
    </button>
  ),
);
Button.displayName = "Button";

export { buttonVariants };
