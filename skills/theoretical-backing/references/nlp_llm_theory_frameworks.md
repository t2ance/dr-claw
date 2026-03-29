# NLP/LLM Theoretical Frameworks Quick Reference

A catalog of theoretical frameworks commonly used to justify NLP/LLM research methods. For each framework: what it is, when to use it, key results, and representative papers.

---

## 1. Information Bottleneck (IB)

**Core idea**: Optimal representations compress input X while preserving information about target Y. Formalized as minimizing I(X;T) - beta * I(T;Y).

**When to apply**:
- Methods that learn compressed/distilled representations
- Dropout, noise injection, quantization as implicit regularization
- Knowledge distillation
- Any method that trades off compression vs. prediction quality

**Key results**:
- IB Lagrangian and its variational bound (Tishby et al., 2000)
- Deep networks progressively compress representations (Shwartz-Ziv & Tishby, 2017) -- note: debated
- Variational Information Bottleneck for deep learning (Alemi et al., 2017)

**Representative papers**:
- Tishby, Pereira, Bialek. "The Information Bottleneck Method" (2000)
- Shwartz-Ziv, Tishby. "Opening the Black Box of Deep Neural Networks via Information" (2017)
- Alemi et al. "Deep Variational Information Bottleneck" (ICLR 2017)

---

## 2. Scaling Laws

**Core idea**: Model performance follows predictable power-law relationships with compute, data size, and parameter count.

**When to apply**:
- Methods that improve efficiency (same performance with less compute/data)
- Architecture changes that shift the scaling curve
- Data curation/filtering methods
- Training recipe optimization

**Key results**:
- Kaplan scaling laws: L(N) ~ N^(-alpha) for parameters, similar for data and compute (Kaplan et al., 2020)
- Chinchilla optimal: model size and data should scale equally (Hoffmann et al., 2022)
- Emergent abilities appear at specific scale thresholds (Wei et al., 2022) -- note: debated (Schaeffer et al., 2023)

**Representative papers**:
- Kaplan et al. "Scaling Laws for Neural Language Models" (2020)
- Hoffmann et al. "Training Compute-Optimal Large Language Models" (2022)
- Wei et al. "Emergent Abilities of Large Language Models" (2022)

---

## 3. In-Context Learning (ICL) Theory

**Core idea**: Transformers performing ICL can be understood as implicit Bayesian inference, implicit gradient descent, or kernel regression.

**When to apply**:
- Methods that modify or improve ICL (prompt engineering, demonstration selection)
- Few-shot learning approaches
- Methods that study what transformers learn from context
- Retrieval-augmented generation (connecting retrieved context to ICL)

**Key results**:
- ICL as implicit Bayesian inference (Xie et al., 2022)
- Transformers as implicit gradient descent on in-context examples (von Oswald et al., 2023; Akyurek et al., 2023)
- ICL with linear models: transformers implement ridge regression (Garg et al., 2022)
- Induction heads as mechanistic basis for ICL (Olsson et al., 2022)

**Representative papers**:
- Xie et al. "An Explanation of In-context Learning as Implicit Bayesian Inference" (ICLR 2022)
- von Oswald et al. "Transformers Learn In-Context by Gradient Descent" (ICML 2023)
- Akyurek et al. "What Learning Algorithm is In-Context Learning?" (NeurIPS 2023)

---

## 4. PAC-Bayes / Generalization Bounds

**Core idea**: Generalization error can be bounded using the complexity of the learned hypothesis relative to a prior, without assumptions on the data distribution.

**When to apply**:
- Regularization methods (why they improve generalization)
- Fine-tuning strategies (LoRA, adapters -- bounding deviation from pretrained model)
- Ensemble methods
- Any method where generalization is the central claim

**Key results**:
- PAC-Bayes bound: generalization gap bounded by KL(posterior || prior) / n (McAllester, 1999)
- Compression-based generalization (Arora et al., 2018)
- PAC-Bayes bounds for deep networks (Dziugaite & Roy, 2017)
- Flatness and generalization connection via PAC-Bayes (Neyshabur et al., 2017)

**Representative papers**:
- McAllester. "PAC-Bayesian Model Averaging" (1999)
- Neyshabur et al. "Exploring Generalization in Deep Nets" (NeurIPS 2017)
- Jiang et al. "Fantastic Generalization Measures" (ICLR 2020)

---

## 5. Approximation Theory for Transformers

**Core idea**: Transformers are universal approximators with specific expressiveness properties tied to attention and depth.

**When to apply**:
- Novel architectures or attention variants
- Efficient transformers (showing they maintain expressiveness)
- Positional encoding methods
- Depth vs. width trade-offs

**Key results**:
- Transformers are universal approximators of sequence-to-sequence functions (Yun et al., 2020)
- Attention layers can represent sparse interactions efficiently (Edelman et al., 2022)
- Depth separation: deeper transformers can represent functions shallow ones cannot (Merrill & Sabharwal, 2023)
- Transformers can simulate bounded-depth circuits (Merrill et al., 2022)

**Representative papers**:
- Yun et al. "Are Transformers Universal Approximators of Sequence-to-Sequence Functions?" (ICLR 2020)
- Edelman et al. "Inductive Biases and Variable Creation in Self-Attention Mechanisms" (ICML 2022)

---

