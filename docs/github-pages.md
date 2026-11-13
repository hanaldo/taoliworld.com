# GitHub Pages and clean URLs

Vue Router uses normal paths such as `/contact` and `/news/festival-2024`.

## Build for your address

The default build targets `https://hanaldo.github.io/taoliworld.com/`:

```sh
npm run build
```

Upload the **contents** of `dist` into the GitHub Pages publishing folder, not the `dist` folder itself. Replace the previous `index.html`, `404.html`, `restore-route.js`, and asset files together. Wait for GitHub Pages deployment to finish, then refresh the website.

If you later switch to a custom domain at its root:

```sh
SITE_BASE=/ npm run build
```

For a different project repository, use `SITE_BASE=/REPOSITORY/ npm run build`. In GitHub Actions, set `SITE_BASE` on the build step. The base must begin and end with `/`.

Publish the entire contents of `dist`, including `.nojekyll`, `404.html`, and `restore-route.js`. Do not upload the unbuilt source as the website.

## How direct links work

GitHub Pages cannot rewrite application paths to index.html. The generated `404.html` redirects a direct visit or refresh to the app entry point with the requested path in a temporary query parameter. `restore-route.js` restores the clean URL before Vue Router starts. Normal navigation requires no redirect. Existing `/#/…` links are also converted to clean URLs.

The initial deep-link request still receives GitHub Pages' HTTP 404 response before redirecting; this workaround is not a server rewrite and has limitations for crawlers and social previews. JavaScript is required.

Content files remain in `data/`, `news/`, and `images/` within the deployed directory. Updating those files does not require rebuilding the app. Changing the deployment base does require a rebuild.

## Keep Markdown files unchanged

The build includes an empty `.nojekyll` file. It must be uploaded beside `index.html` in the GitHub Pages publishing folder. This disables Jekyll processing, which would otherwise convert the news Markdown files into HTML and cause the app’s `.md` requests to return 404.

Dotfiles may be hidden in your file browser. If the upload omits it, use GitHub’s Add file → Create new file to create `.nojekyll` beside `index.html`, then commit it. Wait for the Pages deployment to finish before refreshing.
