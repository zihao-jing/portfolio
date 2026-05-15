"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Mail, FileText, BookOpen } from "lucide-react";

export function ProfileCard() {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-border shadow-md">
        <Image
          src="/avatar.jpg"
          alt="Zihao Jing"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div>
        <h2 className="text-xl font-bold">Zihao Jing</h2>
        <p className="text-sm text-muted-foreground mt-1">AI Researcher,</p>
        <p className="text-sm text-muted-foreground">MSc of CS</p>
        <p className="text-sm text-muted-foreground">Western University</p>
        <p className="text-sm text-muted-foreground">Beihang University</p>
      </div>

      <div className="flex flex-wrap gap-1.5 justify-center">
        {["LLM Post-Training", "Multimodal Reasoning", "World Models"].map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full border border-border text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-1">
        <Link href="https://github.com/zihao-jing" target="_blank" rel="noopener noreferrer" title="GitHub">
          <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
        <Link href="https://scholar.google.ca/citations?user=xfvxo64AAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" title="Google Scholar">
          <BookOpen className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
        <Link href="mailto:zihaoj24@gmail.com" title="Email">
          <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
        <Link href="https://zihao-jing.github.io/academic-cv/" target="_blank" rel="noopener noreferrer" title="Plain Version">
          <FileText className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
      </div>
    </div>
  );
}
