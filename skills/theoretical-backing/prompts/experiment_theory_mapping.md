# experiment_theory_mapping

Maps experimental results to theoretical predictions for correspondence analysis.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `experimental_results` | string | All experimental results (main table, ablations, analyses) |
| `theoretical_argument` | string | The constructed theoretical justification from Phase 4 |
| `theoretical_predictions` | string | Specific predictions derived from the theory |

## Template

```
Analyze the correspondence between experimental results and theoretical predictions:

**Theoretical argument summary:**
{theoretical_argument}

**Theoretical predictions:**
{theoretical_predictions}

**Experimental results:**
{experimental_results}

For each experimental result, fill in this mapping:

| Experimental Result | Theoretical Prediction | Correspondence | Explanation |
|---------------------|----------------------|----------------|-------------|
| ... | ... | confirms / partially confirms / neutral / contradicts | ... |

Correspondence categories:
- **confirms**: Result directly validates a theoretical prediction
- **partially confirms**: Result is consistent but doesn't fully test the prediction
- **neutral**: Theory makes no prediction about this result
- **contradicts**: Result appears to conflict with theoretical prediction (explain why this might not be a true contradiction, or flag it as a genuine issue)

Then provide two additional analyses:

## Unexplained Results
Experimental findings that the current theoretical framework does NOT account for:
- What is the result?
- Why doesn't the current theory explain it?
- What additional theory might be needed?
- Recommendation: acknowledge as future work, or attempt to extend the theory

## Untested Predictions
Theoretical predictions NOT validated by current experiments:
- What does the theory predict?
- What experiment would test it?
- Recommendation: run the experiment if feasible, or acknowledge as future work

## Strength of Empirical Support
Overall assessment: How well do the experiments support the theoretical claims? Rate as:
- Strong: multiple independent results confirm key predictions
- Moderate: main results confirm, but some predictions untested
- Suggestive: consistent with theory, but alternative explanations exist
```

## Output

An experiment-theory correspondence table plus gap analysis. This informs both the Results discussion and the Limitations section of the paper.
