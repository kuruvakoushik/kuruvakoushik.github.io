(() => {
  window.lucide?.createIcons();

  const portrait = document.querySelector('.profile-image');
  if (portrait?.hasAttribute('src')) {
    portrait.addEventListener('load', () => portrait.closest('.portrait-frame')?.classList.add('has-photo'));
    portrait.addEventListener('error', () => portrait.remove(), { once: true });
  }

  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const closeMenu = () => {
    nav?.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', 'Open navigation');
  };
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav?.classList.toggle('open', open);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); }, { passive: true });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  document.querySelector('#year').textContent = new Date().getFullYear();
})();
