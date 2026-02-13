# Specification

## Summary
**Goal:** Build a responsive single-page “Eden” website that communicates a peaceful mission and includes a persistent “Messages of Peace” guestbook.

**Planned changes:**
- Create a responsive single-page layout with a hero, “About Eden”, “How Eden Brings Peace”, guestbook section, and footer using polished English copy.
- Apply a coherent peaceful visual theme (calm palette, typography, spacing) consistently across all sections.
- Implement a guestbook UI: submit form (optional name, required message with max-length validation) and a latest-messages list that updates without full page refresh.
- Implement a Motoko backend API to add entries and list entries (reverse-chronological) with timestamps, with state persisted across upgrades.
- Add and reference generated static assets for a hero image and an Eden mark/logo in the UI.

**User-visible outcome:** Visitors can read about Eden’s peace mission, see a calm themed landing page, and submit/view recent “Messages of Peace” that persist over time.
