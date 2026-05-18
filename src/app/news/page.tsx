"use client";

import { motion } from "framer-motion";
import { BookOpen, Trophy, Users, GraduationCap, Star, Medal, Briefcase } from "lucide-react";

const newsItems = [
  {
    date: "May 2026",
    sortKey: "2026-05",
    category: "Award",
    icon: <Medal className="h-4 w-4" />,
    title: "Gold Reviewer Award — ICML 2026",
    description: "Received the Gold Reviewer Award at ICML 2026 for reviewing 6 papers with high-quality, thorough feedback.",
  },
  {
    date: "Apr 2026",
    sortKey: "2026-04-d",
    category: "Publication",
    icon: <BookOpen className="h-4 w-4" />,
    title: "Paper Accepted at ICML 2026",
    description: "\"Scaling-Aware Adapter for Structure-Grounded LLM Reasoning\" accepted at ICML 2026. Introduces an entropy-guided adapter that focuses LLM attention on instruction-relevant parts of 3D biological entities.",
  },
  {
    date: "Apr 2026",
    sortKey: "2026-04-c",
    category: "Education",
    icon: <GraduationCap className="h-4 w-4" />,
    title: "Passed Master's Thesis Defense",
    description: "Successfully defended Master's thesis at Western University, completing the MSc in Computer Science (Research).",
  },
  {
    date: "Apr 2026",
    sortKey: "2026-04-b",
    category: "Grant",
    icon: <Star className="h-4 w-4" />,
    title: "Digital Research Alliance of Canada — RRG Grant",
    description: "Awarded 25 RGU-years (≡ 5×A100-80GB GPU-years) on Canada's national supercomputing cluster via the Resources for Research Groups Competition. Estimated commercial value ~US$80K.",
  },
  {
    date: "Jan 2026",
    sortKey: "2026-01",
    category: "Publication",
    icon: <BookOpen className="h-4 w-4" />,
    title: "Paper Accepted at ICLR 2026",
    description: "\"Entropy-Guided Dynamic Tokens for Graph-LLM Alignment in Molecular Understanding\" accepted at ICLR 2026. Builds a dynamic connector that scales representation slots based on molecular complexity, bridging the gap of fixed-size connectors that lose structural detail for large entities.",
  },
  {
    date: "Dec 2025",
    sortKey: "2025-12",
    category: "Service",
    icon: <Users className="h-4 w-4" />,
    title: "Conference Volunteer — NeurIPS 2025, San Diego",
    description: "Served as a conference volunteer at NeurIPS 2025 in San Diego.",
  },
  {
    date: "Sep 2025",
    sortKey: "2025-09",
    category: "Publication",
    icon: <BookOpen className="h-4 w-4" />,
    title: "Paper Accepted at NeurIPS 2025",
    description: "\"Structure-Aware Fusion with Progressive Injection for Multimodal Molecular Representation Learning\" (MuMo) accepted at NeurIPS 2025. Builds a multimodal encoder that first stabilizes noisy 3D shape data into a reliable prior, solving longstanding instability in multimodal embeddings that incorporate 3D geometry.",
  },
  {
    date: "Sep 2024",
    sortKey: "2024-09",
    category: "Education",
    icon: <GraduationCap className="h-4 w-4" />,
    title: "Started MSc at Western University",
    description: "Began Master of Science in Computer Science (Research) at Western University, supervised by Prof. Pingzhao Hu.",
  },
  {
    date: "Jun 2024",
    sortKey: "2024-06-b",
    category: "Career",
    icon: <Briefcase className="h-4 w-4" />,
    title: "Completed SenseTime Internship",
    description: "Concluded 9-month LLM Research Internship at SenseTime, Beijing.",
  },
  {
    date: "Jun 2024",
    sortKey: "2024-06-a",
    category: "Education",
    icon: <GraduationCap className="h-4 w-4" />,
    title: "Graduated from Beihang University",
    description: "Completed BEng in Software Engineering at Beihang University, graduating with Honors.",
  },
  {
    date: "May 2024",
    sortKey: "2024-05",
    category: "Research",
    icon: <Trophy className="h-4 w-4" />,
    title: "Top-1 Ranking on C-MTEB",
    description: "Piccolo2 text embedding model achieved top-1 ranking on the Chinese Massive Text Embedding Benchmark during internship at SenseTime.",
  },
  {
    date: "Sep 2023",
    sortKey: "2023-09-b",
    category: "Career",
    icon: <Briefcase className="h-4 w-4" />,
    title: "Joined SenseTime as LLM Research Intern",
    description: "Started LLM Research Internship at SenseTime, Beijing, working on large-scale text embedding and generative LLMs.",
  },
  {
    date: "Sep 2023",
    sortKey: "2023-09-a",
    category: "Career",
    icon: <Briefcase className="h-4 w-4" />,
    title: "Completed Jina AI Internship",
    description: "Concluded 5-month AI Research Internship at Jina AI.",
  },
  {
    date: "Apr 2023",
    sortKey: "2023-04",
    category: "Career",
    icon: <Briefcase className="h-4 w-4" />,
    title: "Joined Jina AI as AI Research Intern",
    description: "Started AI Research Internship at Jina AI, working on LLM-based pipelines and super-resolution models.",
  },
  {
    date: "2023",
    sortKey: "2023-01",
    category: "Award",
    icon: <Trophy className="h-4 w-4" />,
    title: "Silver Prize — Feng Ru Cup",
    description: "Awarded Silver Prize at Beihang University's flagship Feng Ru Cup Science and Innovation Competition.",
  },
  {
    date: "2021",
    sortKey: "2021-03",
    category: "Award",
    icon: <Trophy className="h-4 w-4" />,
    title: "Third Prize — National Undergraduate Mathematics Competition",
    description: "National-level mathematics competition for undergraduate students across China.",
  },
  {
    date: "2021",
    sortKey: "2021-02",
    category: "Award",
    icon: <Trophy className="h-4 w-4" />,
    title: "Third Prize — 32nd Beijing Undergraduate Mathematics Competition",
    description: "Province-level mathematics competition for undergraduate students in Beijing.",
  },
  {
    date: "2020",
    sortKey: "2020-01",
    category: "Award",
    icon: <Trophy className="h-4 w-4" />,
    title: "H Prize — Mathematical Contest in Modeling (MCM)",
    description: "Awarded Honorable Mention at the international Mathematical Contest in Modeling.",
  },
  {
    date: "Sep 2019",
    sortKey: "2019-09",
    category: "Education",
    icon: <GraduationCap className="h-4 w-4" />,
    title: "Started BEng at Beihang University",
    description: "Began Bachelor of Engineering in Software Engineering at Beihang University, Beijing.",
  },
];

