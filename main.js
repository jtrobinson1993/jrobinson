const htmlElem = document.querySelectorAll('html')[0];
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  htmlElem.classList.add('dark');
} else {
  htmlElem.classList.add('light');
}
document.querySelectorAll('.theme-toggle')[0].addEventListener('click', () => {
  if (htmlElem.classList.contains('dark')) {
    htmlElem.classList.remove('dark');
    htmlElem.classList.add('light');
  } else if (htmlElem.classList.contains('light')) {
    htmlElem.classList.remove('light');
    htmlElem.classList.add('dark');
  }
})