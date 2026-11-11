# Updating news

Each story has one Markdown file in `public/news/`. Its title, date, summary, cover, category, and full article are all in that file. `index.json` contains only the filenames to publish, in your desired display order. The news page follows this order, and the home page shows the first three stories. Reorder the filenames to change the display order.

These instructions and the story template are deployed in `docs/`. In the source project, they are in `public/docs/`.

## Add a story

1. Copy `public/docs/story-template.md` into `public/news/` and give it a filename using English letters, numbers, hyphens, or underscores, ending in `.md`.
2. Put its images in `public/images/news/<story-name>/` and update the image paths in the Markdown file.
3. Edit the metadata between the `---` lines and the article below it. No `id` field is needed: the filename without `.md` is always the article ID. For example, `festival-2024.md` uses `/news/festival-2024`. Keep filenames stable, because renaming a file changes its article link.
4. Add the filename to `public/news/index.json`, for example `["festival-2024.md", "my-new-story.md"]`. Do not put story details in the index.
5. Upload the images, then the Markdown file, then the index to the deployed website. Deployment paths are `images/news/` and `news/` (without `public/`). No rebuild is needed.

To edit an existing story, replace its Markdown file. To unpublish one, remove its filename from the index. The home page fetches only the first three stories; the news page fetches all listed stories. Opening an already loaded story reuses its content until the browser page is refreshed. Listings request fresh content when they load; if your hosting service overrides caching, clear its cache after uploading.

## Metadata and languages

- `date`: publication date in `YYYY-MM-DD` format. This date is displayed on the story and does not affect its position.
- `category`: `festival`, `competition`, or `awards`, matching the existing filters.
- `title`, `summary`, and `tag`: use `zh` and `en` entries, or a single text string for both languages.
- `cover`: image path relative to this Markdown file, for example `../images/news/my-story/cover.jpg`.
- `<!-- lang: zh -->` and `<!-- lang: en -->` separate the two article versions. A missing translation falls back to the available language. For a single-language article, omit the markers.

Use headings (`##`), bold (`**text**`), lists, quotes, links, and images with normal Markdown syntax. Raw HTML is disabled. Consecutive image lines form a two-column gallery on desktop and stack on mobile; add a blank line between images to display them separately.