const categoryColor: Record<string, string> = {
  Publication: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
  Award:       "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400",
  Grant:       "bg-green-500/15 text-green-600 dark:text-green-400",
  Service:     "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  Education:   "bg-sky-500/15 text-sky-600 dark:text-sky-400",
  Research:    "bg-rose-500/15 text-rose-600 dark:text-rose-400",
  Career:      "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400",
  Personal:    "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function NewsPage() {
  return (
    <div className="container py-12 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-10 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">News</h1>
        <p className="mt-2 text-muted-foreground max-w-[600px]">
          Latest updates, publications, and milestones.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-0"
      >
        {newsItems.map((news) => (
          <motion.div
            key={news.sortKey}
            variants={item}
            className="relative pl-8 py-5 border-l border-border"
          >
            <div className="absolute left-0 top-6 -translate-x-1/2 p-1.5 bg-background rounded-full border border-border text-muted-foreground">
              {news.icon}
            </div>

            <div className="flex flex-wrap items-start gap-2 mb-1">
              <h3 className="font-medium text-base leading-snug">{news.title}</h3>
              <span className="ml-auto text-xs text-muted-foreground whitespace-nowrap">
                {news.date}
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-2">{news.description}</p>

            <span
              className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${categoryColor[news.category] ?? "bg-muted text-muted-foreground"}`}
            >
              {news.category}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
