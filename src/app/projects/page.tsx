"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProcessedRepo } from "@/app/api/github-stars/route";

const languageColors: Record<string, { bg: string; text: string }> = {
  TypeScript: { bg: "bg-blue-100 dark:bg-blue-900", text: "text-blue-800 dark:text-blue-100" },
  JavaScript: { bg: "bg-yellow-100 dark:bg-yellow-900", text: "text-yellow-800 dark:text-yellow-100" },
  Python: { bg: "bg-green-100 dark:bg-green-900", text: "text-green-800 dark:text-green-100" },
  HTML: { bg: "bg-orange-100 dark:bg-orange-900", text: "text-orange-800 dark:text-orange-100" },
  CSS: { bg: "bg-purple-100 dark:bg-purple-900", text: "text-purple-800 dark:text-purple-100" },
  Ruby: { bg: "bg-red-100 dark:bg-red-900", text: "text-red-800 dark:text-red-100" },
  Go: { bg: "bg-cyan-100 dark:bg-cyan-900", text: "text-cyan-800 dark:text-cyan-100" },
  Rust: { bg: "bg-orange-100 dark:bg-orange-900", text: "text-orange-800 dark:text-orange-100" },
  Java: { bg: "bg-red-100 dark:bg-red-900", text: "text-red-800 dark:text-red-100" },
};

const getLanguageColors = (language: string | null) => {
  if (!language) return { bg: "bg-gray-100 dark:bg-gray-800", text: "text-gray-800 dark:text-gray-100" };
  return languageColors[language] || { bg: "bg-gray-100 dark:bg-gray-800", text: "text-gray-800 dark:text-gray-100" };
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  const [repos, setRepos] = useState<ProcessedRepo[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState<number | null>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/github-stars')
      .then(r => r.json())
      .then((data: ProcessedRepo[]) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    const container = measureRef.current;
    if (!container) return;
    const measure = () => {
      const buttons = Array.from(container.children) as HTMLElement[];
      if (!buttons.length) return;
      const tops = Array.from(new Set(buttons.map(b => b.offsetTop))).sort((a, b) => a - b);
      if (tops.length <= 3) { setVisibleCount(null); return; }
      const row4Top = tops[3];
      const firstOnRow4 = buttons.findIndex(b => b.offsetTop >= row4Top);
      setVisibleCount(Math.max(0, firstOnRow4 - 1));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, [repos]);

  const allFilters = (() => {
    const freq: Record<string, number> = {};
    const recency: Record<string, string> = {};
    for (const repo of repos) {
      const tags = [...(repo.language ? [repo.language] : []), ...repo.topics];
      for (const tag of tags) {
        freq[tag] = (freq[tag] || 0) + 1;
        if (!recency[tag] || repo.pushedAt > recency[tag]) recency[tag] = repo.pushedAt;
      }
    }
    return Object.keys(freq).sort((a, b) =>
      freq[b] !== freq[a] ? freq[b] - freq[a] : recency[b].localeCompare(recency[a])
    );
  })();

  const filteredRepos = repos
    .filter(repo =>
      selectedFilters.length === 0
        ? true
        : selectedFilters.some(f => repo.language === f || repo.topics.includes(f))
    )
    .sort((a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime());

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-6 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
          A collection of my open-source projects and personal works.
        </p>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <Github className="h-3 w-3" />
            Live from GitHub · refreshed daily
          </div>
          <Link href="https://github.com/zihao-jing" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="rounded-full">
              <Github className="h-4 w-4 mr-2" />
              GitHub Profile
            </Button>
          </Link>
        </div>
      </motion.div>

      {allFilters.length > 0 && (
        <div className="mb-8 relative">
          {/* Hidden clone used only for row-boundary measurement */}
          <div
            ref={measureRef}
            aria-hidden="true"
            className="flex flex-wrap gap-2 absolute inset-x-0 top-0 invisible pointer-events-none"
          >
            {allFilters.map(filter => (
              <Button key={filter} variant="outline" size="sm" className="rounded-full">
                {filter}
              </Button>
            ))}
          </div>
          {/* Visible tags, capped to 3 rows */}
          <div className="flex flex-wrap gap-2">
            {(visibleCount !== null ? allFilters.slice(0, visibleCount) : allFilters).map(filter => (
              <Button
                key={filter}
                variant={selectedFilters.includes(filter) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter(filter)}
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
            {visibleCount !== null && (
              <span className="inline-flex items-center px-2 text-sm text-muted-foreground select-none">
                …
              </span>
            )}
          </div>
        </div>
      )}

      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading projects...</p>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredRepos.map(repo => (
            <motion.div key={repo.fullName} variants={item}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-2">
                    <span className="text-lg">{repo.name}</span>
                    <span className="text-xs text-gray-400 whitespace-nowrap pt-1">
                      {formatDate(repo.pushedAt)}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {repo.description || 'No description provided.'}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {repo.language && (
                      <span className={`px-2 py-1 text-xs rounded-full ${getLanguageColors(repo.language).bg} ${getLanguageColors(repo.language).text}`}>
                        {repo.language}
                      </span>
                    )}
                    {repo.topics.map(topic => (
                      <span key={topic} className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800">
                        {topic}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={repo.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
          <motion.div variants={item} className="flex items-center justify-center">
            <Link
              href="https://github.com/zihao-jing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>more on GitHub</span>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
