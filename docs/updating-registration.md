# Registration buttons

Edit `public/data/registration.json` locally, or replace `data/registration.json` on the deployed website. No rebuild is needed for deployed file replacements.

- `url`: HTTPS registration website link.
- `zh.label` and `en.label`: the Chinese and English text shared by every registration button.
- `zh.title`, `en.title`, `zh.description`, and `en.description`: the heading and explanation on the home page registration card.

This file controls registration links in the announcement banner, desktop and mobile navigation, home page hero, competition card, guidelines page, and contact section/page. All use the same URL and button label. If the destination changes, also update the website name in both descriptions.

Keep valid UTF-8 JSON. The site loads this file once per visit; refresh the page to load changes. Purge any hosting/CDN cache if necessary. The deployed file is `data/registration.json` (there is no `public` folder in the build output).
