import React from "react";
// import { cn } from "@/lib/utils"; // optional helper, can remove if not using

export const Button = React.forwardRef(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={(
          "px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ease-out",
          variant === "primary" &&
            "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg hover:shadow-2xl hover:scale-105",
          variant === "secondary" &&
            "border border-gray-500/50 bg-gray-800/40 backdrop-blur-md text-gray-200 hover:bg-gray-700/50 hover:border-cyan-400 shadow-md",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
