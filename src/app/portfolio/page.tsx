"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Microscope, Rocket, BookOpen, Github, Link as LinkIcon, ExternalLink, Brain, Database, ImageIcon, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const aboutSections = [
  {
    title: "Hello, I'm Zihao",
    icon: <Microscope className="h-5 w-5 text-primary" />,
    content:
      "A researcher focused on the intersection of multimodal LLM and post-training to advance the frontier of reliable, human-centered AI.",
  },
  {
    title: "Research Interests",
    icon: <Rocket className="h-5 w-5 text-primary" />,
    content:
      "LLM post-training, multimodal LLM, evidence-grounded reasoning, LLM agents",
  },
  {
    title: "Beyond Research",
    icon: <BookOpen className="h-5 w-5 text-primary" />,
    content:
      "I enjoy giving talks on topics like LLM internals, attention mechanisms, and foundation models (see the Blog section).",
  },
];

const portfolioProjects = [
  {
    title: "Cuttlefish (ICML 2026)",
    description:
      "Designed an entropy-guided adapter that focuses on instruction-relevant parts of multimodal entities, solving the longstanding gap of LLMs treating all modality positions as equally important.",
    image: "/projects/cuttlefish_paper.png",
    slug: "cuttlefish",
    githubUrl: "https://github.com/zihao-jing/EntroAdap",
    paperUrl: "https://arxiv.org/abs/2602.02780",
    modelUrl: "https://huggingface.co/zihaojing/Cuttlefish",
    datasetUrl: "https://huggingface.co/datasets/zihaojing/Cuttlefish-SFT-Data",
    tags: ["ICML 2026", "Multimodal LLM", "All-Atom", "Structure-Aware Reasoning"],
  },
  {
    title: "EDT-Former (ICLR 2026)",
    description:
      "Built a dynamic connector that scales representation slots based on the input complexity, bridging the gap of fixed-size connectors that lose detail for large multimodal inputs.",
    image: "/projects/dq-former_paper.png",
    slug: "edt-former",
    githubUrl: "https://github.com/zihao-jing/EDT-Former",
    paperUrl: "https://arxiv.org/abs/2602.02742",
    modelUrl: "https://huggingface.co/zihaojing/EDT-Former-model",
    datasetUrl: "https://huggingface.co/datasets/zihaojing/EDT-Former-sft-data",
    tags: ["ICLR 2026", "Graph-LLM", "Multimodal", "Foundation Model"],
  },
  {
    title: "MuMo (NeurIPS 2025)",
    description:
      "Built a multimodal encoder that first stabilizes noisy 3D modality into a reliable prior, solving the longstanding instability in multimodal embeddings that incorporate 3D information.",
    image: "/projects/mumo_paper.jpg",
    slug: "mumo",
    githubUrl: "https://github.com/zihao-jing/MuMo",
    paperUrl: "https://arxiv.org/abs/2510.23640",
    modelUrl: "https://huggingface.co/zihaojing/MuMo-Pretrained",
    datasetUrl: "https://huggingface.co/datasets/zihaojing/MuMo-Finetuning",
    posterUrl: "https://neurips.cc/virtual/2025/loc/san-diego/poster/119127",
    slidesUrl: "https://neurips.cc/media/neurips-2025/Slides/119127_0wt9kTt.pdf",
    tags: ["NeurIPS 2025", "Multimodal", "Molecular", "Representation Learning"],
  },
  {
    title: "Piccolo2 (SenseTime 2024)",
    description:
      "General text embedding model with multi-task hybrid loss. SOTA on CMTEB with average score 70.95, surpassing all prior BERT-scale models.",
    image: "/projects/piccolo-gpt_paper.jpg",
    slug: "piccolo-gpt",
    githubUrl: "https://github.com/zihao-jing/piccolo-gpt",
    paperUrl: "https://arxiv.org/abs/2405.06932",
    modelUrl: "https://huggingface.co/selmisskilig/piccolo-gpt-zh",
    tags: ["Tech Report 2024", "Text Embedding", "Foundation Model", "Chinese NLP"],
  },
  {
    title: "Piccolo-GPT (SenseTime 2024)",
    description:
      "Unified LLM for both text embedding and generation via mixed contrastive-generative loss and two-stage training. Top-10 on CMTEB (score 68) with a single model powering full RAG pipelines.",
    image: "/projects/generative_embedding.png",
    slug: "egtlm",
    githubUrl: "https://github.com/zihao-jing/EGTLM",
    paperUrl: "https://arxiv.org/abs/2405.06932",
    modelUrl: "https://huggingface.co/zihaojing/EGTLM-Mistral7b-instruct",
    tags: ["Tech Report 2024", "LLM", "RAG", "Text Embedding"],
  },
  {
    title: "EC-Prune (Workshop)",
    description:
      "Model-agnostic, data-centric graph pruning that removes boundary-noisy outer-layer nodes via an entropy–correlation dual criterion.",
    image: "/projects/ec-prune_arch.png",
    slug: "ec-prune",
    githubUrl: "https://github.com/zihao-jing/GP-TLSTGCN",
    tags: ["ICML 2026", "Graph Pruning", "Spatiotemporal", "Transfer Learning"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Portfolio
        </h1>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          <strong>About Me:</strong> I&apos;m an AI researcher and MSc student in Computer Science. My current work sits at the intersection of multimodal LLM and post-training, with a focus on evidence-grounded reasoning.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {aboutSections.map((section) => (
          <motion.div key={section.title} variants={item}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Portfolio / Publications Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-8"
      >
        <hr className="mb-8 border-border" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group relative"
            >
              <Link href={`/portfolio/${project.slug}`} className="block h-full">
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all cursor-pointer">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="relative w-full h-full transform transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-300 group-hover:blur-sm"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20">
                        <LinkIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-md bg-muted font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        <LinkIcon className="h-4 w-4" />
                        Details
                      </span>
                      {project.paperUrl && (
                        <span
                          onClick={(e) => { e.preventDefault(); window.open(project.paperUrl, '_blank'); }}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Paper
                        </span>
                      )}
                      <span
                        onClick={(e) => { e.preventDefault(); window.open(project.githubUrl, '_blank'); }}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </span>
                      {project.modelUrl && (
                        <span
                          onClick={(e) => { e.preventDefault(); window.open(project.modelUrl, '_blank'); }}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Brain className="h-4 w-4" />
                          Model
                        </span>
                      )}
                      {project.datasetUrl && (
                        <span
                          onClick={(e) => { e.preventDefault(); window.open(project.datasetUrl, '_blank'); }}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Database className="h-4 w-4" />
                          Dataset
                        </span>
                      )}
                      {project.posterUrl && (
                        <span
                          onClick={(e) => { e.preventDefault(); window.open(project.posterUrl, '_blank'); }}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ImageIcon className="h-4 w-4" />
                          Poster
                        </span>
                      )}
                      {project.slidesUrl && (
                        <span
                          onClick={(e) => { e.preventDefault(); window.open(project.slidesUrl, '_blank'); }}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <SlidersHorizontal className="h-4 w-4" />
                          Slides
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
