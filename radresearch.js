function showCategory(categoryId) {
  const categories = document.querySelectorAll('.content');
  categories.forEach(c => c.style.display = 'none');
  document.getElementById(categoryId).style.display = 'flex';
}

    function toggleMemo() {
      const memo = document.getElementById('memoBox');
      const memoUnderline = document.getElementById('memoUnderline');
      const memoTab = document.querySelector('.memo-tab');

      const isOpen = memo.style.display === 'block';
      memo.style.display = isOpen ? 'none' : 'block';
      memoTab.classList.toggle('active', !isOpen);
    }

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const category = item.dataset.category;
    showCategory(category);
  });
});

    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const grid = loader.querySelector('.loader-grid');
    const headerLogo = document.querySelector('.logo-modules');

const types = ['research', 'archive1', 'archive2', 'archive3', 'diffusion1', 'diffusion2', 'diffusion3', 'diffusion4'];
const columns = 32;
const rows = 19;
grid.style.gridTemplateColumns = `repeat(${columns}, 2fr)`;
grid.style.gridAutoRows = `56px`; // Match header logo size

 window.onload = () => {
      const tiles = [];
      const coords = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          coords.push({ x, y });
        }
      }
      coords.sort(() => Math.random() - 0.3);

      coords.forEach(({ x, y }, i) => {
        const tile = document.createElement('img');
        const type = types[Math.floor(Math.random() * types.length)];
        tile.src = `SVG/B_RAD_${type}.svg`;
        tile.className = 'logo-tile';
        tile.style.width = '56px';
        tile.style.height = '56px';
        tile.style.gridColumnStart = x + 3;
        tile.style.gridRowStart = y + 3;
        tile.style.opacity = '0';
        tile.style.animation = `tileFadeIn 0.05s ease forwards`;
        tile.style.animationDelay = `${i * 0.002}s`;
        grid.appendChild(tile);
        tiles.push({ tile, x, y, type });
      });

      setTimeout(() => {
        const topTiles = tiles.filter(t => t.y === 0).slice(0, 3);
        topTiles.forEach(({ tile }) => tile.classList.add('fixed-logo'));

tiles.forEach(({ tile }) => {
  if (!tile.classList.contains('fixed-logo')) {
    const delay = Math.random() * 1000 + 100;
    setTimeout(() => {
      tile.classList.add('tileFadeOut');
    }, delay);
  }
});
}, 3000);
setTimeout(() => {
        const fixedTiles = grid.querySelectorAll('.fixed-logo');
        fixedTiles.forEach(tile => {
          const clone = tile.cloneNode(true);
          clone.classList.add('brand-logo');
          clone.classList.remove('logo-tile');

          // Hover 시 랜덤 변경
          clone.addEventListener('mouseenter', () => {
            const newType = types[Math.floor(Math.random() * types.length)];
            clone.src = `SVG/B_RAD_${newType}.svg`;
          });

          headerLogo.appendChild(clone);
        });
        loader.style.display = 'none';
        mainContent.style.display = 'block';
      }, 3000);
    };