/* =========================================
   Quintal da Vila — Cardápio Digital
   js/script.js
   ========================================= */

/* --- Número WhatsApp do restaurante --- */
const WHATSAPP_NUMBER = '5511954258578';

/* --- Fotos de cada seção --- */
const SECTION_PHOTOS = {
  executivo:   'images/produtos/executivo.png',
  porcoes:     'images/produtos/porcoes.png',
  rechaud:     'images/produtos/rechaud.png',
  parmegiana:  'images/produtos/parmegiana.png',
  hamburguer:  'images/produtos/hamburguer.png',
  buffet:      'images/produtos/buffet.png',
  cervejas:    'images/produtos/cervejas.png',
  'sem-alcool':'images/produtos/sem-alcool.png',
};

/* --- Dados do cardápio --- */
const MENU_DATA = [
  {
    id: 'executivo',
    label: 'Executivo',
    accompaniments: ['Arroz Branco', 'Feijão', 'Farofa', 'Fritas ou Salada'],
    items: [
      { id: 'exec-1', name: 'Contra Acebolado',    price: 'R$40,00', priceNum: 40 },
      { id: 'exec-2', name: 'Picanha',              price: 'R$45,00', priceNum: 45 },
      { id: 'exec-3', name: 'Filé Frango',          price: 'R$24,00', priceNum: 24 },
      { id: 'exec-4', name: 'Bife à Milanesa',      price: 'R$32,00', priceNum: 32 },
      { id: 'exec-5', name: 'Frango à Milanesa',    price: 'R$27,00', priceNum: 27 },
      { id: 'exec-6', name: 'Calabresa Acebolada',  price: 'R$22,00', priceNum: 22 },
      { id: 'exec-7', name: 'Linguiça Toscana',     price: 'R$22,00', priceNum: 22 },
      { id: 'exec-8', name: 'Fígado Acebolado',     price: 'R$22,00', priceNum: 22 },
    ],
  },
  {
    id: 'porcoes',
    label: 'Porções',
    items: [
      { id: 'por-1', name: 'Contra Filé Acebolado', price: 'R$70,00', priceNum: 70 },
      { id: 'por-2', name: 'Batata Frita',           price: 'R$35,00', priceNum: 35 },
      { id: 'por-3', name: 'Calabresa Acebolada',    price: 'R$50,00', priceNum: 50 },
      { id: 'por-4', name: 'Frango à Passarinho',    price: 'R$60,00', priceNum: 60 },
      { id: 'por-5', name: 'Isca Frango',            price: 'R$50,00', priceNum: 50 },
      { id: 'por-6', name: 'Isca de Peixe',          price: 'R$65,00', priceNum: 65 },
    ],
  },
  {
    id: 'rechaud',
    label: 'Réchaud',
    accompaniments: ['Arroz Branco', 'Arroz Biro Biro', 'Legumes', 'Batata Frita', 'Maionese de Batata'],
    extras: [{ label: '+ Acompanhamento Extra', price: 'R$17,00' }],
    items: [
      { id: 'rec-1', name: 'Picanha',     price: 'R$150,00', priceNum: 150 },
      { id: 'rec-2', name: 'Contra Filé', price: 'R$130,00', priceNum: 130 },
      { id: 'rec-3', name: 'Filé Frango', price: 'R$110,00', priceNum: 110 },
      { id: 'rec-4', name: 'Calabresa',   price: 'R$90,00',  priceNum: 90  },
    ],
  },
  {
    id: 'parmegiana',
    label: 'Parmegiana',
    accompaniments: ['Arroz Branco', 'Feijão', 'Fritas ou Salada'],
    items: [
      { id: 'par-1', name: 'Frango', price: 'R$32,00', priceNum: 32 },
      { id: 'par-2', name: 'Carne',  price: 'R$40,00', priceNum: 40 },
    ],
  },
  {
    id: 'hamburguer',
    label: 'Hambúrguer',
    items: [
      { id: 'ham-1', name: 'X-Calabresa',           price: 'R$24,00', priceNum: 24, desc: 'Pão brioche, calabresa acebolada, queijo prato, alface e tomate' },
      { id: 'ham-2', name: 'X-Frango',              price: 'R$25,00', priceNum: 25, desc: 'Pão brioche, frango empanado, queijo prato, alface e tomate' },
      { id: 'ham-3', name: 'X-Burguer Clássico',    price: 'R$24,00', priceNum: 24, desc: 'Pão brioche, hambúrguer bovino, queijo prato, alface, tomate e maionese da casa' },
      { id: 'ham-4', name: 'X-Salada Especial',     price: 'R$27,00', priceNum: 27, desc: 'Pão brioche, hambúrguer bovino, queijo prato, ovo, alface, tomate e maionese artesanal' },
      { id: 'ham-5', name: 'X-Tudo Quintal',        price: 'R$34,00', priceNum: 34, desc: 'Pão brioche, hambúrguer bovino, calabresa, ovo, bacon, alface, tomate e molho especial' },
      { id: 'ham-6', name: 'Burger + Refri + Fritas',price: '+R$10,00', priceNum: 10, desc: 'Adicione ao seu lanche e monte o combo' },
    ],
  },
  {
    id: 'buffet',
    label: 'Buffet Self Service',
    items: [
      { id: 'buf-1', name: 'À vontade', price: 'R$39,00', priceNum: 39 },
      { id: 'buf-2', name: 'Por kg',    price: 'R$77,00', priceNum: 77 },
    ],
  },
  {
    id: 'cervejas',
    label: 'Cervejas',
    items: [
      { id: 'cer-1', name: 'Original 600ml', price: 'R$18,00', priceNum: 18 },
      { id: 'cer-2', name: 'Spaten 600ml',   price: 'R$18,00', priceNum: 18 },
      { id: 'cer-3', name: 'Heineken 600ml', price: 'R$21,00', priceNum: 21 },
    ],
  },
  {
    id: 'sem-alcool',
    label: 'Sem Álcool',
    items: [
      { id: 'sa-1', name: 'Coca Cola KS',      price: 'R$7,00',  priceNum: 7,  desc: 'Zero ou Normal' },
      { id: 'sa-2', name: 'Coca Cola 1 Litro', price: 'R$12,00', priceNum: 12 },
      { id: 'sa-3', name: 'Coca Cola 2 Litros',price: 'R$17,00', priceNum: 17, desc: 'Zero ou Normal' },
      { id: 'sa-4', name: 'Guaraná Lata',      price: 'R$7,00',  priceNum: 7,  desc: 'Zero ou Normal' },
      { id: 'sa-5', name: 'Água',              price: 'R$5,00',  priceNum: 5,  desc: 'Com Gás ou Normal' },
      { id: 'sa-6', name: 'Suco Lata',         price: 'R$6,00',  priceNum: 6  },
    ],
  },
];

