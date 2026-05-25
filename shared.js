/* ══════════════════════════════════════
   GCROWN PORTFOLIO — SHARED DATA STORE
   ══════════════════════════════════════ */

const SUPABASE_URL = 'https://mzwebsadcvgnnthmhatd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16d2Vic2FkY3Znbm50aG1oYXRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzNTA2NzEsImV4cCI6MjA5MzkyNjY3MX0.AC2T2lZKJ3fjSxFQPCKw-t5UcnwK7_GVDaOkhR4cyG4';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const defaultData = {
  hero: {
    eyebrow: 'Executive Assistant · Strategic Consultant',
    name: 'Olugbenga <em>Crown</em>',
    tagline: 'I help organisations move faster, think clearer, and lead with intention — bridging executive vision and operational excellence.',
    badge_number: '5+',
    badge_label: 'Years of Experience',
    stat1_number: '30+',
    stat1_label: 'Projects Delivered',
    stat2_number: '12+',
    stat2_label: 'Industries Touched',
    cta_primary: 'View My Work',
    cta_primary_link: 'work.html',
    cta_secondary: 'Let\'s Talk',
    cta_secondary_link: 'contact.html',
  },
  about: {
    headline: 'The <em>Mind</em> Behind the Work',
    bio1: 'I\'m Olugbenga Crown — a Lagos-based executive assistant, strategic consultant, and project manager with over five years navigating complex organisations, ambitious founders, and high-stakes deliverables.',
    bio2: 'My edge sits at the intersection of rigorous systems thinking and human-centred leadership. I\'ve worked across fintech, faith institutions, logistics, education, and brand consulting — always translating vision into velocity.',
    bio3: 'When I\'m not building systems or briefing executives, I\'m developing curriculum, mentoring emerging leaders, and writing. I believe great work is always a people problem first.',
    values: [
      { icon: '🧭', title: 'Clarity', desc: 'I cut through noise to what actually moves the needle.' },
      { icon: '⚙️', title: 'Systems', desc: 'Every process I build is designed to outlast my involvement.' },
      { icon: '🤝', title: 'Trust', desc: 'Confidentiality and integrity are non-negotiable in everything I do.' },
      { icon: '🌱', title: 'Growth', desc: 'I invest in people as much as projects — always.' },
    ],
    cv_link: '#',
  },
  services: [
    { id: 's1', icon: '🗂️', name: 'Executive Assistance', desc: 'Calendar management, inbox triage, board prep, and stakeholder correspondence — so leaders can focus on the work only they can do.', tags: ['Scheduling', 'Correspondence', 'Board Prep'] },
    { id: 's2', icon: '📐', name: 'Project Management', desc: 'End-to-end project delivery from scoping to sign-off. I build timelines, manage dependencies, and keep teams accountable.', tags: ['Agile', 'Delivery', 'Stakeholder Mgmt'] },
    { id: 's3', icon: '🔍', name: 'Research & Analysis', desc: 'Market research, competitive analysis, and strategic briefs that translate data into decisions.', tags: ['Market Research', 'Strategy', 'Reporting'] },
    { id: 's4', icon: '✍️', name: 'Content & Copywriting', desc: 'Ghost-written articles, proposals, pitch decks, and policy documents crafted with precision and purpose.', tags: ['Ghostwriting', 'Proposals', 'Policy'] },
    { id: 's5', icon: '📊', name: 'Strategic Consulting', desc: 'Organisational diagnostics, growth strategy, and leadership advisory for startups and established teams alike.', tags: ['Strategy', 'Advisory', 'Growth'] },
    { id: 's6', icon: '🎓', name: 'Curriculum Design', desc: 'Structured learning journeys — from leadership academies to corporate training programmes — built for lasting impact.', tags: ['Learning Design', 'Training', 'Leadership'] },
  ],
  work: [
    { id: 'w1', emoji: '🏦', color: 'linear-gradient(135deg,#e8f0e8,#5c7a5e)', category: 'Consulting · Fintech', title: 'Avodah Finance — Governance Advisory', desc: 'Produced a comprehensive regulatory compliance document covering management profiles, shareholder disclosures, governance policies, and an organisational chart for submission.', year: '2025' },
    { id: 'w2', emoji: '💧', color: 'linear-gradient(135deg,#daeef5,#8ec8d4)', category: 'Project Management · Distribution', title: 'Project Aqua — Distribution Strategy Lead', desc: 'Designed a full distribution strategy for a bottled water production initiative, mapping Lagos and Ogun State delivery zones and coordinating RFQs with major logistics partners.', year: '2025' },
    { id: 'w3', emoji: '🎓', color: 'linear-gradient(135deg,#f5f0e8,#c8963e)', category: 'Curriculum Design · Education', title: 'Lucid Spark Teaching Series — 19-Session Curriculum', desc: 'Developed a comprehensive 19-session leadership curriculum across six domains including Personal Development, Emotional Intelligence, Finance, and Spiritual growth for Lucid Hub.', year: '2025' },
    { id: 'w4', emoji: '⛪', color: 'linear-gradient(135deg,#e8eaf0,#9b9fc8)', category: 'Information Management · RCCG', title: 'RCCG National Directory — Regional Data Extraction', desc: 'Extracted and organised regional pastor contact data from the RCCG national directory across 65 regions, structuring PICR role codes for institutional use.', year: '2025' },
    { id: 'w5', emoji: '🌿', color: 'linear-gradient(135deg,#eaf3e8,#7ab87a)', category: 'Brand Strategy · Content', title: 'Lucid Hub — Social Media & Revenue Strategy', desc: 'Developed platform-specific social media content for Facebook and LinkedIn, and advised on a revenue strategy including digital products, speaking engagements, and membership tiers.', year: '2025' },
    { id: 'w6', emoji: '📋', color: 'linear-gradient(135deg,#f3e8e8,#c87a7a)', category: 'Executive Assistance', title: 'Gavel & Quill — Executive Ops Setup', desc: 'Established full executive operations infrastructure for a Lagos-based legal consultancy: SOPs, filing systems, scheduling protocols, and stakeholder communication templates.', year: '2024' },
  ],
  contact: {
    headline: 'Let\'s Work <em>Together</em>',
    sub: 'Whether you need a project manager, executive assistant, or a strategic thinker — I\'m available for consultations, collaborations, and full engagements.',
    email: 'hello@gcrown.com',
    linkedin: '#',
    cv_link: '#',
    availability: 'Currently available for new engagements',
  },
  meta: {
    name: 'Olugbenga G. Crown',
    tagline: 'Executive Assistant · Strategic Consultant',
    copyright_year: '2025',
  }
};

