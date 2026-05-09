/* ═══════════════════════════════════════════════
   GCROWN PORTFOLIO — SHARED SITE UTILITIES
═══════════════════════════════════════════════ */

function applyTheme(site) {
  const r = document.documentElement.style;
  r.setProperty('--accent',       site.accentColor  || '#c8963e');
  r.setProperty('--accent-light', site.accentLight  || '#e8b96a');
  r.setProperty('--accent-dark',  site.accentDark   || '#9b4f2a');
  r.setProperty('--dark-bg',      site.darkBg       || '#1a1612');
  r.setProperty('--light-bg',     site.lightBg      || '#faf7f2');
  r.setProperty('--cream-bg',     site.creamBg      || '#f3ede3');
  r.setProperty('--font-heading', site.fontHeading  || "'Playfair Display', serif");
  r.setProperty('--font-body',    site.fontBody     || "'DM Sans', sans-serif");
}

function buildNav(site, activePage) {
  const pages = [
    {href:'index.html',    label:'Home'},
    {href:'about.html',    label:'About'},
    {href:'services.html', label:'Services'},
    {href:'works.html',    label:'Works'},
    {href:'contact.html',  label:'Contact'},
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${activePage===p.href?'active':''}">${p.label}</a></li>`
  ).join('');
  const mLinks = pages.map(p =>
    `<a href="${p.href}" class="${activePage===p.href?'active':''}">${p.label}</a>`
  ).join('');

  return `
    <nav id="mainNav">
      <a class="nav-logo" href="index.html">
        <span class="nav-prefix">${site.logoPrefix}</span>${site.logoText}
      </a>
      <ul class="nav-links">${links}</ul>
      <a href="${site.navCtaLink||'contact.html'}" class="btn-primary nav-cta-btn">${site.navCta}</a>
      <button class="hamburger" id="hamburger" onclick="toggleMobileNav()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-nav" id="mobileNav">
      ${mLinks}
      <a href="${site.navCtaLink||'contact.html'}" class="mobile-cta-btn">${site.navCta}</a>
    </div>
  `;
}

function buildFooter(site) {
  return `
    <footer>
      <div class="footer-inner">
        <div class="footer-top">
          <a class="footer-logo" href="index.html">
            <span class="nav-prefix">${site.logoPrefix}</span>${site.logoText}
          </a>
          <nav class="footer-nav">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="services.html">Services</a>
            <a href="works.html">Works</a>
            <a href="contact.html">Contact</a>
          </nav>
        </div>
        <div class="footer-bottom">
          <p>${site.footerText}</p>
          <a href="admin.html" class="footer-admin-link" title="Admin Dashboard">⚙ Admin</a>
        </div>
      </div>
    </footer>
  `;
}

function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  const btn = document.getElementById('hamburger');
  const open = nav.classList.toggle('open');
  btn.classList.toggle('open', open);
}

/* Scroll effects */
window.addEventListener('scroll', () => {
  document.getElementById('mainNav')?.classList.toggle('scrolled', scrollY > 60);
});

/* Reveal on scroll */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 90);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(r => obs.observe(r));
}

/* Toast */
function showToast(msg, type = 'success') {
  let t = document.getElementById('siteToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'siteToast';
    t.className = 'site-toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = `site-toast ${type} show`;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

/* File to base64 */
function fileToBase64(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = e => res(e.target.result);
    r.onerror = () => rej(new Error('Read failed'));
    r.readAsDataURL(file);
  });
}

/* Render service card HTML */
function renderServiceCard(s) {
  const tags = (s.tags||[]).map(t => `<span class="service-tag">${t}</span>`).join('');
  return `
    <div class="service-card" data-id="${s.id}">
      <span class="service-icon">${s.icon}</span>
      <div class="service-name">${s.name}</div>
      <p class="service-desc">${s.desc}</p>
      <div class="service-tags">${tags}</div>
    </div>`;
}

/* Render work card HTML */
function renderWorkCard(w) {
  const thumbStyle = w.thumbImg
    ? `background:${w.bg};`
    : `background:${w.bg};`;
  const thumbImg = w.thumbImg
    ? `<img src="${w.thumbImg}" alt="${w.title}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;"/>`
    : '';
  return `
    <div class="work-card" data-id="${w.id}">
      <div class="work-thumb" style="${thumbStyle}">
        ${thumbImg}
        <span class="work-emoji">${w.emoji}</span>
      </div>
      <div class="work-body">
        <div class="work-cat">${w.category}</div>
        <div class="work-title">${w.title}</div>
        <p class="work-desc">${w.desc}</p>
        <div class="work-foot">
          <span class="work-year">${w.year}</span>
          <a href="${w.link||'#'}" class="work-arrow" target="_blank">→</a>
        </div>
      </div>
    </div>`;
}
