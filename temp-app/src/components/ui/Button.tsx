"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "glow" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({
  className,
  variant = "default",
  size = "md",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer";

  const variants = {
    default: "bg-primary text-black hover:bg-primary/90",
    glow:
      "bg-primary text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-105 active:scale-95",
    outline:
      "border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
    ghost: "text-white/80 hover:text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "text-sm px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2",
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      className: cn(base, variants[variant], sizes[size], className),
    });
  }

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
