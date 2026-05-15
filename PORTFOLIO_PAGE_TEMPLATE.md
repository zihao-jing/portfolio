# Portfolio Info Page — Agent Prompt Template

Use this template to brief an agent on building/revising a portfolio project info page.
Fill in every `[PLACEHOLDER]` before sending.

---

## Task

Revise the info page for the **[PROJECT_NAME]** project. The MDX file is at `src/content/portfolio/[SLUG].mdx`. The paper LaTeX repo and code repo are both under `sharing/[SHARING_FOLDER]/`. Read the paper (especially the Introduction, Method, and Experiments sections) and the code README thoroughly before writing anything.

---

## Website Structure (read first)

This is a Next.js + MDX portfolio site. Key facts:

- Portfolio info pages live at `src/content/portfolio/[slug].mdx`
- Each MDX file has a YAML frontmatter block followed by Markdown+MDX body content
- Figures must be copied to `public/projects/` to be served (source files are in `sharing/`, which is gitignored)
- The page template (`src/app/portfolio/[slug]/page.tsx`) renders: cover image → title → venue → tags → link buttons (Paper, Code, Model, Dataset) → MDX body
- Frontmatter fields available: `title`, `date`, `description`, `image`, `venue`, `paper`, `github`, `model`, `dataset`, `tags`
- The `model` and `dataset` buttons only appear if those frontmatter fields are set
- Tables in MDX require `remarkGfm` — already configured, standard pipe-table syntax works
- Do NOT use LaTeX math notation (`$...$`, `\command{...}`) anywhere in the MDX body — MDX's JSX parser will treat `{...}` as JavaScript expressions and crash. Use plain text equivalents instead.

---

## Step 1 — Frontmatter

Update the MDX frontmatter with:

```yaml
title: '[TITLE — general/technical framing, see §Packaging Direction below]'
date: '[DATE e.g. 2025-12-10]'
description: '[One sentence: method + key result + venue]'
image: '/projects/[SLUG]_paper.jpg'
venue: '[VENUE e.g. NeurIPS 2025]'
paper: '[PAPER_URL]'
github: '[GITHUB_URL]'
model: '[HUGGINGFACE_MODEL_URL]'        # omit if not applicable
dataset: '[HUGGINGFACE_DATASET_URL]'    # omit if not applicable
tags: ['[VENUE]', '[TAG2]', '[TAG3]', '[TAG4]', '[TAG5]', '[TAG6]', '[TAG7]', '[TAG8]']
```

**Tags:** Use 8–10 tags across multiple lines to show breadth. Include venue, core methods, application domain, and "Open Source" / "HuggingFace" if assets are public.

**Packaging direction:** [OWNER] wants to be framed as a **[PACKAGING_DIRECTION]** researcher (e.g., "general LLM / foundation model" rather than "AI+Biology"). The title and opening descriptions should reflect this framing — avoid domain-specific jargon in the title; prefer general terms like "multimodal encoder", "structure-aware representation", "foundation model", etc.

---

## Step 2 — About Page Card (`src/app/about/page.tsx`)

The `portfolioProjects` array in this file is hardcoded. Find the entry for `[PROJECT_NAME]` and add/update:

```ts
{
  ...
  paperUrl: '[PAPER_URL]',
  modelUrl: '[HUGGINGFACE_MODEL_URL]',    // omit if not applicable
  datasetUrl: '[HUGGINGFACE_DATASET_URL]', // omit if not applicable
}
```

The card footer already renders Paper / Code / Model / Dataset buttons conditionally — no template changes needed, just populate the fields.

---

## Step 3 — Copy Figures

Check the LaTeX source to find the **exact** figure files used — do not guess from filenames alone. Read `Visial_Components/figure_*.tex` to find the `\includegraphics{...}` path for each figure you need.

Copy the correct files to `public/projects/`:

| Purpose | Source (in `sharing/[SHARING_FOLDER]/`) | Destination |
|---------|------------------------------------------|-------------|
| Challenge / Figure 1 | `[CHALLENGE_FIGURE_PATH]` | `public/projects/[SLUG]_challenge.[ext]` |
| Architecture (main) | `[ARCH_FIGURE_1_PATH]` | `public/projects/[SLUG]_structure.[ext]` |
| Architecture (fusion/detail) | `[ARCH_FIGURE_2_PATH]` | `public/projects/[SLUG]_fusion.[ext]` |
| Training dynamics / loss | `[LOSS_FIGURE_PATH]` | `public/projects/[SLUG]_loss.[ext]` |
| Main results table | `[RESULT_FIGURE_PATH]` | `public/projects/[SLUG]_result.[ext]` |

Use PNG/JPG only (not PDF). If only a PDF exists, find the corresponding PNG/JPG sibling in the same folder.

---

## Step 4 — Info Page Body

Write the full MDX body following this structure. Be **concise and data-driven** — no long narratives. Use numbers over adjectives.

