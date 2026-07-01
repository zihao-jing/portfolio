"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const education = [
  {
    degree: "MSc, Computer Science",
    school: "Western University",
    schoolUrl: "https://www.csd.uwo.ca/",
    period: "Sep 2024 – Apr 2026",
    location: "London, Canada",
    note: "Supervised by Prof. Pingzhao Hu",
    noteUrl: "https://phulab.org/",
    honor: "Graduated with Honor",
  },
  {
    degree: "BEng, Software Engineering",
    school: "Beihang University",
    schoolUrl: "https://www.buaa.edu.cn/",
    period: "Sep 2019 – Jun 2024",
    location: "Beijing, China",
    note: "Graduated with Honor",
    noteUrl: null,
  },
];

const experience = [
  {
    company: "SenseTime",
    companyNote: null,
    role: "LLM Research Intern",
    period: "Sep 2023 – Jun 2024",
    location: "Beijing, China",
    bullets: [
      "Developed Piccolo-GPT, a dual-function LLM supporting both text embedding and generation within a single architecture.",
      "Trained general-purpose text embedding models (Piccolo2); top-1 on C-MTEB (May 2024).",
      "Fine-tuned a ~100B LLM for vertical livestream marketing for Sina Weibo.",
    ],
  },
  {
    company: "Jina AI",
    companyNote: "acquired by Elastic",
    role: "AI Research Intern",
    period: "Apr 2023 – Sep 2023",
    location: "Beijing, China",
    bullets: [
      "Implemented LLM-based denoising and sentiment analysis pipeline for Budweiser; reduced cost >13%.",
      "Led evaluation and deplopying of super-resolution models for commercialization.",
      "Contributed to RunGPT of LlamaIndex with our super-resolution pipeline.",
    ],
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-12 border-t">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold mb-4">📖 Education</h2>
        <ul className="space-y-3">
          {education.map((e) => (
            <li key={e.degree} className="text-sm flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>
                <span className="text-muted-foreground mr-2">{e.period}</span>
                <span className="font-medium">{e.degree},</span>{" "}
                <Link href={e.schoolUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {e.school}
                </Link>
                {". "}
                <span className="text-muted-foreground">{e.location}.</span>{" "}
                <span className="text-muted-foreground">{e.note}.</span>
                {"honor" in e && e.honor && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-medium ml-1">
                    {e.honor}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export function InternshipsSection() {
  return (
    <section id="internships" className="py-12 border-t">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold mb-4">💻 Internships</h2>
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border rounded-lg p-4 bg-card"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-semibold">
                  {exp.company}
                  {exp.companyNote && (
                    <span className="text-xs text-muted-foreground font-normal ml-1.5">
                      ({exp.companyNote})
                    </span>
                  )}
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">
                  {exp.role}
                </span>
                <span className="text-xs text-muted-foreground ml-auto">{exp.period} · {exp.location}</span>
              </div>
              <ul className="space-y-1">
                {exp.bullets.map((b) => (
                  <li key={b} className="text-sm text-muted-foreground flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function EduExpSection() {
  return (
    <>
      <EducationSection />
      <InternshipsSection />
    </>
  );
}