/* =============================================
   ESTADO DA APLICAÇÃO
   ============================================= */
const state = {
  cart: {},         // { itemId: { id, name, price, priceNum, qty } }
  filter: 'todos',
};

/* =============================================
   UTILITÁRIOS
   ============================================= */
function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function cartItems() {
  return Object.values(state.cart);
}

function cartCount() {
  return cartItems().reduce((sum, i) => sum + i.qty, 0);
}

function cartTotal() {
  return cartItems().reduce((sum, i) => sum + i.priceNum * i.qty, 0);
}

/* =============================================
   CARRINHO: LÓGICA
   ============================================= */
function addItem(item) {
  const existing = state.cart[item.id];
  state.cart[item.id] = {
    id:       item.id,
    name:     item.name,
    price:    item.price,
    priceNum: item.priceNum,
    qty:      existing ? existing.qty + 1 : 1,
  };
  updateAll();
}

function decreaseItem(itemId) {
  const existing = state.cart[itemId];
  if (!existing) return;
  if (existing.qty <= 1) {
    delete state.cart[itemId];
  } else {
    state.cart[itemId] = { ...existing, qty: existing.qty - 1 };
  }
  updateAll();
}

function removeItem(itemId) {
  delete state.cart[itemId];
  updateAll();
}

/* =============================================
   RENDERIZAÇÃO: MENU
   ============================================= */
function renderMenu() {
  const container = document.getElementById('menuSections');
  const sections = state.filter === 'todos'
    ? MENU_DATA
    : MENU_DATA.filter(s => s.id === state.filter);

  container.innerHTML = sections.map(section => {
    const photo = SECTION_PHOTOS[section.id]
      ? `<div class="section-photo"><img src="${SECTION_PHOTOS[section.id]}" alt="${section.label}" loading="lazy" /></div>`
      : '';

    const items = section.items.map(item => {
      const qty = state.cart[item.id]?.qty ?? 0;
      const controls = qty === 0
        ? `<button class="btn-add" onclick="addItem(${JSON.stringify(item).replace(/"/g, '&quot;')})">+</button>`
        : `<div class="item-qty-controls">
             <button class="btn-qty" onclick="decreaseItem('${item.id}')">−</button>
             <span class="item-qty">${qty}</span>
             <button class="btn-qty" onclick="addItem(${JSON.stringify(item).replace(/"/g, '&quot;')})">+</button>
           </div>`;

      return `
        <div class="menu-item ${qty > 0 ? 'in-cart' : ''}" id="item-${item.id}">
          <div class="item-row">
            <div class="item-name-price">
              <span class="item-name">${item.name}</span>
              <div class="item-dots"></div>
              <span class="item-price">${item.price}</span>
            </div>
            <div class="item-controls">${controls}</div>
          </div>
          ${item.desc ? `<p class="item-desc">${item.desc}</p>` : ''}
        </div>`;
    }).join('');

    const accompaniments = section.accompaniments
      ? `<div class="accompaniments">
           <p class="accompaniments-label">Acompanha:</p>
           <div class="accompaniments-tags">
             ${section.accompaniments.map(a => `<span class="tag">${a}</span>`).join('')}
           </div>
           ${(section.extras || []).map(e => `
             <div class="extra-row">
               <span class="extra-label">${e.label}</span>
               <div class="extra-dots"></div>
               <span class="extra-price">${e.price}</span>
             </div>`).join('')}
         </div>`
      : '';

    return `
      <div class="menu-section">
        <div class="section-header">
          <span class="section-title-badge">${section.label}</span>
          <div class="section-line"></div>
        </div>
        ${photo}
        <div class="items-list">${items}</div>
        ${accompaniments}
      </div>`;
  }).join('');
}

