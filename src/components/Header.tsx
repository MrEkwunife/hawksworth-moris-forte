import Navigation from "./Navigation";
import { motion, useScroll } from "motion/react";

export default function Header() {
  const { scrollYProgress } = useScroll();

  return (
    <header className="flex justify-between fixed top-0 left-0 w-full px-6 pt-6 text-white z-30">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          backgroundColor: "#c99258",
        }}
      />
      <h1 className="font-extrabold text-xl lg:text-2xl text-[#777]">
        MORIS FORTE
      </h1>
      <Navigation />
    </header>
  );
}
