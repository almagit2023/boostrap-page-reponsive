const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-bs-theme');

  if (currentTheme === 'light') {
    body.setAttribute('data-bs-theme', 'dark');
    toggleButton.textContent = 'Switch to Light Theme';
  } else {
    body.setAttribute('data-bs-theme', 'light');
    toggleButton.textContent = 'Switch to Dark Theme';
  }
});