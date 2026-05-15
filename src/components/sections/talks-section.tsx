"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const talks = [
  {
    title: "Demystifying LLMs, From Pretraining to Adaptation",
    event: "UWORCS 2025",
    image: "/blog/talk_demystifying_llms.png",
    slidesUrl:
      "https://docs.google.com/presentation/d/105Dl92sWjmfIBvktO7sYI4vSJDk_UJZfV4EJErDOlPU/edit?usp=sharing",
    blogSlug: "demystifying-llms",
  },
  {
    title: "Advanced Attention Mechanism in Transformers",
    event: "UWO Seminar",
    image: "/blog/talk_attention.png",
    slidesUrl:
      "https://docs.google.com/presentation/d/1STRbJ3gAZDHOUxICb0eFriS9So1DzE_k-u6HD-NNeq8/edit?usp=sharing",
    blogSlug: "advanced-attention-mechanisms",
  },
  {
    title: "DeepSeek — Advanced Reinforcement Learning Approaches",
    event: "UWO Seminar",
    image: "/blog/talk_deepseek.png",
    slidesUrl:
      "https://docs.google.com/presentation/d/1Ij5JzdSlkDElzGu_GH8X0KpTUmdcE581DAh5F3xsZ7o/edit?usp=sharing",
    blogSlug: "deepseek-reinforcement-learning",
  },
  {
    title: "AlphaFold and All-Atom Foundation Models",
    event: "UWO BioSeminar",
    image: "/blog/talk_alphafold.png",
    slidesUrl:
      "https://docs.google.com/presentation/d/15MNJCwaaM1xNMckSdDilzoPtEAUjXHZDLlRBIzPqN1I/edit?usp=sharing",
    blogSlug: "alphafold-foundation-models",
  },
];

export function TalksSection() {
  return (
    <section id="talks" className="py-12 border-t">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-6"
      >
        🎤 Selected Talks / Presentations
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {talks.map((talk, i) => (
          <motion.div
            key={talk.blogSlug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link href={`/blog/${talk.blogSlug}`} className="group block">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted border">
                <Image
                  src={talk.image}
                  alt={talk.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-sm font-medium leading-snug group-hover:text-primary transition-colors">
                {talk.title}
              </p>
              <p className="text-xs text-muted-foreground">{talk.event}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
