"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Play, Brain, Database, ImageIcon, SlidersHorizontal } from "lucide-react";

const mainPapers = [
  {
    venue: "ICML 2026",
    venueBg: "bg-orange-500",
    question: "Can LLMs Reason Over Complex Structures Without Wasting Tokens?",
    title: "Scaling-Aware Adapter for Structure-Grounded LLM Reasoning",
    authors: "Zihao Jing, Qiuhao Zeng, Ruiyi Fang, Yan Yi Li, Yan Sun, Boyu Wang, Pingzhao Hu",
    description:
      "Designed a entropy-guided smart adapter that focuses on the instruction related parts of 3D entities, solving the longstanding gap of LLMs treating all positions as equally important. Achieves top-1 on 17 out of 18 biology QA benchmarks, making LLM-assisted structural research an operational reality.",
    image: "/projects/entroadap_paper.jpg",
    paperUrl: "https://arxiv.org/pdf/2602.02780",
    githubUrl: "https://github.com/zihao-jing/EntroAdap",
    modelUrl: "https://huggingface.co/zihaojing/Cuttlefish",
    datasetUrl: "https://huggingface.co/datasets/zihaojing/Cuttlefish-SFT-Data",
    slug: "cuttlefish",
  },
  {
    venue: "ICLR 2026",
    venueBg: "bg-orange-500",
    question: "How Can LLMs Align With Structures Without Fixed-Size Bottlenecks?",
    title: "Entropy-Guided Dynamic Tokens for Graph-LLM Alignment in Molecular Understanding",
    authors: "Zihao Jing, Qiuhao Zeng, Ruiyi Fang, Yan Sun, Boyu Wang, Pingzhao Hu",
    description:
      "A dynamic connector that scales representation slots based on complexity, bridging the gap of fixed-size connectors that lose structural detail for large entities. The model ranks #1 on 20 of 21 understanding tasks and trains 3.5× faster under equivalent settings, directly advancing AI-driven drug design.",
    image: "/projects/dqformer_paper.jpg",
    paperUrl: "https://arxiv.org/pdf/2602.02742",
    githubUrl: "https://github.com/zihao-jing/DQ-Former",
    modelUrl: "https://huggingface.co/zihaojing/EDT-Former-model",
    datasetUrl: "https://huggingface.co/datasets/zihaojing/EDT-Former-sft-data",
    videoUrl: "https://www.loom.com/share/0f624c26551b4273b33371358c3164d3",
    slug: "edt-former",
  },
  {
    venue: "NeurIPS 2025",
    venueBg: "bg-purple-600",
    question: "Can Foundation Models Learn Reliable Representations from Noisy Structures?",
    title: "Structure-Aware Fusion with Progressive Injection for Multimodal Molecular Representation Learning",
    authors: "Zihao Jing, Yan Sun, Yan Yi Li, Sugitha Janarthanan, Alana Deng, Pingzhao Hu",
    description:
      "Built an multimodal encoder that first stabilizes noisy 3D shape data into a reliable prior, solving the longstanding instability in multimodal embedding that incorporate 3D geometry. Ranks #1 on 22/29 molecular property benchmarks with up to 27% better accuracy, and was applied to pipeline for finding Pin1 inhibitors in cancer treatment.",
    image: "/projects/mumo_paper.jpg",
    paperUrl: "https://arxiv.org/abs/2510.23640",
    githubUrl: "https://github.com/zihao-jing/MuMo",
    modelUrl: "https://huggingface.co/zihaojing/MuMo-Pretrained",
    datasetUrl: "https://huggingface.co/datasets/zihaojing/MuMo-Finetuning",
    posterUrl: "https://neurips.cc/virtual/2025/loc/san-diego/poster/119127",
    slidesUrl: "https://neurips.cc/media/neurips-2025/Slides/119127_0wt9kTt.pdf",
    slug: "mumo",
  },
];

