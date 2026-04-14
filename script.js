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

updateEasternClock();
setInterval(updateEasternClock, 30000);
