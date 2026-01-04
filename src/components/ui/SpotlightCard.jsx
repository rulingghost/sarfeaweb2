import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export const SpotlightCard = ({ children, className = "", color = "blue" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const colorMap = {
    blue: "59, 130, 246",
    purple: "168, 85, 247",
    green: "34, 197, 94",
    orange: "249, 115, 22",
    pink: "236, 72, 153",
    cyan: "6, 182, 212",
    indigo: "99, 102, 241",
    teal: "20, 184, 166",
    red: "239, 68, 68"
  };

  const rgb = colorMap[color] || "59, 130, 246";

  return (
    <div
      className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-${color}-500/10 spotlight-card-base ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px transition duration-300 group-hover:opacity-100 opacity-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(${rgb}, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {/* Premium Inner Shadow Detail */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 dark:via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative h-full">{children}</div>
    </div>
  );
};
