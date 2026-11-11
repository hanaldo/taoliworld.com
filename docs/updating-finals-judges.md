# Updating finals judges

Replace `data/finals-judges.json` on the deployed website without rebuilding. Locally, edit `public/data/finals-judges.json`. Portraits live in `public/images/judges/finals/` and deploy to `images/judges/finals/`.

The JSON is a list in display order. Each judge has:
- `id`: unique, stable URL-friendly identifier.
- `photo`: image path relative to the website root.
- `zh` and `en`: each contains `name`, `role`, and `bio` (a list of plain-text paragraphs).

Preserve valid UTF-8 JSON. Refresh the page after uploading; purge any hosting/CDN cache if necessary. The app requests the JSON with caching disabled. Images may require a new filename or a cache purge when replaced.