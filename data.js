/* ═══════════════════════════════════════════════
   GCROWN PORTFOLIO — DATA LAYER v2
   All site content lives here. Admin edits are
   saved to localStorage and read on page load.
═══════════════════════════════════════════════ */

const STORE_KEY = 'gcrown_portfolio_v2';

const DEFAULT_DATA = {
  site: {
    logoPrefix: 'G.', logoText: 'Crown',
    navCta: 'Hire Me', navCtaLink: 'contact.html',
    footerText: '© 2025 Olugbenga G. Crown — All rights reserved.',
    accentColor: '#c8963e', accentLight: '#e8b96a', accentDark: '#9b4f2a',
    darkBg: '#1a1612', lightBg: '#faf7f2', creamBg: '#f3ede3',
    fontHeading: "'Playfair Display', serif",
    fontBody: "'DM Sans', sans-serif",
  },

  home: {
    eyebrow: 'Portfolio — 2025',
    nameHtml: 'Olugbenga<br><em>G. Crown</em>',
    tagline: 'Project Manager · Executive Assistant · Information Strategist.\nTurning complex challenges into clear, executable outcomes — with precision and purpose.',
    cta1Text: 'View My Work ↓', cta1Link: 'works.html',
    cta2Text: 'Services Offered', cta2Link: 'services.html',
    badgeNumber: '4+', badgeLabel: 'PM Certifications',
    initials: 'OC',
    profilePhoto: '',
    certs: ['Google PM Certified','DSA Certified','DEXA Certified','Exford Global'],
    heroBg: 'linear-gradient(135deg,#f3ede3 0%,#f5e8cc 60%,#e8d5b0 100%)',
    heroBgImage: '',
    introLabel: 'A Snapshot',
    introTitle: 'What I <em>Do</em>',
    introText: 'From managing complex projects to designing leadership curricula, my work sits at the intersection of information, strategy, and people.',
  },

  about: {
    eyebrow: 'Get To Know Me',
    heroTitle: 'Information.<br><em>Leadership.</em><br>Execution.',
    heroBg: '#1a1612',
    bioPara1: 'A Library and Information Science graduate turned certified Project Manager, I bring structured thinking and a people-first approach to every engagement.',
    bioPara2: 'Currently serving as Account Officer at Avodah Finance and Executive Assistant at RCCG Central Missions Board (IMC). My work spans compliance documentation, distribution strategy, leadership curriculum design, and executive operations across faith, finance, and development sectors.',
    quote: '"I bridge information, people, and process — helping organisations transform their vision into structured, deliverable outcomes."',
    profilePhoto: '',
    initials: 'OC',
    stats: [
      {n:'4+', d:'PM Certifications'},
      {n:'3+', d:'Active Roles'},
      {n:'6',  d:'Project Domains'},
      {n:'5+', d:'Years Experience'},
    ],
    skills: [
      'Project Management','Stakeholder Engagement','Risk Management',
      'Executive Administration','Information Architecture','Curriculum Design',
      'Compliance Documentation','Strategic Planning','Data Extraction',
      'Content Strategy','Leadership Development','Logistics Coordination',
    ],
    certs: [
      'Google Project Management Professional Certificate',
      'DSA Certification','DEXA Certification','Exford Global Certificate',
    ],
    experience: [
      {role:'Account Officer', org:'Avodah Finance', period:'2024 – Present',
       desc:'Managing financial accounts, compliance documentation, and client relations for a finance institution.'},
      {role:'Executive Assistant', org:'RCCG Central Missions Board (IMC)', period:'2023 – Present',
       desc:'Providing executive-level administrative support across international missions coordination.'},
      {role:'Distribution Lead', org:'Project Aqua', period:'2025',
       desc:'Designed a full distribution strategy covering Lagos and Ogun State logistics zones with partner RFQs.'},
    ],
  },

  services: [
    {id:'s1', icon:'📋', name:'Project Management',
     desc:'End-to-end project planning, execution, and delivery using industry frameworks — from WBS design to stakeholder coordination and risk management.',
     tags:['Agile','WBS','Risk','RACI'], featured: true},
    {id:'s2', icon:'🗂️', name:'Executive & Administrative Support',
     desc:'Strategic executive assistance including scheduling, documentation, correspondence, and operational coordination for leadership teams.',
     tags:['EA Services','Coordination','Operations'], featured: true},
    {id:'s3', icon:'📚', name:'Information Management',
     desc:'Structuring, classifying, and managing organisational information assets — from records systems to document architecture and compliance filing.',
     tags:['Records','LIS','Archives'], featured: false},
    {id:'s4', icon:'🌱', name:'Leadership & Curriculum Development',
     desc:'Designing leadership training programmes, facilitator guides, and curriculum frameworks for youth and community development organisations.',
     tags:['Curriculum','Facilitation','Leadership'], featured: true},
    {id:'s5', icon:'📊', name:'Compliance & Governance Documentation',
     desc:'Drafting corporate disclosure documents, governance policies, organograms, and regulatory compliance materials for financial and institutional entities.',
     tags:['Compliance','Governance','Policy'], featured: false},
    {id:'s6', icon:'✍️', name:'Content & Communication Strategy',
     desc:'Developing brand voice, platform-specific social media content, and communication frameworks for organisations and NGOs.',
     tags:['Content','Branding','Strategy'], featured: false},
  ],

  works: [
    {id:'w1', emoji:'📖', title:'Lucid Spark Teaching Series',
     category:'Curriculum Design · Leadership',
     desc:'Developed a comprehensive 19-session leadership curriculum across six domains including Personal Development, Emotional Intelligence, Finance, and Spiritual growth for Lucid Hub.',
     year:'2025', bg:'linear-gradient(135deg,#f3ede3,#e8b96a)', thumbImg:'', link:'#', featured:true},
    {id:'w2', emoji:'💧', title:'Project Aqua — Distribution Strategy Lead',
     category:'Project Management · Distribution',
     desc:'Designed a full distribution strategy for a bottled water production initiative, mapping Lagos and Ogun State delivery zones and coordinating RFQs with major logistics partners.',
     year:'2025', bg:'linear-gradient(135deg,#daeef5,#8ec8d4)', thumbImg:'', link:'#', featured:true},
    {id:'w3', emoji:'🏛️', title:'Avodah Finance — Corporate Disclosure',
     category:'Compliance · Governance',
     desc:'Produced a comprehensive regulatory compliance document covering management profiles, shareholder disclosures, governance policies, and an organisational chart for submission.',
     year:'2025', bg:'linear-gradient(135deg,#f3e8d4,#c8963e)', thumbImg:'', link:'#', featured:true},
    {id:'w4', emoji:'⛪', title:'RCCG National Directory Data Project',
     category:'Information Management · RCCG',
     desc:'Extracted and organised regional pastor contact data from the RCCG national directory across 65 regions, structuring PICR role codes for institutional use.',
     year:'2025', bg:'linear-gradient(135deg,#e8eaf0,#9b9fc8)', thumbImg:'', link:'#', featured:false},
    {id:'w5', emoji:'🌿', title:'Lucid Hub — Social & Revenue Strategy',
     category:'Brand Strategy · Content',
     desc:'Developed platform-specific social media content for Facebook and LinkedIn, and advised on a revenue strategy including digital products, speaking engagements, and membership tiers.',
     year:'2025', bg:'linear-gradient(135deg,#eaf3e8,#7ab87a)', thumbImg:'', link:'#', featured:false},
  ],

  contact: {
    label: 'Get In Touch',
    heading: "Let's Work<br><em>Together</em>",
    sub: "Whether you need a project manager, executive assistant, or a strategic thinker — I'm available for consultations, collaborations, and full engagements.",
    email: 'hello@gcrown.com',
    phone: '',
    linkedin: '#',
    cv: '#',
    location: 'Lagos, Nigeria',
    availability: 'Available for new projects',
    formEnabled: true,
  }
};

/* ── Helpers ── */
function getData() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return deepClone(DEFAULT_DATA);
    return deepMerge(deepClone(DEFAULT_DATA), JSON.parse(raw));
  } catch(e) { return deepClone(DEFAULT_DATA); }
}

function saveData(data) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); return true; }
  catch(e) { alert('Save failed — localStorage may be full (images are large). Try removing uploaded images.'); return false; }
}

function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (Array.isArray(source[key])) {
      target[key] = source[key];
    } else if (source[key] && typeof source[key] === 'object') {
      if (!target[key] || typeof target[key] !== 'object') target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}
