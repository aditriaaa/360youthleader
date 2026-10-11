(function () {
  var page = location.pathname.split('/').pop() || 'index.html';
  if (!/\.html$/.test(page)) page += '.html';

  document.querySelectorAll('.nav-list a').forEach(function (link) {
    if (link.getAttribute('href') === page) link.setAttribute('aria-current', 'page');
  });

  var dropdownToggle = document.querySelector('.dropdown-toggle');
  var dropdown = document.getElementById('tracks-menu');
  if (dropdownToggle && dropdown) {
    if (dropdown.querySelector('a[aria-current="page"]')) dropdownToggle.classList.add('is-current');

    var setOpen = function (open) {
      dropdown.classList.toggle('open', open);
      dropdownToggle.setAttribute('aria-expanded', String(open));
    };
    dropdownToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!dropdown.classList.contains('open'));
    });
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dropdown.classList.contains('open')) {
        setOpen(false);
        dropdownToggle.focus();
      }
    });
  }

  var navToggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('site-menu');
  if (navToggle && menu) {
    navToggle.addEventListener('click', function () {
      var open = !menu.classList.contains('open');
      menu.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.textContent = open ? 'Close' : 'Menu';
    });
  }
})();
