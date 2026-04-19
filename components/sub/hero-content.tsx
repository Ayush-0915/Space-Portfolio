"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const orbitIcons = [
  { src: "/skills/python.svg", alt: "Python", pos: "top-[12%] left-[10%]" },
  { src: "/skills/tensorflow.svg", alt: "TensorFlow", pos: "top-[20%] left-[50%]" },
  { src: "/skills/pytorch.svg", alt: "PyTorch", pos: "top-[38%] left-[22%]" },
  { src: "/skills/openai.svg", alt: "OpenAI", pos: "top-[44%] left-[62%]" },
  { src: "/skills/scikitlearn.svg", alt: "Scikit-learn", pos: "top-[61%] left-[38%]" },
  { src: "/skills/huggingface.svg", alt: "Hugging Face", pos: "top-[57%] left-[74%]" },
  { src: "/skills/jupyter.svg", alt: "Jupyter", pos: "top-[77%] left-[20%]" },
  { src: "/skills/kaggle.svg", alt: "Kaggle", pos: "top-[80%] left-[56%]" },
  { src: "/skills/mlflow.svg", alt: "MLflow", pos: "top-[30%] left-[80%]" },
] as const;

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] mt-28 flex w-full flex-col items-center justify-center gap-10 px-5 sm:mt-32 sm:px-8 lg:mt-40 lg:flex-row lg:gap-4 lg:px-20"
    >
      <div className="m-auto flex h-full w-full flex-col justify-center gap-5 text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            AI ML Engineer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-4 flex h-auto w-auto max-w-[640px] flex-col gap-4 text-4xl font-bold text-white sm:mt-6 sm:text-5xl lg:text-6xl"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              AI/ML Engineer
            </span>{" "}
            crafting intelligent systems.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="my-4 max-w-[640px] text-base text-gray-400 sm:my-5 sm:text-lg"
        >
          Hello, I&apos;m Ayush Singh, an Enthusiastic AI/ML Engineer actively
          seeking opportunities in machine learning, deep learning, and data
          science. Explore my projects, skills, and resume.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="/resume/Updated-Ayush-Resume.pdf"
          download
          className="button-primary max-w-[220px] rounded-lg px-6 py-2 text-center text-white"
        >
          My Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="relative hidden h-[560px] w-full items-center justify-center lg:flex"
      >
        <div className="hero-orbit-grid absolute inset-0 rounded-[40px] border border-white/10" />

        <div className="pointer-events-none absolute h-[420px] w-[420px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute h-[180px] w-[180px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute h-[1px] w-[420px] bg-white/10" />
        <div className="pointer-events-none absolute h-[420px] w-[1px] bg-white/10" />
        <div className="pointer-events-none absolute h-[420px] w-[1px] rotate-45 bg-white/10" />
        <div className="pointer-events-none absolute h-[420px] w-[1px] -rotate-45 bg-white/10" />

        {orbitIcons.map((icon, index) => (
          <motion.div
            key={icon.alt}
            className={`absolute ${icon.pos} orbit-float rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-sm`}
            style={{ animationDelay: `${index * 0.18}s` }}
            whileHover={{ scale: 1.12, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={44}
              height={44}
              draggable={false}
              className="select-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
