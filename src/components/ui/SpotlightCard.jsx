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
    teal: "20, 184, 166"
  };

  const rgb = colorMap[color] || "59, 130, 246";

  return (
    <div
      className={`group relative border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
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
      <div className="relative h-full">{children}</div>
    </div>
  );
};
