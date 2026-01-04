import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smoother, tighter spring for better responsiveness
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 10); // Offset for half of width (20px / 2)
      cursorY.set(e.clientY - 10);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 bg-blue-500/80 rounded-full z-[9999] pointer-events-none hidden md:block mix-blend-screen backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.6)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    </>
  );
};
