// Set up the initial theme based on system preference
const body = document.body
const prefersDarkScheme =
  window && window.matchMedia && window.matchMedia('prefers-color-scheme: dark')
if (prefersDarkScheme) {
  body.classList.add('dark-theme')
} else {
  body.classList.add('dark-theme')
}
