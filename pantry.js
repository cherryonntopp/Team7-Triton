
const items = [
  { name: 'Green Onion',                           detail: '5 bunches',               cat: 'produce',   source: 'Sunrise' },
  { name: 'Bell Pepper (Green)',                   detail: '6 units',                 cat: 'produce',   source: 'Sunrise' },
  { name: 'Yukon Gold Potatoes',                   detail: '5 bags',                  cat: 'produce',   source: 'Sunrise' },
  { name: 'Zucchini (Medium)',                     detail: '6 units',                 cat: 'produce',   source: 'Sunrise' },
  { name: 'Mushrooms (Medium)',                    detail: '6 units',                 cat: 'produce',   source: 'Sunrise' },
  { name: 'Yellow Onion (Jumbo)',                  detail: '50 lb bag, 4–6 cs',       cat: 'produce',   source: 'Sysco' },
  { name: 'Banana (Fresh)',                        detail: '40 lb, 5 cs',             cat: 'produce',   source: 'Sysco' },
  { name: 'Apple Fuji (Fancy)',                    detail: '113 ct, 5 cs',            cat: 'produce',   source: 'Sysco' },
  { name: 'Carrot (Fresh Jumbo)',                  detail: '25 lb, 4–6 cs',           cat: 'produce',   source: 'Sysco' },
  { name: 'Organic Low-Fat 1% Milk',               detail: '18/8 oz, 14 cs',          cat: 'dairy',     source: 'Sysco' },
  { name: 'Yogurt (Vanilla Strawberry)',           detail: '48/4 oz, 3–4 cs',         cat: 'dairy',     source: 'Sysco' },
  { name: 'Almond Milk (Unsweetened)',             detail: '32 fl oz, 8 packs of 12', cat: 'dairy',     source: 'Costco' },
  { name: 'Oat Milk (Organic)',                    detail: '32 fl oz, 12 packs of 6', cat: 'dairy',     source: 'Costco' },
  { name: 'Tofu (Fresh Firm)',                     detail: '12/14 oz, 10–14 cs',      cat: 'protein',   source: 'Sysco' },
  { name: 'Garbanzo Beans (Canned)',               detail: '12/15.5 oz, 6–14 cs',     cat: 'protein',   source: 'Sysco' },
  { name: 'Peanut Butter (Creamy)',                detail: '12/16.3 oz, 5 cs',        cat: 'protein',   source: 'Sysco' },
  { name: 'SPAM (Less Sodium)',                    detail: '12 oz, 10 packs of 8',    cat: 'protein',   source: 'Costco' },
  { name: 'Kirkland Protein Bars (PB Choc Chip)', detail: '1.41 oz, 6 packs of 42',  cat: 'protein',   source: 'Costco' },
  { name: 'Pasta — Spaghetti',                     detail: '1 lb, 2–4 cs',            cat: 'grains',    source: 'Sysco' },
  { name: 'Pasta — Fettuccine',                    detail: '1 lb, 2–4 cs',            cat: 'grains',    source: 'Sysco' },
  { name: 'Pasta — Penne Rigate',                  detail: '16 oz, 1–3 cs',           cat: 'grains',    source: 'Sysco' },
  { name: 'Pasta — Rigatoni',                      detail: '16 oz, 2 cs',             cat: 'grains',    source: 'Sysco' },
  { name: 'Couscous (Medium)',                     detail: '10 oz, 3 cs',             cat: 'grains',    source: 'Sysco' },
  { name: 'Flour Tortillas (6 in)',                detail: '12 ct, 2–5 cs',           cat: 'grains',    source: 'Sysco' },
  { name: 'Instant Oatmeal (Variety)',             detail: '1.37 oz, 2 cs',           cat: 'grains',    source: 'Sysco' },
  { name: 'Bibigo Sticky Rice Bowls',              detail: '7.4 oz, 10 packs of 12',  cat: 'grains',    source: 'Costco' },
  { name: 'Mac & Cheese Cups',                     detail: '2.05 oz, 6 packs of 12',  cat: 'grains',    source: 'Costco' },
  { name: 'Cup Noodles — Chicken',                 detail: '2.5 oz, 4 packs of 24',   cat: 'grains',    source: 'Costco' },
  { name: 'Cup Noodles — Shrimp',                  detail: '2.5 oz, 4 packs of 24',   cat: 'grains',    source: 'Costco' },
  { name: 'Cup Noodles — Beef',                    detail: '2.5 oz, 4 packs of 24',   cat: 'grains',    source: 'Costco' },
  { name: 'Tonkotsu Ramen (Nongshim)',             detail: '3.56 oz, 4 packs of 6',   cat: 'grains',    source: 'Costco' },
  { name: 'Tonkotsu Ramen Broth',                  detail: '32 fl oz, 12 packs of 4', cat: 'grains',    source: 'Costco' },
  { name: "Welch's Fruit Snacks",                  detail: '0.8 oz, 2 packs of 90',   cat: 'snacks',    source: 'Costco' },
  { name: "Chester's Flamin' Hot Fries",           detail: '1 oz, 4 packs of 50',     cat: 'snacks',    source: 'Costco' },
  { name: 'Takis Fuego Tortilla Chips',            detail: '1 oz, 2 packs of 50',     cat: 'snacks',    source: 'Costco' },
  { name: "Cheetos Flamin' Hot",                   detail: '1 oz, 2 packs of 50',     cat: 'snacks',    source: 'Costco' },
  { name: 'Kettle Chips (Variety)',                detail: '1.5 oz, 4 packs of 36',   cat: 'snacks',    source: 'Costco' },
  { name: 'RITZ PB Cracker Sandwiches',            detail: '1.38 oz, 4 packs of 40',  cat: 'snacks',    source: 'Costco' },
  { name: 'Nature Valley Fruit & Nut Bars',        detail: '1.2 oz, 6 packs of 48',   cat: 'snacks',    source: 'Costco' },
  { name: 'Nature Valley Sweet & Salty',           detail: '1.2 oz, 6 packs of 48',   cat: 'snacks',    source: 'Costco' },
  { name: 'Nature Valley Wafer Bars',              detail: '1.30 oz, 4 packs of 28',  cat: 'snacks',    source: 'Costco' },
  { name: "Kar's Trail Mix (Sweet & Salty)",       detail: '2 oz, 10 packs of 24',    cat: 'snacks',    source: 'Costco' },
  { name: 'Trail Mix (Summit)',                    detail: '1.5 oz, 2 cs',            cat: 'snacks',    source: 'Sysco' },
  { name: 'Nutri-Grain Breakfast Bars (Variety)',  detail: '1.3 oz, 6 packs of 64',   cat: 'snacks',    source: 'Costco' },
  { name: 'Microwave Popcorn (Butter)',            detail: '3.5 oz, 5–6 cs',          cat: 'snacks',    source: 'Sysco' },
  { name: 'Bon Appétit Banana Bread Slice',        detail: '4 oz, 6 packs of 8',      cat: 'snacks',    source: 'Costco' },
  { name: 'Bon Appétit Danish (Variety)',          detail: '3 oz, 10 packs of 18',    cat: 'snacks',    source: 'Costco' },
  { name: 'Cereal — Cocoa Puffs (25% less sugar)',detail: '96 bowlpaks, 1 cs',        cat: 'snacks',    source: 'Sysco' },
  { name: "Cereal — Reese's Puffs",               detail: '96 bowlpaks, 1 cs',        cat: 'snacks',    source: 'Sysco' },
  { name: 'Cereal — Cinnamon Toast Crunch',        detail: '96 bowlpaks, 1 cs',        cat: 'snacks',    source: 'Sysco' },
  { name: 'Cereal — Cheerios (Gluten Free)',       detail: '96/1 oz, 1 cs',           cat: 'snacks',    source: 'Sysco' },
  { name: 'Cereal — Assorted Variety Cup Pak',     detail: '60 ct, 2 cs',             cat: 'snacks',    source: 'Sysco' },
  { name: 'Applesauce Pouches (Organic)',          detail: '3.17 oz, 8 packs of 24',  cat: 'pantry',    source: 'Costco' },
  { name: 'Mandarin Oranges (Dole)',               detail: '4 oz, 10 packs of 16',    cat: 'pantry',    source: 'Costco' },
  { name: 'Mandarin Orange Juice Cups',            detail: '4 oz, 3 cs',              cat: 'pantry',    source: 'Sysco' },
  { name: 'Chicken Soup Stock (Organic)',          detail: '32 fl oz, 12 packs of 6', cat: 'pantry',    source: 'Costco' },
  { name: 'Soup — Tomato (Lo-Sodium)',             detail: '7.25 oz, 3–5 cs',         cat: 'pantry',    source: 'Sysco' },
  { name: 'Soup — Chicken Noodle',                 detail: '7.25 oz, 4 cs',           cat: 'pantry',    source: 'Sysco' },
  { name: 'Soup — Cream of Mushroom',              detail: '7.25 oz, 1–2 cs',         cat: 'pantry',    source: 'Sysco' },
  { name: 'Soy Sauce (Kikkoman)',                  detail: '5 oz bottle, 6–8 cs',     cat: 'pantry',    source: 'Sysco' },
  { name: 'Hot Sauce (Tapatio)',                   detail: '5 oz, 3 cs',              cat: 'pantry',    source: 'Sysco' },
  { name: 'El Monterey Burritos (Variety)',        detail: '30 ct, 4 packs',          cat: 'pantry',    source: 'Costco' },
  { name: 'Hot Pockets (Pepperoni Pizza)',         detail: '4.5 oz, 8 packs of 20',   cat: 'pantry',    source: 'Costco' },
  { name: 'Apple Juice 100%',                      detail: '125 ml, 7–8 cs',          cat: 'beverages', source: 'Sysco' },
  { name: 'OJ + Tangerine 100%',                  detail: '125 ml, 7–8 cs',          cat: 'beverages', source: 'Sysco' },
];

