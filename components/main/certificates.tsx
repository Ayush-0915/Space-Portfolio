"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import genAiCertificate from "@/app/Gen AI.png";
import microsoftCertificate from "@/app/Microsoft.png";
import oracleCertificate from "@/app/Oracle Certificate.jpg";
import virtualInternshipCertificate from "@/app/Virtual Internship Certificate.jpg";

const CERTIFICATES = [
  {
    title: "Virtual Internship",
    issuer: "Certificate",
    period: "2026",
    details:
      "Successfully completed a virtual internship focused on practical AI/ML workflows, real-world problem solving, and professional project execution.",
    image: virtualInternshipCertificate,
  },
  {
    title: "Oracle Certificate",
    issuer: "Oracle",
    period: "2025",
    details:
      "Completed Oracle certification training that strengthened database fundamentals, SQL proficiency, and industry-ready technical practices.",
    image: oracleCertificate,
  },
  {
    title: "Microsoft Azure 900 Fundamentals",
    issuer: "Microsoft",
    period: "2025",
    details:
      "Earned foundational cloud certification covering Azure core services, security, pricing, and cloud concepts for modern solution building.",
    image: microsoftCertificate,
  },
  {
    title: "Google Cloud Gen AI Certificate",
    issuer: "Google Cloud",
    period: "2026",
    details:
      "Completed Google Cloud Generative AI learning track with hands-on understanding of foundation models, prompt design, and applied Gen AI workflows.",
    image: genAiCertificate,
  },
] as const;

export const Certificates = () => {
  const [activeCertificate, setActiveCertificate] = useState<(typeof CERTIFICATES)[number] | null>(null);

  return (
    <>
      <motion.section
        id="certificates"
        initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-6xl px-5 py-20 md:px-8"
      >
        <h2 className="mb-10 text-2xl font-semibold text-white sm:text-3xl md:mb-14 md:text-4xl">My Certificates</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((certificate, index) => (
            <motion.button
              key={certificate.title}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              onClick={() => setActiveCertificate(certificate)}
              className="flex h-full flex-col rounded-2xl border border-violet-400/25 bg-[rgba(10,15,36,0.75)] p-5 text-left shadow-[0_0_24px_rgba(76,29,149,0.2)] backdrop-blur-sm transition hover:border-cyan-300/60"
            >
              <div className="relative mb-4 h-56 overflow-hidden rounded-lg border border-white/10 bg-[#0b122f] p-2">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate preview`}
                  className="h-full w-full rounded object-contain"
                  priority
                />
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300/90">{certificate.period}</p>
              <h3 className="mt-2 text-xl font-semibold leading-tight text-gray-100">{certificate.title}</h3>
              <p className="mt-2 text-sm font-medium text-violet-200">{certificate.issuer}</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">{certificate.details}</p>
            </motion.button>
          ))}
        </div>
      </motion.section>

      {activeCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActiveCertificate(null)}
        >
          <button
            type="button"
            onClick={() => setActiveCertificate(null)}
            className="absolute right-4 top-4 rounded-full border border-white/40 px-3 py-1 text-sm font-semibold text-white hover:border-cyan-300 hover:text-cyan-300"
          >
            Close
          </button>

          <div
            className="relative max-h-[90vh] max-w-5xl overflow-auto rounded-xl border border-white/20 bg-[#050816] p-2"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeCertificate.image}
              alt={`${activeCertificate.title} full certificate`}
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};