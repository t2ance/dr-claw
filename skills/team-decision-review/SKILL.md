---
name: team-decision-review
description: >-
  Spawn a teammate to challenge your design proposal using the
  decision-clarity skill's Socratic questioning methodology. Use when
  you have a design proposal, architecture decision, prompt design, or
  implementation plan that needs rigorous review before committing.
  Also use when the user says "review this design", "challenge my
  proposal", "poke holes in this", "is this the right approach",
  "let's discuss this with a teammate", or "team review".
---

# Team Decision Review

Spawn a teammate who uses the **decision-clarity** skill to challenge
your design proposals through structured Socratic questioning.

## Core Idea

You (the lead) have a proposal. You spawn a teammate (the questioner).
The questioner invokes the `/decision-clarity` skill to load the
Clarify / Deconstruct / Simplify / Decide methodology, then uses it
to challenge your proposal across multiple rounds. You answer, revise,
and iterate until no gaps remain.

The questioner's questioning methodology comes entirely from the
decision-clarity skill. This skill only teaches how to set up the
team and run the review process.

## Procedure

### 1. Prepare Your Proposal

Before spawning the team, write down:
- The problem you're solving
- Your proposed solution
- Files the questioner should read (specific paths)

### 2. Create Team and Spawn Questioner

```
TeamCreate: team_name="decision-review"

Agent:
  name: "questioner"
  team_name: "decision-review"
  subagent_type: "general-purpose"
```

The questioner's prompt must include:

1. **File list**: specific files to read before questioning (Phase 1)
2. **Skill invocation**: explicit instruction to invoke the
   decision-clarity skill and use its methodology
3. **Rules**: only ask questions, never propose solutions; 2-3
   questions per round; reference specific code (file:line); keep
   track of answered questions and never repeat them

Example questioner prompt:

```
You are a Socratic questioner reviewing a design proposal.

PHASE 1: Read these files thoroughly before asking anything:
  - [list specific file paths here]

PHASE 2: Invoke the decision-clarity skill (/decision-clarity).
Use its Clarify/Deconstruct/Simplify/Decide methodology to
structure your questions.

PHASE 3: Challenge the proposal through multiple rounds.

Rules:
- ONLY ask questions, never propose solutions.
- Each round: 2-3 focused questions.
- Reference specific code (file:line) when relevant.
- Track what's been answered. Never repeat a question.
- When no more gaps exist, say: "I have no further questions."
- Send all questions via SendMessage to "team-lead".

After reading all files, send: "Phase 1 complete. Ready for
proposal." Then wait.
```

### 3. Run the Review

1. Send your problem + proposal to the questioner
2. For each round: read questions, answer honestly, state revisions
3. Continue until "I have no further questions"

### 4. Summarize and Close

After the review:
1. List all revisions by round
2. State the final revised proposal
3. Shutdown questioner and delete team

## Anti-Patterns

These failure modes were observed in real sessions:

1. **Repeating answered questions** -- questioner re-asks what was
   already addressed. The questioner must track answered questions.

2. **Abstract questions without code references** -- "Is this robust?"
   is useless. "Line 482 overwrites grader_items in the loop -- does
   this lose inner_0 data?" is useful.

3. **Skipping Phase 1 (file reading)** -- questioning without
   understanding the codebase produces surface-level questions.
   Phase 1 is mandatory.

4. **Proposing solutions** -- the questioner's job is to find gaps,
   not fill them. Redirect if it starts saying "you should..."

5. **Endless inquiry** -- each round should make progress. If a round
   reveals nothing new, the review is done.

6. **Lead not conceding** -- when a question reveals a real gap,
   acknowledge it and revise. Don't defend a flawed proposal.
