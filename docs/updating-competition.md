# Update the competition schedule

Edit `public/data/competition.json` during development. The build copies it unchanged to `dist/data/competition.json`.

After deployment, replace `data/competition.json` in the website's deployed directory. No rebuild is required. Visitors receive the updated schedule when they reload the page. The browser requests this file with caching disabled; if your hosting/CDN overrides caching, configure this path to bypass caching or purge it after uploading.

The file contains only:
- `season`: season displayed above the schedule.
- `events`: Chinese/English locations, a plain `date` string (such as `2027.02.20–02.21`), and an optional `finals` flag.

Replace `images/competition/competition-schedule.jpg` on the deployed website to update the detailed schedule image separately. Its development source is `public/images/competition/competition-schedule.jpg`.

Keep `public/data/competition.json` in sync with deployed edits so a future build does not overwrite them with an older schedule. Keep the same JSON structure and valid JSON syntax.
