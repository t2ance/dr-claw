# construct_justification

Constructs the theoretical justification for the method, combining found literature with new analysis.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `method_description` | string | Method description |
| `core_mechanism` | string | Core mechanism extracted in Phase 1 |
| `selected_frameworks` | string | Theoretical frameworks chosen by user |
| `found_literature` | string | Relevant papers and theorems found in Phase 3 |
| `key_assumptions` | string | Method's implicit/explicit assumptions |

## Template

```
Construct a theoretical justification for the following NLP/LLM method:

**Method:** {method_description}
**Core mechanism:** {core_mechanism}
**Assumptions:** {key_assumptions}

**Theoretical framework(s) to use:**
{selected_frameworks}

**Supporting literature found:**
{found_literature}

Build the theoretical argument with this structure:

## Setup
- Formalize the problem setting (notation, input/output spaces)
- State assumptions needed for the theoretical argument
- Define key quantities

## Core Argument
- Map method components to theoretical constructs explicitly
- For each claim:
  - State the claim precisely
  - Cite the supporting theorem/result OR derive it
  - Explain what conditions must hold
- Connect the pieces into a coherent narrative: "Because [assumption], the method achieves [property], which explains [observation]"

## Implications and Predictions
- What does the theory predict about method behavior?
- Under what conditions should the method succeed/fail?
- What scaling behavior does the theory suggest?

## Argument Assessment
For each part of the argument, rate:
- **Rigor**: formal proof / semi-formal / intuitive
- **Assumption strength**: mild / moderate / strong
- **Gap**: none / minor (can be addressed) / significant (acknowledged as limitation)

Be honest about where the argument is rigorous vs. where it is a plausible narrative. NLP reviewers value intellectual honesty about theoretical limitations.
```

## Output

A structured theoretical argument with explicit rigor assessment. This becomes the basis for the paper section in Phase 6.