async function getSupabaseData() {
  // We go to the 'portfolio' table and grab the row where id is 1
  const { data, error } = await _supabase
    .from('settings')
    .select('content')
    .single();
  if (error) return defaultData;
  return data.content;
}

async function saveSupabaseData(updatedContent) {
  const { error } = await _supabase
    .from('settings')
    .update({ content: updatedContent })
    .eq('id', 1);

  if (error) {
    showToast("Update failed: " + error.message, "error");
  } else {
    showToast("Cloud Sync Successful!");
  }
}

function resetData() {
  localStorage.removeItem('portfolioData');
  return JSON.parse(JSON.stringify(defaultData));
}

/* ── NAV INJECTION ── */
function injectNav(currentPage) {
  const d = getData();
  const nav = document.getElementById('mainNav');
  if(!nav) return;

  // Use Logo if it exists, otherwise use Name
  const logoHtml = d.meta.logo 
    ? `<img src="${d.meta.logo}" alt="Logo" style="height:30px;">` 
    : d.meta.name;

  nav.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">${logoHtml}</a>
      <div class="nav-links" id="navLinks">
        </div>
    </div>
  `;
}

/* ── FOOTER INJECTION ── */
function injectFooter() {
  const data = getData();
  const footer = document.getElementById('mainFooter');
  if (!footer) return;
  footer.innerHTML = `
    <p>© ${data.meta.copyright_year} ${data.meta.name} — All rights reserved.</p>
    <a href="index.html">↑ Back to top</a>
  `;
}

/* ── REVEAL OBSERVER ── */
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(r => obs.observe(r));
}

/* ── TOAST ── */
function showToast(msg, type='success') {
  const t = document.createElement('div');
  t.style.cssText = `position:fixed;bottom:2rem;right:2rem;z-index:9998;padding:.9rem 1.6rem;background:${type==='success'?'#5c7a5e':'#9b4f2a'};color:#fff;font-family:'DM Sans',sans-serif;font-size:.85rem;border-radius:2px;box-shadow:0 8px 32px rgba(0,0,0,.18);transform:translateY(80px);transition:transform .3s;`;
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => { t.style.transform = 'translateY(0)'; });
  setTimeout(() => { t.style.transform = 'translateY(80px)'; setTimeout(() => t.remove(), 300); }, 2500);
}
