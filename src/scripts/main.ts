
const htmlElem = document.querySelectorAll('html')[0];

function toggleTheme() {
  if (!htmlElem) return;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    htmlElem.classList.add('dark');
  } else {
    htmlElem.classList.add('light');
  }
  const themeToggle = document.querySelectorAll('.theme-toggle')[0];
  if (!themeToggle) return;
  themeToggle.addEventListener('click', () => {
    if (htmlElem.classList.contains('dark')) {
      htmlElem.classList.remove('dark');
      htmlElem.classList.add('light');
    } else if (htmlElem.classList.contains('light')) {
      htmlElem.classList.remove('light');
      htmlElem.classList.add('dark');
    }
  })
}