# Lean 4 Formal Verification Guide (Optional)

Guide for using Lean 4 to formally verify theoretical results in NLP/LLM papers. This is an experimental, optional capability.

## When Lean Verification Is Useful

**Good candidates**:
- Algebraic identities (e.g., showing two loss functions are equivalent under certain conditions)
- Simple inequalities with clean closed-form expressions
- Combinatorial arguments (counting, pigeonhole)
- Convergence of specific iterative procedures with known fixed-point structure
- Equivalence proofs between two formulations (e.g., DPO = RLHF under Bradley-Terry)

**Poor candidates**:
- Arguments relying on measure-theoretic probability (Mathlib support is limited)
- Asymptotic results with empirically estimated constants
- Statistical arguments (PAC-Bayes bounds with sample complexity)
- Informal "theoretical intuition" not intended to be rigorous
- Results depending on properties of neural network training dynamics

## Lean 4 Basics for Theory Verification

### Setup
```
-- Lean 4 project with Mathlib dependency
-- In lakefile.lean:
require mathlib from git "https://github.com/leanprover-community/mathlib4"
```

### Common Patterns

**Proving an inequality**:
```lean
theorem my_bound (x : Real) (hx : 0 < x) (hx1 : x <= 1) :
    x - x^2 / 2 <= Real.log (1 + x) := by
  sorry -- fill in proof
```

**Proving equivalence of two expressions**:
```lean
theorem loss_equivalence (pi pi_ref : Real) (hpi : 0 < pi) (href : 0 < pi_ref) (beta : Real) (hbeta : 0 < beta) :
    beta * (Real.log pi - Real.log pi_ref) = beta * Real.log (pi / pi_ref) := by
  rw [Real.log_div (ne_of_gt hpi) (ne_of_gt href)]
```

**Working with sums and expectations (discrete)**:
```lean
-- Use Finset.sum for finite sums
-- Mathlib provides many lemmas for manipulating sums
```

### Useful Mathlib Modules
- `Mathlib.Analysis.SpecialFunctions.Log.Basic` -- logarithm properties
- `Mathlib.Analysis.SpecialFunctions.Pow` -- power functions
- `Mathlib.Analysis.InnerProductSpace` -- inner products, norms
- `Mathlib.LinearAlgebra` -- matrix operations
- `Mathlib.Topology.MetricSpace` -- convergence
- `Mathlib.Order.Filter.Basic` -- limits

### Common Tactics
- `ring` -- algebraic simplification
- `linarith` -- linear arithmetic
- `nlinarith` -- nonlinear arithmetic
- `norm_num` -- numeric computation
- `simp` -- simplification with lemma database
- `calc` -- step-by-step calculation
- `gcongr` -- monotonicity reasoning

## Workflow

1. **Assess feasibility**: Is the claim cleanly formalizable? Are the required Mathlib lemmas likely available?
2. **State the theorem**: Write the Lean 4 statement with all conditions explicit
3. **Attempt proof**: Start with `sorry` and progressively fill in
4. **Report result**:
   - If verified: include Lean code as supplementary material
   - If stuck: report which step failed and what Mathlib lemma is missing
   - If infeasible: explain why and skip

## Limitations

- Lean proof does NOT replace the paper's mathematical argument; it supplements it
- Most NLP theory papers do not include formal verification; this is a bonus, not a requirement
- Current AI capability for writing Lean proofs is limited; expect manual intervention for non-trivial proofs
- Mathlib's probability theory coverage is growing but not yet comprehensive
