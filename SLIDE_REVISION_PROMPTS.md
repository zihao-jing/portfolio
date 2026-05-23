# Slide Revision Prompts for Project Pages

Use these prompts to design the project slide groups in `src/app/slides/page.tsx`. The slides should feel consistent with the first two pages: soft green background, elegant outer card, restrained typography, strong figure usage, and limited text.

## Global Style Rules

- Keep the same visual family as slides 1-2: green-tinted background, centered outer card, subtle border, soft shadow, and clean two-panel or figure-led layouts.
- Do not overload the slide with paragraphs. Prefer phrases, labels, short captions, compact cards, tags, and visual hierarchy.
- Repackage each work for a general audience in large language models, multimodal alignment, foundation models, and efficient structure-aware AI.
- Avoid paper-heavy terms unless they are essential. When technical terms appear, translate them into plain language nearby.
- Use figures from the paper when they tell the story quickly. Prefer intro/challenge figures, architecture figures, ablation tables, and result summaries.
- Do not copy the exact paper language. Use the paper, README, and `/portfolio/<slug>` page as source material, then rewrite for clarity and presentation.
- For each project, make three slides:
  1. Challenges and research gap
  2. Novelty and method story
  3. Results and impact
- Keep the bottom navigation button count consistent with the current deck. Since each paper now has three slides, do not add separate navigation buttons for every project sub-slide. Instead, each paper-related button should jump to the first slide of that paper's three-slide section.

## Bottom Navigation Rule

The bottom navigation should remain compact and consistent:

- Keep one navigation button per major deck section, not one button per slide.
- For `MuMo`, `EDT-Former`, and `Cuttlefish`, each button should point to the first slide in that project's three-slide sequence.
- The user should still be able to move through the second and third slide of each paper with the normal previous/next slide controls.
- Button labels should stay concise, for example `MuMo`, `EDT-Former`, and `Cuttlefish`.
- Do not let the bottom navigation become crowded after expanding each paper into three slides.

## Prompt 1: MuMo Slides

Reference sources:
- Paper: `sharing/MuMo/NeurIPS_2025_Paper`
- Code README: `sharing/MuMo/MuMo/README.md`
- Website page: `/portfolio/mumo`, source file `src/content/portfolio/mumo.mdx`
- Useful figures: `sharing/MuMo/NeurIPS_2025_Paper/figures/intro_v3.png`, `structure_v5.jpg`, `Fusion_v4.jpg`, `similarity_main_new.jpg`, `training_loss.pdf`, `Umap_Experiment.pdf`

Task:
Revise slides 3-5 to introduce MuMo as a foundation model / multimodal alignment project. Use one slide for the challenge and research gap, one slide for the novelty, and one slide for results and impact.

Slide 3: Challenges and Research Gap
- Main story: multimodal foundation models need stable alignment between sequence, graph, and geometry, but noisy 3D inputs can corrupt the representation.
- Use a challenge or introduction figure from the paper if helpful.
- Explain the gap in plain language:
  - "3D views are useful but unstable."
  - "Naive fusion lets noisy signals disturb stronger signals."
  - "Foundation models need robust alignment, not just more inputs."
- Keep the slide visual-first. Use short labels around the figure instead of long paragraphs.

Slide 4: Novelty
- Main story: MuMo first builds a stable structural prior, then injects it gradually into the model instead of mixing everything at once.
- Use the main architecture or fusion figure.
- Rephrase the method as:
  - "Stabilize structure before alignment."
  - "Inject geometry after semantic context forms."
  - "Fuse modalities without letting one dominate."
- Avoid overusing terms like "SFP", "IEA", "Mamba", "conformer", or "molecular" unless needed for a small caption.
- Add 3-5 tags such as `Multimodal Alignment`, `Stable Geometry`, `Foundation Encoder`, `Progressive Fusion`, `Robust Representation`.

Slide 5: Results and Impact
- Main story: MuMo makes multimodal representations more reliable and transfers to real downstream discovery tasks.
- Use a compact result table, benchmark figure, or ablation summary.
- Highlight only the strongest numbers:
  - `#1 on 17/22 benchmarks`
  - `+2.7% average gain over best baseline`
  - `up to 27% error reduction on sensitive prediction tasks`
- Package the impact broadly:
  - "Better foundation representations under noisy inputs."
  - "More reliable multimodal alignment."
  - "Open model and datasets for downstream research."

## Prompt 2: EDT-Former Slides

