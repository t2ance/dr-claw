# generate_section

Generates paper-ready LaTeX paragraphs for theoretical content.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `theoretical_argument` | string | The constructed justification from Phase 4 |
| `experiment_theory_map` | string | Correspondence analysis from Phase 5 |
| `writing_style` | string | Target venue style (e.g., "ACL concise", "NeurIPS with formal notation", "AAAI balanced") |
| `section_type` | string | Which section to generate: "background", "analysis", "discussion", or "all" |

## Template

```
Generate paper-ready LaTeX content based on the theoretical analysis:

**Theoretical argument:**
{theoretical_argument}

**Experiment-theory mapping:**
{experiment_theory_map}

**Target style:** {writing_style}
**Section(s) to generate:** {section_type}

Generate the following sections as requested:

### Theoretical Background / Preliminaries
- Introduce the theoretical framework(s) used, with citations
- Define notation and key concepts needed for the analysis
- State foundational results that the argument builds on
- Keep concise: only include what's necessary for the reader to follow the analysis

### Theoretical Analysis / Justification
- Present the core theoretical argument
- Use Proposition/Theorem/Remark environments where appropriate
- Include proof sketches if the argument is semi-formal
- Clearly distinguish between formal results and intuitive arguments
- Connect back to the method: "This suggests that [method component] achieves [property] because..."

### Results Discussion (theory-related paragraphs)
- For each key experimental result, add a sentence connecting it to the theory
- "This is consistent with [Theorem X], which predicts that..."
- "The ablation removing [component] validates our theoretical analysis, as [framework] predicts..."
- Flag any results that the theory doesn't explain (intellectual honesty)

Guidelines:
- Use \citep{} and \citet{} placeholders with descriptive keys (e.g., \citep{tishby2015deep_information_bottleneck})
- Mark any citation that needs to be verified with [VERIFY]
- Use standard LaTeX theorem environments (\begin{proposition}, \begin{remark}, etc.)
- Aim for the level of formality appropriate to the target venue
```

## Output

LaTeX paragraphs organized by section, ready to be pasted into the paper draft. Citation keys are placeholders that the user replaces with their actual BibTeX keys.
