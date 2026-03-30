# identify_frameworks

Constructs the prompt for identifying relevant theoretical frameworks given a method description.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `method_description` | string | User's description of their NLP/LLM method |
| `core_mechanism` | string | Extracted core mechanism from Phase 1 |
| `key_assumptions` | string | Extracted implicit assumptions |
| `observed_phenomena` | string | Key experimental observations that need explanation |

## Template

```
I have an NLP/LLM research method with the following characteristics:

**Method description:**
{method_description}

**Core mechanism:**
{core_mechanism}

**Key assumptions (implicit or explicit):**
{key_assumptions}

**Observed experimental phenomena that need theoretical explanation:**
{observed_phenomena}

Consult the theory frameworks reference and your own knowledge. For each potentially relevant theoretical framework, provide:

1. **Framework name** and core idea (1-2 sentences)
2. **Connection to this method**: Why does this framework apply here? Be specific about which aspect of the method maps to which theoretical construct.
3. **Strength of connection**: strong / moderate / speculative
4. **Key results to cite**: Specific theorems, bounds, or propositions (with paper references if known)
5. **What it would explain**: Which experimental observations this framework can account for

Rank frameworks by strength of connection (strong first). Include at least 3 candidates. For speculative connections, explain what additional assumptions would be needed to make the connection rigorous.
```

## Output

A ranked list of theoretical frameworks with relevance analysis. User selects which directions to pursue in subsequent phases.
