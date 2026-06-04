/* ============================================================
   Food4Tritons — Clubs Page Script
   ============================================================ */

const allEvents = {
  '2025-4-2':  [{ name: 'Churn and chill — Triton Foodie',       time: 'Sun God Lawn',       loc: 'Triton Foodie',    col: '#a8c87a' }],
  '2025-4-7':  [{ name: 'Spinach ravioli — Gourmet Muir',        time: '6:00 – 9:00 PM',     loc: 'Half Dome Lounge', col: '#7ab8d8' }],
  '2025-4-9':  [{ name: 'Dumpling cooking event — Triton Foodie', time: '2:00 – 5:00 PM',     loc: 'FanFan',           col: '#a8c87a' }],
  '2025-4-14': [{ name: 'Cinnamon rolls — Gourmet Muir',         time: '6:00 – 9:00 PM',     loc: 'Half Dome Lounge', col: '#7ab8d8' }],
  '2025-4-21': [{ name: 'Study jam & collab cook — Gourmet Muir',time: '6:00 – 9:00 PM',     loc: 'Half Dome Lounge', col: '#7ab8d8' }],
  '2025-4-28': [{ name: 'Pad thai night — Gourmet Muir',         time: '6:00 – 9:00 PM',     loc: 'Half Dome Lounge', col: '#7ab8d8' }],
  '2025-4-30': [{ name: 'Matcha pop-up collab — Triton Foodie',  time: '11:00 AM – 4:00 PM', loc: 'Library Walk',     col: '#a8c87a' }],
  '2025-5-5':  [{ name: 'Chicken gumbo — Gourmet Muir',          time: '6:00 – 9:00 PM',     loc: 'Half Dome Lounge', col: '#7ab8d8' }],
  '2025-5-12': [{ name: 'Tang yuan workshop — Triton Foodie',    time: '3:00 – 5:30 PM',     loc: 'Price Center',     col: '#a8c87a' }],
  '2025-5-19': [{ name: 'Chicken biryani — Gourmet Muir',        time: '6:00 – 9:00 PM',     loc: 'Half Dome Lounge', col: '#7ab8d8' }],
};

let viewYear  = 2025;
let viewMonth = 3;
let selDay    = null;

const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function buildCalendar() {
  document.getElementById('cal-month-label').textContent = monthNames[viewMonth] + ' ' + viewYear;
  const grid = document.getElementById('cal-grid');
  grid.innerHTML = '';

  ['S','M','T','W','T','F','S'].forEach(d => {
    const h = document.createElement('div');
    h.className = 'cal-dh';
    h.textContent = d;
    grid.appendChild(h);
  });

  const firstDay  = new Date(viewYear, viewMonth, 1).getDay();
  const totalDays = new Date(viewYear, viewMonth + 1, 0).getDate();
  const today     = new Date();

  for (let i = 0; i < firstDay; i++) grid.appendChild(document.createElement('div'));

  for (let d = 1; d <= totalDays; d++) {
    const cell = document.createElement('div');
    cell.className = 'cal-cell';
    cell.textContent = d;

    const key     = `${viewYear}-${viewMonth + 1}-${d}`;
    const isToday = d === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();
    const hasEv   = allEvents[key];

    if (selDay === d && selDay !== null) cell.classList.add('sel');
    else if (isToday) cell.classList.add('today');
    else if (hasEv)   cell.classList.add('ev');

    if (hasEv) {
      if (!cell.classList.contains('sel')) {
        const dot = document.createElement('div');
        dot.className = 'ev-dot';
        if (isToday) dot.style.background = '#5a3e00';
        cell.appendChild(dot);
      }
      cell.style.cursor = 'pointer';
      cell.addEventListener('click', () => { selDay = d; buildCalendar(); showEvents(d); });
    }

    grid.appendChild(cell);
  }
}

function showEvents(d) {
  const key    = `${viewYear}-${viewMonth + 1}-${d}`;
  const evs    = allEvents[key] || [];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  document.getElementById('ev-label').textContent = months[viewMonth] + ' ' + d;
  const list = document.getElementById('ev-list');

  if (!evs.length) {
    list.innerHTML = '<div style="font-size:12px; color:var(--muted); padding:6px 0;">Nothing scheduled on this date.</div>';
    return;
  }

  list.innerHTML = evs.map(e => `
    <div class="ev-item" style="border-color:${e.col}; background:${e.col}18;">
      <div class="ev-name">${e.name}</div>
      <div class="ev-meta">${e.time} &nbsp;&middot;&nbsp; ${e.loc}</div>
    </div>`).join('');
}

document.getElementById('prev-btn').addEventListener('click', () => {
  viewMonth--;
  if (viewMonth < 0) { viewMonth = 11; viewYear--; }
  selDay = null;
  buildCalendar();
  document.getElementById('ev-list').innerHTML = '<div style="font-size:12px; color:var(--muted);">Click a highlighted date to see events.</div>';
  document.getElementById('ev-label').textContent = 'Select a date';
});

document.getElementById('next-btn').addEventListener('click', () => {
  viewMonth++;
  if (viewMonth > 11) { viewMonth = 0; viewYear++; }
  selDay = null;
  buildCalendar();
  document.getElementById('ev-list').innerHTML = '<div style="font-size:12px; color:var(--muted);">Click a highlighted date to see events.</div>';
  document.getElementById('ev-label').textContent = 'Select a date';
});

buildCalendar();