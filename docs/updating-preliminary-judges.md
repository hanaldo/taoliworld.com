# Updating preliminary judges

Replace `data/preliminary-judges.json` on the deployed website without rebuilding. The project copy is `public/data/preliminary-judges.json`. Portraits live in `public/images/judges/preliminary/`.

The file contains the program `intro` in Chinese and English and one `judges` list. Each person appears once:

- `id`: stable unique identifier.
- `name`: Chinese (`zh`) and English (`en`) display names.
- `photo`: path relative to the site root; use an empty string if unavailable.
- `years`: all judging seasons, newest first. The filter options are generated from these values.
- `bio`: paragraphs in their original language, displayed as plain text in the overlay.
- `source`: the original biography URL, retained for reference.
- `aliases` (optional): alternative names included in search.

Add a season to an existing person's `years` instead of adding a duplicate entry. Judges are displayed by number of seasons, from most to least. List order breaks ties. Keep valid UTF-8 JSON. Refresh the page after replacing it; purge hosting/CDN caches if necessary.
