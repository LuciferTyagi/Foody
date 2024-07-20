import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const mouseMove = (e) => {
      cursorX.set(e.clientX-24);
      cursorY.set(e.clientY-24);
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [cursorX, cursorY]);

  // Smooth the motion using useSpring
  const springX = useSpring(cursorX, { stiffness: 400, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 400, damping: 30 });

  return (
    <motion.div
      className="bg-transparent  border-2  border-black  h-[48px] w-[48px] rounded-full z-[60] fixed top-0 left-0 pointer-events-none"
      style={{
        translateX: springX,
        translateY: springY,
      }}
    />
  );
};

export default Cursor;
