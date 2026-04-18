'use client';

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useMemo, useState } from "react";
import type { MouseEvent } from "react";

interface Testimonial {
  name: string;
  handle: string;
  role: string;
  category: "Professional" | "Academic" | "Personal";
  image: string;
  content: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya M.",
    handle: "@priya_m",
    role: "Team Lead",
    category: "Professional",
    image: "👩‍💼",
    content: "Great team player with strong Python and data science skills. Always eager to learn and implement new concepts.",
  },
  {
    name: "Mentor Guide",
    handle: "@mentor_guide",
    role: "AI Mentor",
    category: "Academic",
    image: "🧠",
    content: "Abhi demonstrates excellent understanding of ML algorithms and practical implementation skills.",
  },
  {
    name: "Dr. Sharma",
    handle: "@professor_sharma",
    role: "Professor",
    category: "Academic",
    image: "👨‍🏫",
    content: "Excellent analytical skills and dedication to machine learning projects. Abhi shows great potential in AI research.",
  },
  {
    name: "Rahul K.",
    handle: "@rahul_k",
    role: "Colleague",
    category: "Professional",
    image: "👨‍💻",
    content: "Collaborated on ML projects. Abhi's problem-solving approach and coding skills are impressive.",
  },
  {
    name: "Research Assistant",
    handle: "@research_assistant",
    role: "Research Team",
    category: "Academic",
    image: "🔬",
    content: "Shows remarkable aptitude for ML concepts, methodology and data-driven decision making.",
  },
  {
    name: "Project Partner",
    handle: "@project_partner",
    role: "Collaborator",
    category: "Professional",
    image: "🤝",
    content: "Outstanding work on collaborative ML projects. Abhi brings innovative solutions and clear thinking.",
  },
  {
    name: "Study Group",
    handle: "@study_group",
    role: "Peer",
    category: "Personal",
    image: "📚",
    content: "Abhi's explanations of complex ML concepts are incredibly clear. A valuable member of our learning community.",
  },
  {
    name: "Hackathon Team",
    handle: "@hackathon_team",
    role: "Team Member",
    category: "Personal",
    image: "🏆",
    content: "Brilliant problem-solving skills in competitive coding. Abhi consistently delivers high-quality solutions.",
  },
  {
    name: "College Friend",
    handle: "@campus_friend",
    role: "Close Friend",
    category: "Personal",
    image: "😄",
    content: "Always curious and consistent. Abhi balances learning and execution really well and inspires everyone around.",
  },
  {
    name: "Tech Community",
    handle: "@ml_community",
    role: "Community Member",
    category: "Personal",
    image: "🌟",
    content: "Super supportive in peer learning sessions. Abhi shares practical ML tips and helps others level up quickly.",
  },
  {
    name: "Open Source Peer",
    handle: "@oss_peer",
    role: "Contributor",
    category: "Personal",
    image: "💡",
    content: "Reliable teammate in collaborative coding. Abhi brings thoughtful ideas and clean implementation every time.",
  },
];

export const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedCards, setExpandedCards] = useState<string[]>([]);

  const categoryFilters = useMemo(
    () => ["All", ...new Set(TESTIMONIALS.map((item) => item.category))],
    [],
  );

  const filteredTestimonials = useMemo(
    () =>
      activeCategory === "All"
        ? TESTIMONIALS.slice(0, 8)
        : TESTIMONIALS.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const toggleExpanded = (name: string) => {
    setExpandedCards((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name],
    );
  };

  const handleCardMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    target.style.setProperty("--mx", `${x}px`);
    target.style.setProperty("--my", `${y}px`);
  };

  const handleCardMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    target.style.setProperty("--mx", "50%");
    target.style.setProperty("--my", "50%");
  };

  return (
    <section className="flex flex-col items-center justify-center px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-20">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-[20px]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Social Proof</h1>
      </motion.div>

      <h2 className="mb-[36px] bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-center text-3xl font-semibold text-transparent sm:mb-[50px] sm:text-4xl">
        What People Say About Me
      </h2>

      <div className="mb-8 flex w-full max-w-6xl flex-wrap justify-center gap-3">
        {categoryFilters.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "border-cyan-400 bg-cyan-500/20 text-cyan-200"
                  : "border-[#7042f88b] bg-[#2A0E61]/30 text-gray-300 hover:border-purple-400"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredTestimonials.map((testimonial, index) => {
          const isExpanded = expandedCards.includes(testimonial.name);
          const shortContent = `${testimonial.content.slice(0, 95)}...`;

          return (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.01 }}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="group relative overflow-hidden rounded-xl border border-[#7042f88b] bg-gradient-to-br from-[#2A0E61]/50 to-[#1a0a3a]/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            style={{
              backgroundImage:
                "radial-gradient(220px circle at var(--mx,50%) var(--my,50%), rgba(34,211,238,0.16), transparent 55%), linear-gradient(135deg, rgba(42,14,97,0.55), rgba(26,10,58,0.55))",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl rounded-lg bg-[#ffffff10] p-2 group-hover:scale-110 transition-transform duration-300">
                {testimonial.image}
              </div>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs text-gray-400">{testimonial.handle}</p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-cyan-300/80">
                  {testimonial.role}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              {isExpanded || testimonial.content.length < 95
                ? testimonial.content
                : shortContent}
            </p>

            {testimonial.content.length >= 95 && (
              <button
                type="button"
                onClick={() => toggleExpanded(testimonial.name)}
                className="mt-4 text-xs font-semibold uppercase tracking-wider text-cyan-300 hover:text-cyan-200"
              >
                {isExpanded ? "Show less" : "Read more"}
              </button>
            )}
          </motion.div>
        );
        })}
      </div>
    </section>
  );
};
