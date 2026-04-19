'use client';

import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft } from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const ContactMe = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormData({ fullName: "", email: "", message: "" });
        alert("Message sent successfully! I'll get back to you soon.");
      } else {
        alert(result?.message ?? "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 sm:px-10 md:py-20 lg:px-20">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-[20px]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Get In Touch</h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.3)}
        className="w-full max-w-[640px] rounded-lg border border-[#7042f88b] bg-gradient-to-br from-[#2A0E61]/40 to-[#1a0a3a]/40 p-5 backdrop-blur-md sm:p-8"
      >
        <motion.h2
          variants={slideInFromLeft(0.5)}
          className="mb-[20px] text-2xl font-semibold text-white sm:text-[32px]"
        >
          Let&apos;s Talk
        </motion.h2>

        <motion.p
          variants={slideInFromLeft(0.6)}
          className="text-gray-400 mb-[30px] leading-relaxed"
        >
          Whether you're looking to collaborate on an ML project, discuss AI solutions, or just want to chat about data science, I'm here to help!
        </motion.p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <motion.div
            variants={slideInFromLeft(0.7)}
            className="flex flex-col gap-2"
          >
            <label htmlFor="fullName" className="text-white font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Ayush Singh"
              required
              className="bg-[#1a0a3a]/60 border border-[#7042f88b] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.8)}
            className="flex flex-col gap-2"
          >
            <label htmlFor="email" className="text-white font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
              className="bg-[#1a0a3a]/60 border border-[#7042f88b] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.9)}
            className="flex flex-col gap-2"
          >
            <label htmlFor="message" className="text-white font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share your thoughts..."
              rows={5}
              required
              className="bg-[#1a0a3a]/60 border border-[#7042f88b] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
            />
          </motion.div>

          <motion.button
            variants={slideInFromLeft(1)}
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};
