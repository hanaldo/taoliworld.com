# GitHub Pages and clean URLs

Vue Router uses normal paths such as `/contact` and `/news/festival-2024`.

## Build for your address

For a custom domain or a user/organization site at `https://USERNAME.github.io/`:

```sh
npm run build
```

For a project site at `https://USERNAME.github.io/REPOSITORY/`:

```sh
SITE_BASE=/REPOSITORY/ npm run build
```

Replace REPOSITORY with the exact repository name. In GitHub Actions, set `SITE_BASE` on the build step. The base must begin and end with `/`.

Publish the entire contents of `dist`, including `404.html` and `restore-route.js`. Do not upload the unbuilt source as the website.

## How direct links work

GitHub Pages cannot rewrite application paths to index.html. The generated `404.html` redirects a direct visit or refresh to the app entry point with the requested path in a temporary query parameter. `restore-route.js` restores the clean URL before Vue Router starts. Normal navigation requires no redirect. Existing `/#/…` links are also converted to clean URLs.

The initial deep-link request still receives GitHub Pages' HTTP 404 response before redirecting; this workaround is not a server rewrite and has limitations for crawlers and social previews. JavaScript is required.

Content files remain in `data/`, `news/`, and `images/` within the deployed directory. Updating those files does not require rebuilding the app. Changing the deployment base does require a rebuild.