/* =============================================
   RENDERIZAÇÃO: CARRINHO
   ============================================= */
function renderCart() {
  const items = cartItems();
  const cartEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');

  if (items.length === 0) {
    cartEl.innerHTML = `
      <div class="cart-empty">
        <div class="icon">🛒</div>
        <p>Seu carrinho está vazio</p>
        <small>Adicione itens do cardápio</small>
      </div>`;
    footerEl.style.display = 'none';
  } else {
    cartEl.innerHTML = items.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-price">${item.price}</p>
        </div>
        <div class="cart-item-controls">
          <button class="btn-qty" onclick="decreaseItem('${item.id}')">−</button>
          <span class="qty">${item.qty}</span>
          <button class="btn-qty" onclick="addItem(${JSON.stringify(item).replace(/"/g, '&quot;')})">+</button>
        </div>
        <span class="cart-item-subtotal">${formatBRL(item.priceNum * item.qty)}</span>
        <button class="btn-remove" onclick="removeItem('${item.id}')" title="Remover">✕</button>
      </div>`).join('');
    totalEl.textContent = formatBRL(cartTotal());
    footerEl.style.display = 'block';
  }
}

/* =============================================
   BOTÃO FLUTUANTE DO CARRINHO
   ============================================= */
function updateCartButton() {
  const btn = document.getElementById('btnCart');
  const label = document.getElementById('cartLabel');
  const count = cartCount();
  if (count === 0) {
    btn.style.display = 'none';
  } else {
    btn.style.display = 'flex';
    label.textContent = `${count} ${count === 1 ? 'item' : 'itens'} · ${formatBRL(cartTotal())}`;
  }
}

/* =============================================
   ATUALIZAR TUDO
   ============================================= */
function updateAll() {
  renderMenu();
  renderCart();
  updateCartButton();
}

/* =============================================
   FILTROS
   ============================================= */
function initFilters() {
  const container = document.getElementById('filters');

  // Envolver botões num div interno para scroll
  const inner = document.createElement('div');
  inner.className = 'filters-inner';
  while (container.firstChild) inner.appendChild(container.firstChild);
  container.appendChild(inner);

  inner.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.filter = btn.dataset.filter;
      inner.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu();
    });
  });
}

/* =============================================
   DRAWERS (Sobre Nós e Carrinho)
   ============================================= */
function openDrawer(id) {
  document.getElementById(id).classList.add('open');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDrawer(id) {
  document.getElementById(id).classList.remove('open');
  const anyOpen = document.querySelector('.drawer.open');
  if (!anyOpen) {
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = '';
  }
}

function closeAllDrawers() {
  document.querySelectorAll('.drawer').forEach(d => d.classList.remove('open'));
  document.getElementById('overlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* =============================================
   WHATSAPP
   ============================================= */
function sendWhatsApp() {
  const items = cartItems();
  if (items.length === 0) return;

  const lines = [
    'Olá! Gostaria de fazer um pedido:',
    '',
    ...items.map(i => `• ${i.qty}x ${i.name} — ${formatBRL(i.priceNum * i.qty)}`),
    '',
    `*Total: ${formatBRL(cartTotal())}*`,
  ];

  const msg = encodeURIComponent(lines.join('\n'));
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
}

/* =============================================
   INICIALIZAÇÃO
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  // Renderiza menu e carrinho iniciais
  renderMenu();
  renderCart();
  updateCartButton();
  initFilters();

  // Botão "Sobre Nós"
  document.getElementById('btnMenu').addEventListener('click', () => openDrawer('drawerSobre'));
  document.getElementById('btnCloseSobre').addEventListener('click', () => closeDrawer('drawerSobre'));

  // Botão carrinho
  document.getElementById('btnCart').addEventListener('click', () => openDrawer('drawerCart'));
  document.getElementById('btnCloseCart').addEventListener('click', () => closeDrawer('drawerCart'));

  // Overlay fecha tudo
  document.getElementById('overlay').addEventListener('click', closeAllDrawers);

  // Botão WhatsApp
  document.getElementById('btnWhatsapp').addEventListener('click', sendWhatsApp);
});
