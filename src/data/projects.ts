export interface Project {
  title: string;
  description: string;
  github?: string;
  link?: string;
  tags: string[];
  repo?: {
    owner: string;
    name: string;
  };
}

export const projects: Project[] = [
  {
    title: "Scaling-Aware Adapter (ICML 2026)",
    description: "Proposed scaling-aware patching and a geometry-grounding adapter for structure-grounded LLM reasoning. Achieves top-1 on 17/18 tasks across Mol-Instruction, RNA-QA, and DNA-Chat benchmarks.",
    github: "https://github.com/zihao-jing/EntroAdap",
    link: "https://arxiv.org/pdf/2602.02780",
    tags: ["ICML 2026", "LLM", "Multimodal", "Biology", "Python"],
    repo: {
      owner: "zihao-jing",
      name: "EntroAdap"
    }
  },
  {
    title: "DQ-Former (ICLR 2026)",
    description: "Entropy-Guided Dynamic Tokens for Graph-LLM alignment in molecular understanding. SOTA on 9/10 molecular tasks and 7/7 Mol-Instruction benchmarks with connector-only training.",
    github: "https://github.com/zihao-jing/DQ-Former",
    link: "https://arxiv.org/pdf/2602.02742",
    tags: ["ICLR 2026", "Graph-LLM", "Multimodal", "Molecular", "Python"],
    repo: {
      owner: "zihao-jing",
      name: "DQ-Former"
    }
  },
  {
    title: "MuMo (NeurIPS 2025)",
    description: "Structure-Aware Fusion with Progressive Injection for multimodal molecular representation learning. Structured Fusion Pipeline aligns 2D/3D inputs, preventing fusion collapse.",
    github: "https://github.com/zihao-jing/MuMo",
    link: "https://neurips.cc/virtual/2025/loc/san-diego/poster/119127",
    tags: ["NeurIPS 2025", "Multimodal", "Molecular", "Representation Learning", "Python"],
    repo: {
      owner: "zihao-jing",
      name: "MuMo"
    }
  },
];