## 6. Compression and Minimum Description Length (MDL)

**Core idea**: Learning is compression. Good models compress training data efficiently. MDL provides a framework for model selection.

**When to apply**:
- Pruning, quantization, distillation methods
- Vocabulary/tokenization design
- Methods that improve data efficiency
- Any method framed as finding simpler explanations

**Key results**:
- MDL principle for model selection (Rissanen, 1978; Grunwald, 2007)
- Language modeling as compression (Deletang et al., 2024)
- Pruning lottery tickets as compression (Frankle & Carlin, 2019)

**Representative papers**:
- Deletang et al. "Language Modeling Is Compression" (ICLR 2024)
- Frankle & Carlin. "The Lottery Ticket Hypothesis" (ICLR 2019)

---

## 7. RLHF and Alignment Theory

**Core idea**: Reward modeling from human preferences has theoretical properties related to Bradley-Terry models, reward hacking, and policy optimization.

**When to apply**:
- RLHF, DPO, or preference optimization methods
- Methods addressing reward hacking or overoptimization
- Constitutional AI or self-improvement methods
- Alignment tax analysis

**Key results**:
- DPO equivalence to reward-based RLHF under Bradley-Terry (Rafailov et al., 2023)
- Reward overoptimization: Goodhart's Law formalized (Gao et al., 2023)
- KL penalty as implicit trust region (Schulman et al., 2017)
- RLHF as Bayesian inference over reward functions (Jeon et al., 2020)

**Representative papers**:
- Rafailov et al. "Direct Preference Optimization" (NeurIPS 2023)
- Gao et al. "Scaling Laws for Reward Model Overoptimization" (ICML 2023)

---

## 8. Tokenization and Subword Theory

**Core idea**: Tokenization choices affect model capacity, fertility, and cross-lingual transfer. Information-theoretic analysis of subword segmentation.

**When to apply**:
- New tokenization methods
- Multilingual model design
- Character-level vs. subword analysis
- Vocabulary size optimization

**Key results**:
- BPE as approximate MDL (Sennrich et al., 2016)
- Optimal vocabulary size analysis (Galle, 2019)
- Tokenization-free models and character-level theory (Clark et al., 2022)

---

## 9. Attention as Kernel Methods

**Core idea**: Softmax attention computes a kernel function. This connects transformers to kernel machines and Gaussian processes.

**When to apply**:
- Linear attention or efficient attention variants
- Methods that modify the attention mechanism
- Theoretical analysis of attention patterns
- Connections between transformers and classical methods

**Key results**:
- Softmax attention as exponential kernel (Tsai et al., 2019)
- Random feature approximation for efficient attention (Choromanski et al., 2021 -- Performer)
- Attention and Hopfield networks connection (Ramsauer et al., 2021)

**Representative papers**:
- Tsai et al. "Transformer Dissection" (2019)
- Choromanski et al. "Rethinking Attention with Performers" (ICLR 2021)

---

## 10. Representation Learning Theory

**Core idea**: Learned representations should capture task-relevant structure. Disentanglement, identifiability, and invariance provide theoretical grounding.

**When to apply**:
- Contrastive learning methods (SimCLR, CLIP-style)
- Prompt tuning and adapter methods (what is being learned in the representation?)
- Multi-task learning and transfer
- Probing studies

**Key results**:
- Contrastive learning optimizes alignment and uniformity (Wang & Isola, 2020)
- Spectral contrastive learning theory (HaoChen et al., 2021)
- Linear probing and representation quality (Alain & Bengio, 2017)

**Representative papers**:
- Wang & Isola. "Understanding Contrastive Representation Learning through Alignment and Uniformity" (ICML 2020)
- HaoChen et al. "Provable Guarantees for Self-Supervised Deep Learning with Spectral Contrastive Loss" (NeurIPS 2021)

---

## 11. Optimization Theory (Relevant to NLP)

**Core idea**: Convergence properties, loss landscape analysis, and optimizer behavior provide theoretical backing for training methods.

**When to apply**:
- New optimizers or learning rate schedules
- Training stability methods (gradient clipping, warmup)
- Loss function design
- Methods claiming faster/better convergence

**Key results**:
- Adam convergence analysis (Kingma & Ba, 2015; Reddi et al., 2018 for corrected version)
- Loss landscape smoothness and batch size scaling (McCandlish et al., 2018)
- Warmup and learning rate schedule theory (Liu et al., 2020 -- RAdam)
- Gradient clipping as implicit regularization (Zhang et al., 2020)

---

## 12. Formal Language Theory and Transformers

**Core idea**: Transformers have specific computational expressiveness that can be characterized in terms of formal language classes.

**When to apply**:
- Architectural modifications affecting expressiveness
- Positional encoding analysis
- Chain-of-thought and reasoning capabilities
- Length generalization

**Key results**:
- Transformers recognize TC0 (constant-depth threshold circuits) (Merrill & Sabharwal, 2023)
- Hard attention transformers and counter languages (Merrill, 2020)
- Chain-of-thought as extending computational depth (Feng et al., 2023)
- Looped transformers as universal computers (Giannou et al., 2023)

**Representative papers**:
- Merrill & Sabharwal. "The Parallelism Tradeoff" (TACL 2023)
- Feng et al. "Towards Revealing the Mystery behind Chain of Thought" (NeurIPS 2023)
