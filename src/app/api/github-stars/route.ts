import { NextResponse } from 'next/server';

interface GitHubRepo {
  full_name: string;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  pushed_at: string;
  topics: string[];
  fork: boolean;
}

export interface ProcessedRepo {
  fullName: string;
  name: string;
  description: string | null;
  language: string | null;
  url: string;
  pushedAt: string;
  topics: string[];
}

export async function GET() {
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Portfolio-App',
  };

  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(
    'https://api.github.com/users/zihao-jing/repos?sort=pushed&per_page=100&type=owner',
    {
      headers,
      next: { revalidate: 86400 },
    }
  );

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch repos' }, { status: response.status });
  }

  const repos = await response.json() as GitHubRepo[];

  const processedRepos: ProcessedRepo[] = repos
    .filter(repo => !repo.fork)
    .map(repo => ({
      fullName: repo.full_name,
      name: repo.name,
      description: repo.description,
      language: repo.language,
      url: repo.html_url,
      pushedAt: repo.pushed_at,
      topics: repo.topics || [],
    }));

  return NextResponse.json(processedRepos);
}
