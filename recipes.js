const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1VOE1i8R2X3B9xgBf9wZ3tAM_iueKT6ShM_7XRvf3cRA/export?format=csv';

let recipes      = [];
let currentSlide = 0;

function init() {
  Papa.parse(SHEET_URL, {
    download: true,
    header:   true,
    complete: function(results) {
      recipes = results.data.map(row => ({
        ...row,
        id:           parseInt(row.id),
        organization: row.organization || 'Triton Kitchen',
        category:     row.category    ? row.category.split(',').map(s => s.trim())    : [],
        ingredients:  row.ingredients ? row.ingredients.split(';').map(s => s.trim()) : [],
        critical:     row.critical    ? row.critical.split(',').map(s => s.trim())    : [],
        steps:        row.steps       ? row.steps.split(';').map(s => s.trim())       : [],
      })).filter(row => row.name);

      renderSlider();
      renderRecipes();
      showSlide(0);
    }
  });
}

function renderSlider() {
  const container = document.getElementById('slider-container');
  container.innerHTML = recipes.slice(0, 3).map((r) => `
    <div class="slide h-full flex-col md:flex-row w-full">
      <div class="w-full md:w-1/2 p-12 flex flex-col justify-center">
        <span class="badge badge-yellow w-fit mb-4">Featured Recipe</span>
        <h2 class="text-5xl md:text-6xl mb-4 leading-tight">${r.name}</h2>
        <p class="text-[var(--blue-dark)] mb-6 text-lg leading-relaxed">${r.summary}</p>
        <div class="flex gap-4 mb-8">
          <span class="badge badge-blue">⏱ ${r.time}</span>
          <span class="badge badge-blue">📊 ${r.difficulty}</span>
        </div>
        <button
          onclick="openModal(${r.id})"
          class="w-fit bg-[var(--blue-deep)] text-white px-8 py-3 rounded-full hover:bg-[var(--blue-dark)] transition font-bold uppercase text-xs tracking-widest">
          View Full Recipe
        </button>
      </div>
      <div class="w-full md:w-1/2 h-full p-8">
        <img src="${r.image}" class="w-full h-full object-cover rounded-[20px] shadow-lg" alt="${r.name}">
      </div>
    </div>
  `).join('');
}

function renderRecipes(filter = 'all') {
  const grid = document.getElementById('recipe-grid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? recipes : recipes.filter(r => r.category.includes(filter));

  filtered.forEach(recipe => {
    grid.innerHTML += `
      <article class="recipe-card shadow-sm cursor-pointer" onclick="openModal(${recipe.id})">
        <div class="h-56 overflow-hidden">
          <img src="${recipe.image}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
        </div>
        <div class="p-6">
          <span class="text-[10px] text-[var(--muted)] font-bold uppercase tracking-widest block mb-1">${recipe.organization}</span>
          <h3 class="text-2xl mb-3">${recipe.name}</h3>
          <div class="flex gap-2 mb-4">
            <span class="badge badge-blue">${recipe.difficulty}</span>
            <span class="badge badge-blue">${recipe.time}</span>
          </div>
          <p class="text-sm text-[var(--muted)] mb-6 line-clamp-2">${recipe.summary}</p>
          ${recipe.critical.length > 0 ? `
            <div class="badge badge-critical w-full text-center">Contains: ${recipe.critical.join(', ')}</div>
          ` : ''}
        </div>
      </article>
    `;
  });
}

function filterRecipes(cat) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderRecipes(cat);
}

function openModal(id) {
  const r = recipes.find(rec => rec.id === id);
  document.getElementById('modal-content').innerHTML = `
    <span class="badge badge-blue mb-2">${r.organization}</span>
    <h2 class="text-4xl mb-6">${r.name}</h2>
    <div class="grid md:grid-cols-2 gap-10">
      <div>
        <h4 class="font-bold uppercase tracking-widest text-[10px] text-[#8a7a5a] mb-4 pb-2 border-b border-[var(--border)]">Ingredients</h4>
        <ul class="space-y-2 text-sm">
          ${r.ingredients.map(i => `<li class="flex items-start gap-2"><span>•</span> ${i}</li>`).join('')}
        </ul>
      </div>
      <div>
        <h4 class="font-bold uppercase tracking-widest text-[10px] text-[#8a7a5a] mb-4 pb-2 border-b border-[var(--border)]">Instructions</h4>
        <ol class="space-y-4 text-sm list-decimal pl-4">
          ${r.steps.map(s => `<li>${s}</li>`).join('')}
        </ol>
      </div>
    </div>
  `;
  document.getElementById('recipe-modal').classList.remove('hidden');
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;
  slides.forEach(s => s.classList.remove('active'));
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function changeSlide(n) { showSlide(currentSlide + n); }

function closeModal() { document.getElementById('recipe-modal').classList.add('hidden'); }

// Boot
init();
setInterval(() => changeSlide(1), 8000);