---
name: theoretical-backing
description: >-
  Provide theoretical justification for NLP/LLM research methods. Identifies relevant
  theoretical frameworks, searches literature via paper-finder, constructs formal
  justifications, and maps experimental results to theoretical predictions.
  Use when writing a Theoretical Analysis section, seeking theory to explain why a
  method works, or connecting experimental results to existing theorems/bounds.
---

# Theoretical Backing for NLP/LLM Research

Analyzes a research method and its experimental results, identifies relevant theoretical frameworks, searches for supporting literature, constructs theoretical justifications, and generates paper-ready content.

## Inputs

| Variable | Source | Description |
|----------|--------|-------------|
| `method_description` | user | Natural language description of the proposed method (mechanism, architecture, training procedure, etc.) |
| `experimental_results` | user | Key experimental findings: main results, ablation studies, analysis plots, observed phenomena |
| `research_context` | user (optional) | Related work, problem setting, or existing draft sections for additional context |

## Outputs

| Variable | Description |
|----------|-------------|
| `theory_analysis_doc` | Structured theoretical analysis document saved to project directory |
| `paper_sections` | LaTeX-ready paragraphs for Theoretical Analysis / Justification section |
| `literature_pointers` | List of recommended papers/theorems with citation keys and relevance notes |
| `experiment_theory_map` | Table mapping each experimental result to its theoretical explanation |

## Instructions

### Phase 1: Input Parsing and Key Element Extraction

Extract the following from user input:
- **Core mechanism**: What is the method actually doing? (e.g., adding noise to embeddings, pruning attention heads, contrastive loss on representations)
- **Key assumptions**: What does the method implicitly assume? (e.g., redundancy in representations, low-rank structure, distributional similarity)
- **Observed phenomena**: What experimental results need theoretical explanation? (e.g., "performance improves with X", "diminishing returns after Y", "emergent behavior at scale Z")

Present extraction to user for confirmation before proceeding.

### Phase 2: Identify Relevant Theoretical Frameworks

Consult `references/nlp_llm_theory_frameworks.md` and use domain knowledge to identify candidate frameworks.

For each candidate, provide:
- **Framework name** and core idea (1-2 sentences)
- **Why it might apply** to this specific method
- **Strength of connection**: strong (direct application), moderate (analogous), or speculative (worth exploring)
- **Key papers/theorems** to look up

See `prompts/identify_frameworks.md` for the prompt template.

Present ranked candidates to user. User selects which directions to pursue.

### Phase 3: Literature Search via paper-finder

For each selected theoretical direction:

1. Construct search queries using `prompts/search_literature.md`
2. Call **paper-finder** skill to search existing paper notes
3. Additionally, output suggested search queries for external databases (Semantic Scholar, Google Scholar, arXiv) that the user can run manually
4. Compile found references with relevance annotations

Present literature findings to user. Discuss which papers are most relevant.

### Phase 4: Construct Theoretical Justification

Using the selected frameworks and found literature:

1. **Connect method to theory**: Formalize how the method relates to the theoretical framework
   - Map method components to theoretical constructs
   - State required assumptions explicitly
   - Derive or cite relevant results (bounds, guarantees, properties)

2. **Build the argument**: Structure as:
   - **Setup**: Problem formalization, notation, assumptions
   - **Core argument**: Why the method works according to this theory
   - **Implications**: What the theory predicts about method behavior

3. **Assess argument strength**:
   - Which parts are rigorous vs. intuitive?
   - What assumptions are strong vs. weak?
   - Where are the gaps?

See `prompts/construct_justification.md` for the prompt template.

Present theoretical argument to user for interactive discussion and refinement.

### Phase 5: Experiment-Theory Correspondence Analysis

For each experimental result (main table, ablation, analysis):

| Experimental Result | Theoretical Prediction | Correspondence | Notes |
|---------------------|----------------------|----------------|-------|
| (result from paper) | (what theory predicts) | confirms / partially confirms / no prediction / contradicts | (explanation) |

Additionally identify:
- **Unexplained results**: Experimental findings that lack theoretical backing (candidates for future work)
- **Untested predictions**: Theoretical predictions not validated by current experiments (candidates for additional experiments)

See `prompts/experiment_theory_mapping.md` for the prompt template.

### Phase 6: Generate Output

Produce three deliverables:

1. **Theory analysis document** (`theory_analysis.md`): Full structured analysis saved to `Publication/paper/` or project root
   - Contains all phases' outputs, references, and discussion notes

2. **Paper-ready LaTeX sections** via `prompts/generate_section.md`:
   - Theoretical Background / Preliminaries paragraphs
   - Theoretical Analysis / Justification paragraphs
   - Experiment-theory discussion paragraphs for Results section

3. **Interactive refinement**: User can ask follow-up questions, request alternative arguments, adjust formality level, or explore different theoretical angles

### Optional Phase: Lean 4 Formal Verification

For methods with clean mathematical properties (bounds, convergence proofs, algebraic identities):

1. Assess whether formal verification adds value and is feasible
2. If yes, translate the core theorem/lemma into Lean 4 statement
3. Attempt proof construction using Mathlib tactics
4. Report verification result or identify where the proof gets stuck

See `references/lean_guide.md` for Lean 4 integration details.

This phase is optional and experimental. It is most useful for:
- Tight bounds with clean algebraic derivations
- Convergence proofs with standard mathematical structure
- Simple inequalities or combinatorial arguments

It is NOT recommended for:
- Probabilistic arguments depending on measure-theoretic machinery
- Arguments that rely heavily on empirical constants
- Informal "theoretical intuition" that isn't meant to be rigorous

## Interaction Style

This skill operates as an **interactive theory advisor**. At each phase:
- Present findings and analysis
- Ask user for feedback, corrections, direction choices
- Iterate before moving to next phase

The user controls the depth: they can stop at framework identification (Phase 2) for a quick sanity check, or go all the way to paper-ready sections (Phase 6).

## Dependencies

- **paper-finder**: For searching existing paper notes (Phase 3)
- **gemini-deep-research** or **academic-researcher** (optional): For deeper literature exploration if paper-finder results are insufficient
