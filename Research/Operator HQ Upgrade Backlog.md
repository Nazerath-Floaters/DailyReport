# Operator HQ Upgrade Backlog

## Purpose
Collect improvements that should move the Daily Report website toward a true one-stop operator home.

## Current direction
Turn the daily report site into **Nazerath Operator HQ**:
- one polished front door
- daily brief archive
- mission state visibility
- operator calendar rhythm
- cockpit and business lanes
- playful but honest activity visuals

## Immediate moves
- [x] Add an Operator HQ homepage section for mission state and operator rhythm.
- [x] Start moving calendar visibility into the site.
- [x] Start moving playful activity visuals into the site.
- [x] Add stronger homepage lane cards for the work cockpit, business lane, and research lane so Operator HQ shows more than archive plus objectives.
- [ ] Deepen the work cockpit block so it exposes live-ish highlights from the current cockpit shell, not just a navigation card.
- [ ] Deepen the business lane block so it can expose the current best offer and buyer path from sellable-offers work.
- [ ] Deepen the research lane block so it can rotate active tracks like Eden, vault linking, and self-improvement.
- [ ] Decide whether objectives should stay a separate page or collapse into the homepage.
- [x] Add a lightweight, honest recent-activity block driven by generated site data.
- [ ] Add a site data export path from Mission Dashboard state files into GitHub Pages-safe assets.
- [ ] Export the homepage's "latest briefing" target and work-freshness labels from source data so those claims stop being hand-pinned.
- [x] Add a homepage scout-review block so the editor pass can show which local-model hours were actually useful without reopening the raw research notes.

## Rules
- Prefer fewer better surfaces.
- Website is the primary front door.
- Obsidian notes are working/source material.
- Do not add fake live state.
- Remove duplication whenever the website can carry the job better.

## Notes from cron passes
### 2026-04-13
- Mission Control, Cockpit, calendar, and homepage ideas should converge here instead of staying split across markdown landing notes.
- The current best visual language is the daily-report site, not Home.base or the office-space prototype.
- Calendar should be shown as rhythm and upcoming lanes, not as the main interaction surface.

### 2026-04-14
- Added an `Operator HQ Map` note so the site direction, source notes, and adjacent lanes have one stable retrieval anchor.
- Homepage should expose lane cards for work cockpit, business lane, and research lane before adding heavier live data wiring.
- Added a lightweight recent-activity block to the homepage using named, honest site activity items instead of vague static prose.
- Added a small homepage work-freshness block that plainly shows the latest intake result, source notes for cockpit reconstruction, and the current Smartsheet caution.
- Best next step after the new recent-activity block is to swap the hand-kept items for a small export from source notes or dashboard state.
- New anti-drift rule: if the homepage says latest, current, or fresh, that claim should either come from exported data or be labeled manual.
- Added a homepage scout-review block during the 6 AM daily report pass so the polished front door now shows which local scouts were worth keeping and which weak repetitions did not earn promotion.
