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

  const setExpanded = (expanded) => {
    nav.classList.toggle('is-open', expanded);
    toggle.setAttribute('aria-expanded', String(expanded));
  };

  toggle.addEventListener('click', () => {
    setExpanded(!nav.classList.contains('is-open'));
  });

  nav.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => setExpanded(false));
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
