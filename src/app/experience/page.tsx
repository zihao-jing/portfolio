"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experience = [
  {
    company: "SenseTime",
    companyNote: null,
    location: "Beijing, China",
    position: "LLM Research Intern",
    period: "Sep 2023 – Jun 2024",
    description: [
      {
        id: "sensetime-1",
        text: "Developed Piccolo-GPT, a dual-function LLM supporting both text embedding and generation within a single architecture.",
      },
      {
        id: "sensetime-2",
        text: "Trained general-purpose text embedding models (Piccolo2); top-1 on C-MTEB (May 2024).",
      },
      {
        id: "sensetime-3",
        text: "Fine-tuned a ~100B LLM for vertical livestream marketing for Sina Weibo.",
      },
    ],
  },
  {
    company: "Jina AI",
    companyNote: "acquired by Elastic",
    location: "Beijing, China",
    position: "AI Research Intern",
    period: "Apr 2023 – Sep 2023",
    description: [
      {
        id: "jina-1",
        text: "Implemented LLM-based denoising and sentiment analysis pipeline for Budweiser; reduced cost >13%.",
      },
      {
        id: "jina-2",
        text: "Led evaluation and deploying of super-resolution models for commercialization.",
      },
      {
        id: "jina-3",
        text: "Contributed to RunGPT of LlamaIndex with our super-resolution pipeline.",
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function ExperiencePage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Experience</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
          My internship and industry experience.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto"
      >
        {experience.map((exp, index) => (
          <motion.div
            key={exp.company + exp.position}
            variants={item}
            className="relative pl-8 pb-8 last:pb-0"
          >
            {index !== experience.length - 1 && (
              <div className="absolute left-[11px] top-8 h-full w-[2px] bg-gray-200 dark:bg-gray-800" />
            )}
            <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-2 border-primary bg-background" />

            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 flex-wrap">
                  <Briefcase className="h-5 w-5 text-primary" />
                  {exp.company}
                  {exp.companyNote && (
                    <span className="text-xs text-muted-foreground font-normal">({exp.companyNote})</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="space-y-2">
                  <p className="font-medium">{exp.position}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item) => (
                      <li key={item.id} className="text-sm text-gray-500 dark:text-gray-400 flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
