# Registration card

Edit `public/data/registration.json` locally, or replace `data/registration.json` on the deployed website. No rebuild is needed for deployed file replacements.

- `url`: HTTPS registration website link.
- `zh` and `en`: Chinese and English `title`, `description`, and link `label`.

This file controls the home page registration card only. If the destination changes, also update the website name in both descriptions. Keep valid UTF-8 JSON. Refresh the home page to load changes; purge any hosting/CDN cache if necessary.
