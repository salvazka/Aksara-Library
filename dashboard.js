/* Dashboard — requires login */

let activeFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  const user = getSessionUser();
  if (!user) {
    window.location.replace('login.html');
    return;
  }

  initNav();
  initDashboard(user);
  renderBooks(BOOKS);
  renderCategories();
  renderAnnouncements();
  renderStatus('borrowed');
  initSearch();
  initStatusTabs();
  initActions(user);

  const params = new URLSearchParams(window.location.search);
  if (params.get('welcome') === '1') {
    showToast(`Selamat datang, ${ROLE_LABELS[user.role]}!`);
    window.history.replaceState({}, '', 'dashboard.html');
  }
});

function initDashboard(user) {
  document.getElementById('userName').textContent = user.name || user.email;
  document.getElementById('userRole').textContent = ROLE_LABELS[user.role] || user.role;

  const welcomeTitle = document.getElementById('welcomeTitle');
  const welcomeDesc = document.getElementById('welcomeDesc');

  if (user.role === 'admin') {
    welcomeTitle.textContent = 'Panel Admin Perpustakaan';
    welcomeDesc.textContent = 'Kelola buku, validasi peminjaman, pantau keterlambatan, dan buat laporan.';
    document.getElementById('admin')?.classList.remove('hidden');
    document.querySelectorAll('.nav-admin-only').forEach(el => el.classList.remove('hidden'));
  } else {
    welcomeTitle.textContent = `Halo, ${user.name || 'Anggota'}!`;
    welcomeDesc.textContent = 'Cari buku, ajukan peminjaman, dan lacak status baca Anda di sini.';
  }
}

function renderBooks(books) {
  const grid = document.getElementById('bookGrid');
  if (!grid) return;

  grid.innerHTML = books.map((book, i) => {
    const [bg1, bg2] = COVER_GRADIENTS[i % COVER_GRADIENTS.length];
    const st = STATUS_LABELS[book.status];
    const canBorrow = book.status === 'available';
    return `
      <article class="book-card clay-card" data-id="${book.id}">
        <div class="book-cover-wrap" style="--cover-bg:${bg1};--cover-bg2:${bg2}">
          ${book.emoji}
          <span class="badge ${st.cls}">${st.text}</span>
        </div>
        <div class="book-info">
          <h3>${book.title}</h3>
          <p class="book-author">${book.author}</p>
          <div class="book-meta">
            <span class="book-category">${book.category}</span>
            <span class="book-rating">⭐ ${book.rating}</span>
          </div>
          <p class="book-stock">Stok: <strong>${book.stock}</strong></p>
          <button class="btn ${canBorrow ? 'btn-primary' : 'btn-outline'} btn-block borrow-btn" data-id="${book.id}" ${canBorrow ? '' : 'disabled'}>
            ${canBorrow ? 'Pinjam Sekarang' : 'Tidak Tersedia'}
          </button>
        </div>
      </article>`;
  }).join('');

  document.querySelectorAll('.borrow-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const book = BOOKS.find(b => b.id === +btn.dataset.id);
      showToast(`Pengajuan peminjaman "${book.title}" berhasil! Menunggu validasi admin.`);
    });
  });

  const count = document.getElementById('searchResultCount');
  if (count) count.textContent = `Menampilkan ${books.length} buku`;
}

function filterBooks() {
  const query = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  const filtered = BOOKS.filter(book => {
    const matchFilter = activeFilter === 'all' || book.category === activeFilter;
    const matchQuery = !query || [book.title, book.author, book.category, book.isbn]
      .some(f => f.toLowerCase().includes(query));
    return matchFilter && matchQuery;
  });
  renderBooks(filtered);
}

function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;

  grid.innerHTML = CATEGORIES.map(cat => `
    <div class="category-card clay-card ${cat.cls}" data-category="${cat.name}">
      <div class="cat-icon">${cat.icon}</div>
      <h4>${cat.name}</h4>
      <span class="cat-count">${cat.count} buku</span>
    </div>
  `).join('');

  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      activeFilter = card.dataset.category;
      document.querySelectorAll('.chip').forEach(c =>
        c.classList.toggle('active', c.dataset.filter === activeFilter));
      filterBooks();
      document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function renderAnnouncements() {
  const grid = document.getElementById('announcementsGrid');
  if (!grid) return;

  grid.innerHTML = ANNOUNCEMENTS.map(a => `
    <div class="announcement-card clay-card">
      <span class="ann-type ${a.type}">${a.label}</span>
      <h4>${a.title}</h4>
      <p>${a.desc}</p>
      <span class="ann-date">📅 ${a.date}</span>
    </div>
  `).join('');
}

function renderStatus(tab = 'borrowed') {
  const items = BORROWING_STATUS[tab] || [];
  const el = document.getElementById('statusContent');
  if (!el) return;

  el.innerHTML = items.map(item => `
    <div class="status-item clay-card">
      <div class="status-item-icon">${item.icon}</div>
      <div class="status-item-info">
        <h4>${item.title}</h4>
        <p>${item.author}</p>
        <div class="progress-bar"><div class="progress-fill" style="width:${item.progress}%"></div></div>
      </div>
      <div class="status-item-meta">
        <span class="badge ${item.badge}">${item.status}</span>
        <p class="due">${item.due}</p>
      </div>
    </div>
  `).join('');
}

function initSearch() {
  document.getElementById('searchBtn')?.addEventListener('click', filterBooks);
  document.getElementById('searchInput')?.addEventListener('input', filterBooks);
  document.getElementById('searchInput')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') filterBooks();
  });
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      filterBooks();
    });
  });
}

function initStatusTabs() {
  document.querySelectorAll('.status-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.status-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderStatus(tab.dataset.tab);
    });
  });
}

function logout() {
  sessionStorage.removeItem('aksara_user');
  window.location.href = 'index.html';
}

function initActions() {
  document.getElementById('logoutBtn')?.addEventListener('click', logout);
  document.getElementById('footerLogout')?.addEventListener('click', logout);
  document.getElementById('returnBtn')?.addEventListener('click', () => {
    showToast('Pengajuan pengembalian berhasil dikirim!');
  });
}
