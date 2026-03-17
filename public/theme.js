(function () {
  function applyTheme(theme, switcher) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (switcher) {
      switcher.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }
  }

  window.initializeThemeSwitcher = function initializeThemeSwitcher(buttonId) {
    var switcher = document.getElementById(buttonId);
    if (!switcher) return;

    var preferredTheme = localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    applyTheme(preferredTheme, switcher);

    switcher.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark', switcher);
    });
  };
})();
