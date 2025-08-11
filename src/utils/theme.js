// Theme utility for toggling light/dark mode using data-theme attribute
export function setTheme(mode = 'light') {
  document.documentElement.setAttribute('data-theme', mode);
}

export function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  setTheme(current === 'light' ? 'dark' : 'light');
}
