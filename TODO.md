# VibeLab TODO / Known Bugs

## Bugs

### High Priority

*(None yet)*

### Low Priority

- [ ] **File preview panel resize not working**: Unable to adjust the width ratio between the left file panel and the right file preview window. The splitter/drag handle does not respond or does not resize the panels properly. *(Found by Yixin Liu)*
- [ ] **Bypass permission enabled but tool calls still require manual approval**: When bypass permission is toggled on, tool calls still prompt for manual approval instead of executing automatically. *(Found by Yixin Liu)*
- [ ] **UI tags sometimes never fade out**: Certain UI tags/badges persist indefinitely and never disappear or fade out as expected. *(Found by Yixin Liu)*

## Improvements

- [ ] **Refactor `stage-skill-map.json` to reduce noise in skill suggestions**: Current `base` arrays are too large (up to 9 skills), causing every task to receive nearly all skills regardless of `taskType`. `byTaskType` adds almost no new information since most entries already appear in `base`. Proposed changes:
  - Shrink `base` to 1–2 truly universal skills per stage
  - Make `byTaskType` the primary skill assignment channel (2–4 focused skills each)
  - Move domain-specific skills (`biorxiv-database`, `bioinformatics-init-analysis`, `academic-researcher`) out of the global map — assign them at the `research_brief.json` blueprint level per project type instead
  - Reconsider `research-grants` placement (currently in `publication.writing`, but grant writing is closer to ideation)
  - Goal: a `delivery` task should suggest ~2 skills, not 9 *(Found by Yixin Liu)*
