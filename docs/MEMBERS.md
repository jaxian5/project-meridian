# Project Meridian: member registry

The published site under `docs/` now uses **one source of truth**: `docs/assets/members-data.js`.

## Add a member
1. Upload their portrait to `docs/images/` (optional).
2. Add one object to the `window.MERIDIAN_MEMBERS` array. Keep `slug` unique and URL-safe (lowercase words separated by hyphens). Supply `name`, `role`, `short`, `headline`, `location`, `joined`, `email`, `image` (filename only, or `null`), and `bio` (array of paragraphs).
3. Commit. The homepage and members directory automatically include the new person, the team count changes, and next-member links follow the array order. For new slugs, the automatic profile uses `/members/profile/?member=SLUG`. You do **not** need to create another individual HTML page.

## Update a member
Edit that person's object in `docs/assets/members-data.js`. The homepage, directory, personal profile heading/details/biography and next-member cards use this record whenever JavaScript runs.

## Remove a member
Remove their object. Roster and next-member cards update automatically. For older members with separate historical HTML pages, remove or redirect the obsolete page separately to prevent an old direct URL remaining online.

## Notes
- The current 12 original profile URLs remain intact. They use the shared registry to synchronize visible profile data in the browser.
- Existing HTML remains as a progressive fallback if JavaScript is unavailable. This means fallback HTML and search-engine metadata are **not automatically rebuilt** from the registry. The shared registry governs the JavaScript-enabled published experience; for complete static/SEO synchronization, introduce a prepublish generator in a later iteration.
- Don't edit `src/lib/content.ts` expecting the GitHub Pages site to change. The repository contains a separate React app; the root `index.html` redirects to the `docs/` static site.
- Keep image files committed and check spelling and capitalization. Missing images show broken images; using `null` instead displays initials.
