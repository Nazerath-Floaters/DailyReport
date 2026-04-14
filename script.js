const recentActivityItems = [
  {
    time: '2026-04-14 6:00 AM ET',
    title: 'Daily report promoted Weekly Reporting Rescue as the first offer',
    detail: 'The stronger editorial pass kept the best sellable-offers scout, created a proof-sheet deep dive, and moved the site archive to Issue 003.'
  },
  {
    time: '2026-04-14 6:00 AM ET',
    title: 'Operator HQ gained a scout-review panel',
    detail: 'The homepage now shows which local-model passes were actually useful, so Micah can scan the field reports without reopening each research note.'
  },
  {
    time: '2026-04-14 2:30 AM ET',
    title: 'Self Improvement Hour added a safer state update path',
    detail: 'A local updater script now reduces hand-edited JSON friction and the top freshness pill was fixed so stale state is easier to spot.'
  },
  {
    time: '2026-04-14 12:05 AM ET',
    title: 'Charter Automation Hour refreshed work visibility',
    detail: 'Rechecked the intake inbox, confirmed no new intake emails, refreshed the cockpit notes, and improved focused-hour outcome visibility.'
  },
  {
    time: '2026-04-13 11:03 PM ET',
    title: 'Operator HQ retrieval pass created a stable map note',
    detail: 'The site direction, source lanes, and next upgrades now have one retrieval anchor instead of drifting across several notes.'
  }
];

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

function renderRecentActivity() {
  const container = document.getElementById('recent-activity-list');
  if (!container) return;

  container.innerHTML = recentActivityItems.map((item) => `
    <article class="recent-activity-item">
      <p class="recent-activity-time">${item.time}</p>
      <h4>${item.title}</h4>
      <p>${item.detail}</p>
    </article>
  `).join('');
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

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setExpanded(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) {
      setExpanded(false);
    }
  });
}

updateEasternClock();
renderRecentActivity();
setupMobileNav();
setInterval(updateEasternClock, 30000);
