'use client';

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center px-6 py-16 sm:px-10 md:py-20 lg:px-20"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-[20px]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">About Me</h1>
      </motion.div>

      <motion.h2
        variants={slideInFromLeft(0.3)}
        className="mb-[20px] bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
      >
        Who am I?
      </motion.h2>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="max-w-[820px] text-center text-base leading-relaxed text-gray-300 sm:text-lg"
      >
        <p className="mb-[15px]">
          I&apos;m an <span className="text-cyan-400 font-semibold">Aspiring Machine Learning Engineer</span> with a strong interest in <span className="text-purple-400 font-semibold">AI-driven solutions</span>.
        </p>
        
        <p>
          I&apos;m skilled in <span className="text-purple-400 font-semibold">building practical projects</span> and continuously learning new technologies to <span className="text-cyan-400 font-semibold">solve real-world problems</span>. Passionate about leveraging machine learning and artificial intelligence to create impactful solutions.
        </p>
      </motion.div>

    </section>
  );
};