Reference sources:
- Paper: `sharing/EDT-Former/tex_paper_repo`
- Code README: `sharing/EDT-Former/README.md`
- Website page: `/portfolio/edt-former`, source file `src/content/portfolio/edt-former.mdx`
- Useful figures: `sharing/EDT-Former/figs/arch.png`, plus figures and tables under `sharing/EDT-Former/tex_paper_repo/Figures`, `figs`, and `Tables`

Task:
Create a three-slide story for EDT-Former that presents it as an efficient Graph-LLM / structure-to-LLM alignment method. The audience should understand why fixed connectors are limiting and why adaptive token allocation matters.

Slide A: Challenges and Research Gap
- Main story: current connectors give every structured input the same token budget, even when complexity is very different.
- Plain-language gap:
  - "Small inputs waste tokens."
  - "Large inputs lose details."
  - "Full LLM fine-tuning is expensive."
- Use an architecture, entropy, or comparison figure to show the fixed-budget problem visually.
- Avoid too much chemistry language; focus on structured inputs, LLM connectors, and scalable alignment.

Slide B: Novelty
- Main story: EDT-Former allocates representation slots according to complexity while keeping the LLM backbone frozen.
- Rephrase the method as:
  - "Let the input decide how many tokens it needs."
  - "Compress simple regions, preserve complex regions."
  - "Train the connector, not the whole LLM."
- Use the architecture figure as the central visual, with simple callouts.
- Add tags such as `Dynamic Tokens`, `Frozen LLM`, `Efficient Alignment`, `Graph-LLM Bridge`, `Adaptive Connector`.

Slide C: Results and Impact
- Main story: adaptive alignment achieves strong results with much lower training cost.
- Highlight only the strongest numbers from the portfolio page:
  - `Top-1 on 9/10 zero-shot property tasks`
  - `3.5x faster than LoRA fine-tuning`
  - `37 GB vs 77 GB GPU memory`
  - `Best average performance on MoleculeQA`
- Broad impact phrasing:
  - "Scalable structure-to-language alignment."
  - "Strong reasoning without retraining the LLM."
  - "Reusable connector idea for structured foundation models."

## Prompt 3: Cuttlefish Slides

Reference sources:
- Paper: `sharing/Cuttlefish/tex_paper`
- Code README: `sharing/Cuttlefish/README.md`
- Website page: `/portfolio/cuttlefish`, source file `src/content/portfolio/cuttlefish.mdx`
- Useful figures: `sharing/Cuttlefish/tex_paper/itmes/figs/main_arch.pdf`, `sample_compare.pdf`, `token_usage_area.pdf`, `length_metrics.pdf`, `experimets_four_panel.pdf`, `training_efficiency.pdf`

Task:
Create a three-slide story for Cuttlefish that presents it as an instruction-aware, structure-grounded multimodal LLM. The story should focus on helping LLMs look at the right structural evidence for the question.

Slide A: Challenges and Research Gap
- Main story: LLMs can talk about complex 3D entities, but without grounded geometry they may reason from incomplete or compressed evidence.
- Plain-language gap:
  - "The same object can require different evidence for different questions."
  - "Fixed token budgets hide important details."
  - "Text-only reasoning is not enough for 3D structure."
- Use a sample comparison, token usage, or challenge figure.
- Focus on multimodal reasoning and structure-grounded LLMs, not domain-specific biology wording.

Slide B: Novelty
- Main story: Cuttlefish makes the adapter instruction-aware, so the model spends more representation budget on the parts relevant to the current question.
- Rephrase the method as:
  - "Question-guided attention to structure."
  - "More tokens for important regions, fewer for simple regions."
  - "Inject geometry directly into LLM reasoning."
- Use the main architecture figure with 2-3 simple callouts.
- Add tags such as `Instruction-Aware`, `Adaptive Compute`, `Geometry Grounding`, `Multimodal LLM`, `Structure Reasoning`.

Slide C: Results and Impact
- Main story: Cuttlefish turns structure-grounded reasoning into a practical general LLM capability across heterogeneous entity types.
- Highlight only the strongest numbers:
  - `Top-1 on 17/18 QA benchmarks`
  - `Strong gains for large, complex structures`
  - `Unified model across multiple structured modalities`
- Broad impact phrasing:
  - "LLMs reason with geometry instead of guessing from text."
  - "Adaptive token budgets scale to complex inputs."
  - "Open model, encoder, and instruction data for structure-grounded LLM research."
