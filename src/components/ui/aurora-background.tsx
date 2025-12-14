"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-slate-950 text-slate-950 transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--blue-gradient:repeating-linear-gradient(100deg,#00268B_0%,#0066A1_7%,transparent_10%,transparent_12%,#0099CC_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,#000103_0%,#000103_7%,transparent_10%,transparent_12%,#000103_16%)]
            [--aurora:repeating-linear-gradient(100deg,#00268B_10%,#5B8DEF_15%,#0099CC_20%,#00D4FF_25%,#0066A1_30%)]
            [background-image:var(--blue-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert-0 dark:invert
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--blue-gradient),var(--aurora)]
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
        />
      </div>
      {children}
    </div>
  );
};
