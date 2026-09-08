# Reframe and repair the case studies

## Case-study copy
- Keep the current three case-study titles, but rewrite them in sentence case:
  - “Legacy app rebuilt from the inside out”
  - “Turning a fragmented integration into a repeatable playbook”
  - “Getting a two-year-delayed MVP out the door”
- Replace each study’s summary, metrics, problem, decision/action, outcome, and tools with the corresponding wording from the attached HTML reference.
- Preserve the portfolio’s current blue-and-white color system and existing typography rather than adopting the reference file’s colors or fonts.

## Formatting
- Keep the editorial case-study structure, but use the reference’s clearer labels: “The real problem,” “The call I made,” and “What it produced.”
- Remove title-case capitalization from case-study headings and ensure the long copy remains readable on desktop and mobile.
- Retain the compact metric strip, two-column narrative on larger screens, single-column mobile layout, outcome panel, and tool tags with consistent spacing.

## Image compatibility
- Serve the headshot and all three Suiteable showcase images from root-relative paths in the public folder so they resolve on ordinary HTML hosting and Vercel.
- Replace platform-specific or imported image URLs with paths such as `/marya-headshot.png` and `/suiteable-…` in every image `src`.
- Verify every displayed image returns successfully and renders in both desktop and mobile views.

## Verification
- Check the updated case studies visually at desktop and mobile sizes for capitalization, spacing, overflow, and legibility.
- Confirm the headshot and each Suiteable image load directly from their final root-relative URLs with no broken requests.
- Run the project’s automated validation after the edits.
