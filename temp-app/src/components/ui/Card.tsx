import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glowEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, glowEffect = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-card p-6 flex flex-col gap-4 relative overflow-hidden group",
          {
            "hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)]": hoverEffect,
            "hover:border-primary/50": glowEffect,
          },
          className
        )}
        {...props}
      >
        {glowEffect && (
          <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />
        )}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);
Card.displayName = "Card";

export { Card };
