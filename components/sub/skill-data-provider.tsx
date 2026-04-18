"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.35 }}
      whileHover={{ y: -6, scale: 1.06 }}
      className="group relative"
    >
      <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-[#7a4cff66] bg-transparent transition-all duration-300 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.26)] md:h-24 md:w-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#7c3aed1f] via-transparent to-[#06b6d41f] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative flex items-center justify-center">
          <Image
            src={`/skills/${src}`}
            width={width}
            height={height}
            alt={name}
            className="h-10 w-10 object-contain md:h-12 md:w-12"
          />
        </div>
      </div>

      <span className="pointer-events-none absolute -bottom-9 left-1/2 z-20 -translate-x-1/2 rounded-md border border-cyan-300/30 bg-[#09051e]/95 px-2 py-1 text-xs font-medium tracking-wide whitespace-nowrap text-cyan-100 opacity-0 shadow-[0_0_18px_rgba(56,189,248,0.2)] transition-all duration-200 group-hover:-bottom-10 group-hover:opacity-100">
        {name}
      </span>
    </motion.div>
  );
};
