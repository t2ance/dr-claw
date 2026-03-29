# search_literature

Constructs search queries for paper-finder and external databases based on identified theoretical frameworks.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `selected_frameworks` | string | Frameworks selected by user from Phase 2 |
| `method_description` | string | Brief method description for context |
| `key_theorems` | string | Specific theorems/results identified in Phase 2 |

## Template

```
Based on the following theoretical directions for our NLP/LLM method:

**Method:** {method_description}

**Selected theoretical frameworks:**
{selected_frameworks}

**Key theorems/results to find:**
{key_theorems}

Generate search queries for:

1. **paper-finder queries** (for searching local paper notes):
   - One query per framework, using the most distinctive keywords
   - Additional queries for specific theorem names or author names

2. **External database queries** (for user to search manually on Semantic Scholar / Google Scholar / arXiv):
   - Broader queries combining method domain + theory domain
   - Specific queries for foundational theory papers
   - Queries for recent papers that apply this theory to similar NLP problems

For each query, note what you expect to find and why it matters for the theoretical argument.
```

## Output

Two sets of search queries (local paper-finder + external databases) with expected relevance annotations.