const additionalPapers = [
  {
    title: "Piccolo2: General Text Embedding with Multi-Task Hybrid Loss Training",
    venue: "SenseTime Technical Report, 2024",
    authors: "Junqin Huang, Zhongjie Hu, Zihao Jing, Mengya Gao, Yichao Wu",
    url: "https://arxiv.org/abs/2405.06932",
  },
  {
    title: "Attention with Routed-Memory for Learnable Sparse Control",
    venue: "ICML 2026",
    authors: "Qiuhao Zeng, ..., Zihao Jing, et al.",
    url: null,
  },
  {
    title: "SAGA: Structural Aggregation Guided Alignment for Multiview Graph Domain Adaptation",
    venue: "ICLR 2026",
    authors: "Ruiyi Fang, Jingyu Zhao, ..., Zihao Jing, et al.",
    url: null,
  },
  {
    title: "Distilling and Adapting: A Topology-Aware Framework for Zero-Shot Interaction Prediction in Multiplex Biological Networks",
    venue: "ICLR 2026",
    authors: "Alana Deng, ..., Zihao Jing, Pingzhao Hu",
    url: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function renderAuthors(authors: string) {
  const parts = authors.split("Zihao Jing");
  if (parts.length === 1) return <>{authors}</>;
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <strong>Zihao Jing</strong>}
        </span>
      ))}
    </>
  );
}

export function PublicationsSection() {
  return (
    <section id="publications" className="py-12">
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-2xl font-bold mb-2"
      >
        📝 Selected Publications
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-sm text-muted-foreground mb-6"
      >
        🎓 First-Author Top-Tier Conference Papers During My Master&apos;s
      </motion.p>

      <div className="space-y-8">
        {mainPapers.map((paper, i) => (
          <motion.div
            key={paper.slug}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } } }}
            className="flex flex-col sm:flex-row gap-5 border rounded-lg p-5 hover:shadow-md transition-shadow bg-card"
          >
            {/* Paper figure */}
            <Link href={`/portfolio/${paper.slug}`} className="block flex-shrink-0 sm:w-48">
              <div className="relative aspect-[4/3] sm:w-48 rounded overflow-hidden bg-muted">
                <Image src={paper.image} alt={paper.title} fill className="object-cover" />
                <span className={`absolute top-2 left-2 text-white text-xs font-bold px-2 py-0.5 rounded ${paper.venueBg}`}>
                  {paper.venue}
                </span>
              </div>
            </Link>

            {/* Paper text */}
            <div className="flex-1 min-w-0">
              <Link href={`/portfolio/${paper.slug}`} className="hover:underline">
                <h3 className="font-semibold text-base leading-snug mb-1">{paper.question}</h3>
              </Link>
              <p className="text-xs italic text-muted-foreground mb-1">{paper.title}</p>
              <p className="text-xs text-muted-foreground mb-2">{renderAuthors(paper.authors)}</p>
              <p className="text-sm text-muted-foreground mb-3">{paper.description}</p>
              <div className="flex flex-wrap gap-3 text-xs">
                <Link
                  href={paper.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <ExternalLink className="h-3 w-3" /> Paper
                </Link>
                <Link
                  href={paper.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <Github className="h-3 w-3" /> Code
                </Link>
                {"videoUrl" in paper && paper.videoUrl && (
                  <Link
                    href={paper.videoUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <Play className="h-3 w-3" /> Video
                  </Link>
                )}
                {"modelUrl" in paper && paper.modelUrl && (
                  <Link
                    href={paper.modelUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <Brain className="h-3 w-3" /> Model
                  </Link>
                )}
                {"datasetUrl" in paper && paper.datasetUrl && (
                  <Link
                    href={paper.datasetUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <Database className="h-3 w-3" /> Dataset
                  </Link>
                )}
                {"posterUrl" in paper && paper.posterUrl && (
                  <Link
                    href={paper.posterUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <ImageIcon className="h-3 w-3" /> Poster
                  </Link>
                )}
                {"slidesUrl" in paper && paper.slidesUrl && (
                  <Link
                    href={paper.slidesUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <SlidersHorizontal className="h-3 w-3" /> Slides
                  </Link>
                )}
                <Link
                  href={`/portfolio/${paper.slug}`}
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline"
                >
                  Details →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional work */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="mt-10"
      >
        <p className="text-sm font-medium text-muted-foreground mb-4">
          🎓 Additional Work and Co-Authored Publications
        </p>
        <ul className="space-y-3">
          {additionalPapers.map((p) => (
            <li key={p.title} className="text-sm flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>
                {p.url ? (
                  <Link href={p.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {p.title}
                  </Link>
                ) : (
                  p.title
                )}
                {". "}
                <span className="text-muted-foreground">{renderAuthors(p.authors)}.</span>{" "}
                <span className="font-medium">{p.venue}.</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground mt-4">
          For a complete list, see{" "}
          <Link
            href="https://scholar.google.ca/citations?user=xfvxo64AAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Google Scholar
          </Link>.
        </p>
      </motion.div>
    </section>
  );
}
