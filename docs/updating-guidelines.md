# Updating the guidelines

Replace `data/guidelines.json` on the deployed website to update the Chinese and English guidelines without rebuilding. In this project, edit `public/data/guidelines.json`; the build copies it unchanged to `dist/data/guidelines.json`.

Keep the `zh` and `en` entries, each with `notice`, `preliminary` (`title` and `html`), and `sections` (each with a unique `id`, `title`, and `html`). Keep existing section IDs when editing. The `html` fields contain formatted page content; use trusted text and simple HTML such as paragraphs, lists, emphasis, and links.

Save as valid UTF-8 JSON and refresh the guidelines page after replacing the file. The page requests a fresh copy on each visit. If your hosting service caches files, purge its cache for this file too.
