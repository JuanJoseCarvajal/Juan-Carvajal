(function () {
  function savedTheme() { try { return localStorage.getItem('theme'); } catch (_) { return null; } }
  var theme = savedTheme() === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme;
  window.initializeThemeSwitcher = function (id) {
    var button = document.getElementById(id);
    if (!button) return;
    button.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
    button.addEventListener('click', function () {
      var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      button.setAttribute('aria-pressed', String(next === 'dark'));
      try { localStorage.setItem('theme', next); } catch (_) {}
    });
  };
})();
