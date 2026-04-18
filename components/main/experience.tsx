"use client";

import { motion } from "framer-motion";

const EXPERIENCE_DATA = [
  {
    period: "2024–2028",
    title: "B.Tech Student in AI/ML",
    org: "Sage University, Indore",
    points: [
      "Pursuing Bachelor of Technology in Artificial Intelligence and Machine Learning",
      "Building strong expertise in Machine Learning, Deep Learning, and Data Science",
      "Developing real-world projects using Python, Streamlit, SQL, and ML frameworks",
      "Exploring advanced concepts in Computer Vision, NLP, and Predictive Analytics",
      "Actively participating in hackathons, coding challenges, and technical events",
    ],
  },
  {
    period: "2024–Present",
    title: "AI/ML Project Developer",
    org: "Self-Learning & Personal Projects",
    points: [
      "Designed and developed end-to-end Machine Learning projects for real-world problem solving",
      "Built interactive dashboards and deployment apps using Streamlit and Python",
      "Worked on data preprocessing, feature engineering, model training, and evaluation",
      "Created projects like Car Evaluation System, Netflix Data Analysis, and Uber Trips Data Analysis",
      "Continuously improving skills through hands-on practice, certifications, and new technologies",
    ],
  },
] as const;

export const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto mt-8 w-full max-w-6xl px-5 py-20 md:mt-12 md:px-8"
    >
      <h2 className="mb-10 text-2xl font-semibold text-white sm:text-3xl md:mb-14 md:text-4xl">My Work Experience</h2>

      <div className="relative px-1 md:px-2">
        <div className="absolute left-[9px] top-2 h-[92%] w-px bg-gradient-to-b from-cyan-400/50 via-violet-500/40 to-transparent md:left-3" />

        <div className="space-y-16 md:space-y-20">
          {EXPERIENCE_DATA.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              className="relative grid items-start gap-7 pl-8 md:grid-cols-[300px_minmax(0,1fr)] md:gap-12 md:pl-12"
            >
              <span className="absolute left-0 top-2 h-4 w-4 rounded-full border border-cyan-300/40 bg-[#0a0f24] shadow-[0_0_16px_rgba(34,211,238,0.35)]" />

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-gray-100 sm:text-3xl md:text-5xl">{item.period}</h3>
                <p className="mt-2 text-xl font-semibold leading-tight text-gray-200 sm:text-2xl md:text-3xl">{item.title}</p>
                <p className="mt-2 text-lg font-semibold leading-tight text-gray-300 sm:text-xl md:text-3xl">{item.org}</p>
              </div>

              <ul className="list-disc space-y-3 pl-5 pt-1 text-sm leading-relaxed text-gray-300 md:space-y-4 md:text-base">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
