// GitHub Pages redirects unknown paths through 404.html to the app entry point.
// Restore the requested URL before Vue Router starts, without another request.
(() => {
  const params = new URLSearchParams(location.search)
  const route = params.get('__taoli_route')
  if (route) {
    const target = new URL(route, location.origin)
    if (target.origin === location.origin) {
      history.replaceState(null, '', target.pathname + target.search + target.hash)
    }
  }
  // Keep previously shared hash-route links working.
  if (location.hash.startsWith('#/')) {
    const base = new URL(document.currentScript.src).pathname.replace(/restore-route\.js$/, '')
    history.replaceState(null, '', base + location.hash.slice(2))
  }
})()