---

### 4.1 TL;DR (one short paragraph, no heading)

Write exactly one paragraph using the **STAR** framework:

- **Situation:** What is the unsolved problem / failure mode in the field?
- **Task:** What did this work set out to build/fix?
- **Action:** What method was designed? (name the key components)
- **Result:** What was the quantitative outcome? Which benchmark/venue?

Bold a small number of high-signal terms (method names, top numbers). Do not bold more than ~5 phrases. End with the venue acceptance.

---

### 4.2 Background & Challenge

Section heading: `## Background & Challenge`

Insert the challenge figure here: `![...](/projects/[SLUG]_challenge.[ext])`

Two numbered challenges, each with a bold label. Keep each to 2–3 sentences. Reference specific panels in the figure (e.g., "Figure a/b"). Name real competing methods that fail on this challenge.

---

### 4.3 Methodology

Section heading: `## Methodology`

Two or three subsections (`###`) — one per core contribution. For each:

- Insert the relevant architecture figure
- 3–5 bullet points, each starting with a **bold component name**
- No equations (LaTeX crashes MDX). Use plain text to describe the math if needed.
- End with one sentence on ablation numbers if available (e.g., "+X pp gain from this design choice alone")

Then add a "Why It Works" subsection with the loss/training-dynamics figure and 2–3 sentences explaining what the curves prove about the design.

---

### 4.4 Results

Section heading: `## Results`

**4.4.1 Empirical Performance** (`###`)

Insert the results table figure: `![...](/projects/[SLUG]_result.[ext])`

Then a Markdown table with the key headline numbers only:

| Metric | Result |
|--------|--------|
| Tasks ranked #1 | X / Y |
| Avg improvement | +Z% |
| Best single-task gain | ...% on [TASK] |
| ... | ... |

One sentence after: what baselines were beaten and what that proves.

**4.4.2 Real-World Deployment** (`###`)

Describe the real-world application in a blockquote (`>`):

> **[APPLICATION_NAME]** — [Brief explanation of the target/problem domain and why it matters]. [PROJECT_NAME] served as **[role, e.g., "scoring engine for a X-molecule virtual screen"]**, [impact sentence].

Then one sentence validating scalability.

*Placeholder to fill:* `[REAL_WORLD_APPLICATION]` — describe any known downstream deployment, industry use, or collaboration. If unknown, omit this subsection.

**4.4.3 Field Contribution** (`###`)

2–3 sentences: what open problem this closes, why the approach is architecture-agnostic / domain-general, and one forward-looking sentence about broader impact. This section is intentionally aspirational — it is meant for interview/industry packaging, so be bold.

---

### 4.5 Open-Source Access

Section heading: `## Open-Source Access`

State that all assets are fully open-sourced. Then a Markdown table:

| Asset | Link |
|-------|------|
| Paper | [link] |
| Code | [link] |
| Pretrained Model | [link] |
| Finetuning Datasets | [link] |
| Pretraining Dataset | [link] |

Then three short subsections (`###`): **Quick Start**, **Load Pretrained Model**, **Run Finetuning / Inference** — each with a small code block. Pull these directly from the README. Keep each block to under 10 lines. Link to the full README at the end.

---

### 4.6 Citation & Contact

Section heading: `## Citation`

Paste the BibTeX block. Then:

Section heading: `## Contact`

List the first author and corresponding author with email links. One closing sentence welcoming questions or collaborations.

---

## Style Rules (apply throughout)

- **Concise over comprehensive.** The whole page should feel like a tight conference poster, not a paper appendix.
- **Numbers over adjectives.** "27% MAE reduction" beats "significant improvement".
- **No LaTeX math.** Replace all `$...$` or `\command{...}` with plain text (e.g., "unified graph T = (V, E, G)").
- **No long bullet lists.** Max 5 bullets per subsection; each bullet one sentence.
- **Bold sparingly.** Bold only method names and top numbers.
- **No comments in code blocks.** Keep code examples minimal and copy-pasteable.

---

## Checklist

Before finishing, verify:

- [ ] Frontmatter has all applicable link fields (`paper`, `github`, `model`, `dataset`)
- [ ] Tags are 8–10 items; no tag duplicates the title word-for-word
- [ ] About page card (`about/page.tsx`) has `paperUrl`, `modelUrl`, `datasetUrl` populated
- [ ] All figures copied to `public/projects/` and referenced correctly in MDX (correct extension)
- [ ] Figure files match what `\includegraphics{...}` references in the LaTeX source
- [ ] No `$`, `\`, `{`, `}` outside of fenced code blocks in the MDX body
- [ ] Tables use standard pipe syntax (works with remarkGfm)
- [ ] TL;DR is one paragraph, uses STAR, has bold terms but not too many
- [ ] Results section has: table image + numbers table + deployment application + field contribution
- [ ] Citation BibTeX block is inside a fenced ` ```bibtex ``` ` block
