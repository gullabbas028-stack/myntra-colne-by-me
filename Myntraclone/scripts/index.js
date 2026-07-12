let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];

function getItemById(itemId) {
  return items.find(item => item.id === itemId);
}

function updateBagCount() {
  const count = bagItems.length;
  document.querySelectorAll('.bag-item-count, .bag-items').forEach(element => {
    element.textContent = count;
  });
}

function openCartDrawer() {
  const root = document.querySelector('.cart-drawer-root');
  if (!root) return;

  root.innerHTML = `
    <div class="cart-overlay active"></div>
    <div class="cart-drawer active">
      <div class="cart-header">
        <div>
          <h3>Bag</h3>
          <p>${bagItems.length} items</p>
        </div>
        <button class="cart-close" onclick="closeCartDrawer()">×</button>
      </div>
      <div class="cart-items">
        ${bagItems.length === 0 ? '<p class="cart-empty">Your bag is empty.</p>' : bagItems.map(itemId => {
          const item = getItemById(itemId);
          return `<div class="cart-item">
            <img src="${item.image}" alt="${item.item_name}" />
            <div>
              <h4>${item.item_name}</h4>
              <p>Rs ${item.current_price}</p>
            </div>
          </div>`;
        }).join('')}
      </div>
      <a class="cart-footer" href="bag.html">View bag</a>
    </div>
  `;
  root.style.pointerEvents = 'auto';
}

function closeCartDrawer() {
  const root = document.querySelector('.cart-drawer-root');
  if (!root) return;
  root.innerHTML = '';
  root.style.pointerEvents = 'none';
}

function addToBag(itemId) {
  bagItems = [...bagItems, itemId];
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  updateBagCount();

  const button = event?.target;
  if (button) {
    button.classList.add('btn-added');
    button.textContent = 'Added';
    setTimeout(() => {
      button.classList.remove('btn-added');
      button.textContent = 'Add to bag';
    }, 800);
  }

  openCartDrawer();
}

function renderItems() {
  const itemsContainer = document.querySelector('.items-container');
  if (!itemsContainer) {
    return;
  }

  itemsContainer.innerHTML = items.map(item => `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="${item.item_name}">
      <div class="rating">${item.rating.stars} ★ | ${item.rating.count}</div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag('${item.id}')">Add to bag</button>
    </div>
  `).join('');
}

function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const prev = document.querySelector('.carousel-btn.prev');
  const next = document.querySelector('.carousel-btn.next');
  let current = 0;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  }

  prev?.addEventListener('click', () => showSlide(current - 1));
  next?.addEventListener('click', () => showSlide(current + 1));
  dots.forEach(dot => dot.addEventListener('click', () => showSlide(Number(dot.dataset.slide))));

  setInterval(() => showSlide(current + 1), 5000);
}

window.addEventListener('DOMContentLoaded', () => {
  renderItems();
  updateBagCount();
  initCarousel();

  document.querySelector('.cart-drawer-root')?.addEventListener('click', (event) => {
    if (event.target.classList.contains('cart-overlay')) {
      closeCartDrawer();
    }
  });
});
