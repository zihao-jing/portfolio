"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const mentors = [
  {
    name: "Prof. Pingzhao Hu",
    affiliation: "Western University",
    url: "https://scholar.google.ca/citations?user=ejiSuoYAAAAJ&hl=en&oi=ao",
    quote: "Write a paper such that reviewers neither can nor need to ask questions.",
  },
  {
    name: "Prof. Boyu Wang",
    affiliation: "Western University",
    url: "https://scholar.google.ca/citations?user=qAZM5KcAAAAJ&hl=en&oi=ao",
    quote: "Read 20+ related papers before discussing ideas with me.",
  },
  {
    name: "Yifu Ding",
    affiliation: "PhD in CS, Beihang University",
    url: "https://scholar.google.ca/citations?user=RCEI1r0AAAAJ&hl=en&oi=ao",
    quote: "A paper should present clear, well-aligned challenges and novelties.",
  },
  {
    name: "Qiuhao Zeng",
    affiliation: "Postdoc in CS, University of Toronto",
    url: "https://scholar.google.ca/citations?user=MJdcPlgAAAAJ&hl=en&oi=ao",
    quote: "If you dig one direction deeper, you will always uncover novelty.",
  },
];

export function ValuesSection() {
  return (
    <section id="values" className="py-12 border-t">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-6"
      >
        👨‍🏫 Research Values from My Mentors
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mentors.map((m, i) => (
          <motion.blockquote
            key={m.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="border-l-4 border-primary pl-4 py-2 bg-card rounded-r-lg"
          >
            <p className="text-sm italic mb-2">&ldquo;{m.quote}&rdquo;</p>
            <footer className="text-xs text-muted-foreground">
              <Link
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary transition-colors"
              >
                {m.name}
              </Link>
              {", "}
              {m.affiliation}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