const categories = [
  { key: 'produce',   label: 'Fresh Produce',                 img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=80&h=80&fit=crop&auto=format' },
  { key: 'dairy',     label: 'Dairy & Milk Alternatives',     img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=80&h=80&fit=crop&auto=format' },
  { key: 'protein',   label: 'Protein',                       img: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=80&h=80&fit=crop&auto=format' },
  { key: 'grains',    label: 'Grains, Pasta & Rice',          img: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=80&h=80&fit=crop&auto=format' },
  { key: 'snacks',    label: 'Snacks & Cereal',               img: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=80&h=80&fit=crop&auto=format' },
  { key: 'pantry',    label: 'Pantry Staples & Canned Goods', img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=80&h=80&fit=crop&auto=format' },
  { key: 'beverages', label: 'Beverages',                     img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=80&h=80&fit=crop&auto=format' },
];

const sourceColor = { 'Costco': '#e07a40', 'Sysco': '#5a9aba', 'Sunrise': '#4a9a6a' };
let activeFilter = 'all';

function updateCounts() {
  const counts = {};
  categories.forEach(c => { counts[c.key] = 0; });
  items.forEach(i => { counts[i.cat] = (counts[i.cat] || 0) + 1; });
  document.getElementById('fc-all').textContent = items.length;
  Object.keys(counts).forEach(k => {
    const el = document.getElementById('fc-' + k);
    if (el) el.textContent = counts[k];
  });
}

function render() {
  const container = document.getElementById('items-container');
  const filtered   = activeFilter === 'all' ? items : items.filter(i => i.cat === activeFilter);
  const activeCats = activeFilter === 'all' ? categories : categories.filter(c => c.key === activeFilter);

  container.innerHTML = activeCats.map(cat => {
    const catItems = filtered.filter(i => i.cat === cat.key);
    if (catItems.length === 0) return '';
    return `
      <div class="category-section">
        <div class="cat-header">
          <img class="cat-thumb" src="${cat.img}" alt="${cat.label}" loading="lazy" />
          <span class="cat-title">${cat.label}</span>
          <span class="cat-count">${catItems.length} items</span>
        </div>
        <div class="item-grid">
          ${catItems.map(item => `
            <div class="item-card">
              <div class="item-name">${item.name}</div>
              <div class="item-meta">${item.detail}</div>
              <div class="item-footer">
                <span class="item-source">${item.source}</span>
                <span class="dot" style="background:${sourceColor[item.source]};"></span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>`;
  }).join('');
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    activeFilter = btn.dataset.filter;
    render();
  });
});

updateCounts();
render();
