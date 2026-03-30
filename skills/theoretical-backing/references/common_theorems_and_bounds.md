# Common Theorems and Bounds for NLP/LLM Papers

Quick reference for frequently cited theoretical results. Each entry includes: statement (informal), conditions, and citation.

---

## Generalization and Learning Theory

### PAC-Bayes Bound (McAllester, 1999)
**Statement**: For any posterior Q over hypotheses and prior P (chosen before seeing data), with probability >= 1-delta over training set S of size n:
  E_Q[L(h)] <= E_Q[L_S(h)] + sqrt( (KL(Q||P) + ln(n/delta)) / (2(n-1)) )
**Conditions**: Bounded loss, prior P independent of training data.
**Use for**: Justifying regularization, fine-tuning methods that stay close to pretrained weights.

### Rademacher Complexity Bound
**Statement**: Generalization gap bounded by 2 * Rademacher complexity of the hypothesis class.
**Conditions**: i.i.d. samples, bounded loss.
**Use for**: Analyzing model capacity, comparing architecture expressiveness.

### Compression-Based Generalization (Arora et al., 2018)
**Statement**: If a network can be compressed to use fewer effective parameters, generalization bound tightens proportionally.
**Conditions**: Compression must preserve training accuracy approximately.
**Use for**: Pruning, quantization, low-rank methods (LoRA).

---

## Information Theory

### Data Processing Inequality
**Statement**: For any Markov chain X -> Y -> Z: I(X;Z) <= I(X;Y).
**Conditions**: Markov chain structure.
**Use for**: Arguing that intermediate representations lose information, justifying why certain pipeline designs are suboptimal.

### Information Bottleneck Lagrangian (Tishby et al., 2000)
**Statement**: Optimal representation T minimizes: L = I(X;T) - beta * I(T;Y).
**Conditions**: Known joint distribution P(X,Y) (in practice, estimated from data).
**Use for**: Justifying compression-prediction trade-offs in representation learning.

### Fano's Inequality
**Statement**: For predicting X from Y: P(error) >= (H(X|Y) - 1) / log(|X|).
**Conditions**: Discrete X.
**Use for**: Lower bounds on classification error given limited information.

---

## Scaling and Power Laws

### Neural Scaling Law (Kaplan et al., 2020)
**Statement**: Cross-entropy loss scales as power law with parameters N, data D, and compute C:
  L(N) ~ (N_c / N)^alpha_N, L(D) ~ (D_c / D)^alpha_D
**Conditions**: IID data, standard transformer architecture, sufficient training.
**Use for**: Predicting performance at scale, justifying compute allocation.

### Chinchilla Optimal Scaling (Hoffmann et al., 2022)
**Statement**: For compute-optimal training, model parameters N and training tokens D should scale equally: N ~ D.
**Conditions**: Fixed compute budget, standard training.
**Use for**: Arguing that a method achieves better compute efficiency.

---

## Optimization

### Adam Convergence (Reddi et al., 2018 -- AMSGrad)
**Statement**: Adam can diverge in certain convex settings. AMSGrad fix: use max of past squared gradients.
**Conditions**: Convex optimization (note: deep learning is non-convex).
**Use for**: Justifying optimizer choices, warmup schedules.

### Gradient Clipping Convergence (Zhang et al., 2020)
**Statement**: Gradient clipping enables convergence under heavy-tailed gradient noise, where SGD may diverge.
**Conditions**: (L0, L1)-smoothness (generalized smoothness).
**Use for**: Justifying gradient clipping in training pipelines.

---

## Transformer-Specific

### Universal Approximation for Transformers (Yun et al., 2020)
**Statement**: Transformers with 2 attention heads, single head, and O(1) layers can approximate any continuous sequence-to-sequence function on compact domain.
**Conditions**: Sufficient width, continuous target function, compact input domain.
**Use for**: Arguing that architectural modifications maintain expressiveness.

### Attention as Kernel (Tsai et al., 2019)
**Statement**: Softmax attention computes: Attn(Q,K,V) = softmax(QK^T/sqrt(d))V, equivalent to kernel regression with exponential kernel.
**Conditions**: Standard softmax attention.
**Use for**: Connecting attention variants to kernel methods, analyzing efficient attention approximations.

### Chain-of-Thought Extends Computation (Feng et al., 2023)
**Statement**: CoT allows transformers to solve problems requiring polynomial computation depth, beyond what fixed-depth transformers can express.
**Conditions**: Sufficient chain length, appropriate problem structure.
**Use for**: Justifying step-by-step reasoning methods, intermediate computation approaches.

---

## Alignment and Preference Learning

### DPO-RLHF Equivalence (Rafailov et al., 2023)
**Statement**: Under Bradley-Terry preference model, the DPO loss optimizes the same objective as RLHF with KL-constrained reward maximization, with reward implicitly defined as: r(x,y) = beta * log(pi(y|x)/pi_ref(y|x)) + const.
**Conditions**: Bradley-Terry model of human preferences, reference policy pi_ref.
**Use for**: Justifying preference optimization methods, connecting to reward-based frameworks.

### Reward Overoptimization (Gao et al., 2023)
**Statement**: As policy optimizes proxy reward R_proxy beyond a threshold, true reward R_true degrades. The relationship follows: R_true ~ alpha * sqrt(KL) - beta * KL.
**Conditions**: Proxy reward model with bounded accuracy.
**Use for**: Justifying KL penalties, regularization in RLHF, conservative policy updates.

---

## Contrastive Learning

### Alignment and Uniformity (Wang & Isola, 2020)
**Statement**: Good contrastive representations optimize two properties:
  - Alignment: positive pairs should be close (low E[||f(x) - f(x+)||^2])
  - Uniformity: features should be uniform on hypersphere (low log E[exp(-2||f(x) - f(y)||^2)])
**Conditions**: Normalized representations, contrastive objective.
**Use for**: Analyzing representation quality, justifying contrastive losses.

### Spectral Contrastive Loss Guarantees (HaoChen et al., 2021)
**Statement**: Minimizing spectral contrastive loss learns representations whose linear probes achieve low downstream error, bounded by graph connectivity of augmentation graph.
**Conditions**: Augmentation graph connectivity, linear probe evaluation.
**Use for**: Justifying contrastive pre-training, connecting augmentation design to downstream performance.

---

## Usage Notes

- Always verify that the conditions/assumptions of a theorem match your setting
- For NLP papers, exact formal conditions rarely hold perfectly; acknowledge this and argue why the result still provides useful insight
- Prefer citing the original paper for the theorem, plus a recent application paper that uses it in a similar NLP context
- When a result is debated (marked above), cite both the original and the counter-argument
