document.addEventListener('DOMContentLoaded', () => {
  if (getSessionUser()) {
    window.location.replace('dashboard.html');
    return;
  }
  initNav();
  renderPreviewCatalog();
  renderProgressDemo();
  renderTestimonials();
});

function renderPreviewCatalog() {
  const grid = document.getElementById('previewGrid');
  if (!grid) return;

  grid.innerHTML = PREVIEW_BOOKS.map((book, i) => {
    const [bg1, bg2] = COVER_GRADIENTS[i % COVER_GRADIENTS.length];
    const st = STATUS_LABELS[book.status];
    return `
      <article class="preview-book clay-card">
        <div class="preview-cover" style="--cover-bg:${bg1};--cover-bg2:${bg2}">
          <span class="preview-emoji">${book.emoji}</span>
          <span class="badge ${st.cls}">${st.text}</span>
        </div>
        <div class="preview-info">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <span class="preview-cat">${book.category}</span>
        </div>
      </article>`;
  }).join('');
}

function renderProgressDemo() {
  const wrap = document.getElementById('progressDemo');
  if (!wrap) return;

  wrap.innerHTML = PROGRESS_DEMO.map(item => `
    <div class="progress-item clay-card">
      <div class="progress-item-head">
        <span class="progress-emoji">${item.icon}</span>
        <div>
          <h4>${item.title}</h4>
          <span class="progress-label">${item.label}</span>
        </div>
        <strong class="progress-pct">${item.progress}%</strong>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${item.progress}%"></div></div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;

  grid.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card clay-card">
      <div class="testimonial-header">
        <div class="testimonial-avatar">${t.avatar}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
      <div class="testimonial-stars">${'⭐'.repeat(t.stars)}</div>
      <p class="testimonial-text">"${t.text}"</p>
    </div>
  `).join('');
}
