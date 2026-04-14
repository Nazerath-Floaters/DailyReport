function updateEasternClock() {
  const clock = document.getElementById('et-clock');
  if (!clock) return;

  const now = new Date();
  const formatted = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  }).format(now);

  clock.textContent = `${formatted} ET`;
}

function setupMobileNav() {
  const nav = document.querySelector('.top-nav');
  const toggle = document.querySelector('.nav-toggle');
  if (!nav || !toggle) return;

  const backdrop = document.createElement('button');
  backdrop.type = 'button';
  backdrop.className = 'nav-backdrop';
  backdrop.setAttribute('aria-label', 'Close navigation');
  document.body.appendChild(backdrop);

  const setExpanded = (expanded) => {
    nav.classList.toggle('is-open', expanded);
    document.body.classList.toggle('nav-open', expanded);
    toggle.setAttribute('aria-expanded', String(expanded));
  };

  toggle.addEventListener('click', () => {
    setExpanded(!nav.classList.contains('is-open'));
  });

  backdrop.addEventListener('click', () => setExpanded(false));

  nav.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => setExpanded(false));
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setExpanded(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
      setExpanded(false);
    }
  });
}

updateEasternClock();
setupMobileNav();
setInterval(updateEasternClock, 30000);
