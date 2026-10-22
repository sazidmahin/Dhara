/* ধারা মক: সব আইন, ধারা, তারিখ ও লেখা কাল্পনিক উদাহরণ */
const bn = s => String(s).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
const MONTHS = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const fmt = iso => { const [y, m, d] = iso.split('-'); return bn(+d) + ' ' + MONTHS[+m - 1] + ' ' + bn(y); };
const fmtEn = iso => { const [y, m, d] = iso.split('-'); return (+d) + ' ' + MONTHS_EN[+m - 1] + ' ' + y; };
const TODAY = '2026-09-25';

const ACT = { bn: 'নমুনা শ্রম ও মজুরি আইন, ২০০৬', en: 'Sample Labour and Wages Act, 2006', id: 'act_0042' };

/* lineage: high | medium | none */
const SECTIONS = {
  '46': {
    num: '৪৬', chapter: 'অধ্যায় ৪: মাতৃত্ব কল্যাণ সুবিধা',
    title: { bn: 'মাতৃত্ব ছুটির মেয়াদ', en: 'Period of maternity leave' },
    lineage: 'medium',
    versions: [
      { key: 'old', from: '2006-10-11', to: '2018-09-17', by: { bn: 'মূল আইন', en: 'Original Act' },
        bn: 'কোন নারী শ্রমিক [[leave:সন্তান প্রসবের পূর্বে ছয় সপ্তাহ এবং পরে ছয় সপ্তাহ, মোট বারো সপ্তাহ মাতৃত্ব ছুটি]] পাইবেন।',
        foot: 'মূল আইনের লেখা। পাদটীকা অনুযায়ী ১৮ সেপ্টেম্বর ২০১৮ থেকে এই লেখা প্রতিস্থাপিত হয়েছে।',
        en: 'A woman worker shall be entitled to [[leave:maternity leave for six weeks before and six weeks after delivery, twelve weeks in total]].' },
      { key: 'cur', from: '2018-09-18', to: null, by: { bn: 'নমুনা (সংশোধন) আইন, ২০১৮', en: 'Sample (Amendment) Act, 2018' },
        bn: 'কোন নারী শ্রমিক [[leave:সন্তান প্রসবের পূর্বে আট সপ্তাহ এবং পরে আট সপ্তাহ, মোট ষোল সপ্তাহ মাতৃত্ব ছুটি]] পাইবেন।',
        foot: '২০১৮ সনের ১৫ নং আইনের ৮ ধারাবলে "ছয়" ও "বারো" শব্দের পরিবর্তে যথাক্রমে "আট" ও "ষোল" শব্দ প্রতিস্থাপিত। পাদটীকায় কার্যকর হওয়ার তারিখ উল্লেখ নেই, তারিখটি সংশোধক আইনের প্রকাশ থেকে নির্ণীত।',
        en: 'A woman worker shall be entitled to [[leave:maternity leave for eight weeks before and eight weeks after delivery, sixteen weeks in total]].' }
    ],
    diff: {
      bn: 'কোন নারী শ্রমিক সন্তান প্রসবের পূর্বে <del>ছয়</del> <ins>আট</ins> সপ্তাহ এবং পরে <del>ছয়</del> <ins>আট</ins> সপ্তাহ, মোট <del>বারো</del> <ins>ষোল</ins> সপ্তাহ মাতৃত্ব ছুটি পাইবেন।',
      en: 'A woman worker shall be entitled to maternity leave for <del>six</del> <ins>eight</ins> weeks before and <del>six</del> <ins>eight</ins> weeks after delivery, <del>twelve</del> <ins>sixteen</ins> weeks in total.'
    }
  },
  '123': {
    num: '১২৩', chapter: 'অধ্যায় ১০: মজুরি ও উহার পরিশোধ',
    title: { bn: 'মজুরি পরিশোধের সময়', en: 'Time of payment of wages' },
    lineage: 'high',
    versions: [
      { key: 'old', from: '2006-10-11', to: '2013-07-21', by: { bn: 'মূল আইন', en: 'Original Act' },
        bn: '[[time:মজুরি-মেয়াদ শেষ হওয়ার পর সপ্তম কর্মদিবস অতিক্রান্ত হওয়ার পূর্বে শ্রমিকের মজুরি পরিশোধ করিতে হইবে]]।',
        foot: 'মূল আইনের লেখা। পাদটীকা অনুযায়ী ২২ জুলাই ২০১৩ থেকে এই লেখা প্রতিস্থাপিত হয়েছে।',
        en: '[[time:The wages of a worker shall be paid before the expiry of the seventh working day after the last day of the wage period]].' },
      { key: 'cur', from: '2013-07-22', to: null, by: { bn: 'নমুনা (সংশোধন) আইন, ২০১৩', en: 'Sample (Amendment) Act, 2013' },
        bn: '[[time:মজুরি-মেয়াদ শেষ হওয়ার পর পঞ্চম কর্মদিবস অতিক্রান্ত হওয়ার পূর্বে শ্রমিকের মজুরি পরিশোধ করিতে হইবে]], এবং [[bank:তাহা ব্যাংক হিসাবের মাধ্যমেও পরিশোধ করা যাইবে]]।',
        foot: '২০১৩ সনের ৩০ নং আইনের ১২ ধারাবলে "সপ্তম" শব্দের পরিবর্তে "পঞ্চম" শব্দ প্রতিস্থাপিত এবং শেষে নতুন অংশ সংযোজিত। কার্যকর: ২২ জুলাই ২০১৩।',
        en: '[[time:The wages of a worker shall be paid before the expiry of the fifth working day after the last day of the wage period]], and [[bank:may also be paid through a bank account]].' }
    ],
    diff: {
      bn: 'মজুরি-মেয়াদ শেষ হওয়ার পর <del>সপ্তম</del> <ins>পঞ্চম</ins> কর্মদিবস অতিক্রান্ত হওয়ার পূর্বে শ্রমিকের মজুরি পরিশোধ করিতে হইবে<del>।</del><ins>, এবং তাহা ব্যাংক হিসাবের মাধ্যমেও পরিশোধ করা যাইবে।</ins>',
      en: 'The wages of a worker shall be paid before the expiry of the <del>seventh</del> <ins>fifth</ins> working day after the last day of the wage period<del>.</del><ins>, and may also be paid through a bank account.</ins>'
    }
  },
  '124': {
    num: '১২৪', chapter: 'অধ্যায় ১০: মজুরি ও উহার পরিশোধ',
    title: { bn: 'চাকুরি অবসানে পাওনা পরিশোধ', en: 'Payment of dues on termination' },
    lineage: 'none',
    versions: [
      { key: 'cur', from: '2006-10-11', to: null, by: { bn: 'অজানা', en: 'Unknown' },
        bn: '[[dues:চাকুরির অবসান হইলে শ্রমিকের সকল পাওনা অবসানের তারিখ হইতে ত্রিশ কর্মদিবসের মধ্যে পরিশোধ করিতে হইবে]]।',
        foot: 'এই ধারায় কোনো সংশোধনী পাদটীকা পাওয়া যায়নি। তাই ধারাটি কখনো সংশোধিত হয়েছে কিনা নিশ্চিত নয়।',
        en: '[[dues:On termination of employment, all dues of the worker shall be paid within thirty working days from the date of termination]].' }
    ],
    diff: null
  }
};

const LINEAGE = {
  high: { cls: 'hi', bn: 'সংশোধন-ইতিহাস: উচ্চ নির্ভরযোগ্যতা' },
  medium: { cls: 'mid', bn: 'সংশোধন-ইতিহাস: মাঝারি নির্ভরযোগ্যতা' },
  none: { cls: 'warn', bn: 'সংশোধন-ইতিহাস পাওয়া যায়নি' }
};

/* [[key:text]] marks the exact span a citation relies on */
const mk = t => t.replace(/\[\[(\w+):([^\]]+)\]\]/g, '<span class="qs" data-k="$1">$2</span>');
const srcUrl = id => `bdlaws.minlaw.gov.bd/act-0042/section-${id}`;
const amendAct = v => v.key === 'old' ? 'মূল আইন' : v.by.bn;

function versionAt(secId, date) {
  const s = SECTIONS[secId];
  return s.versions.find(v => v.from <= date && (!v.to || date <= v.to)) || s.versions[s.versions.length - 1];
}

/* example queries: kind = ok | time | warn | no (drives the dot colour) */
const EXAMPLES = [
  { q: 'মজুরি কত দিনের মধ্যে দিতে হবে?', d: TODAY, kind: 'ok', label: 'বর্তমান আইনে প্রশ্ন' },
  { q: 'মজুরি কত দিনের মধ্যে দিতে হবে?', d: '2010-03-15', kind: 'time', label: 'একই প্রশ্ন, ২০১০ সালের তারিখে' },
  { q: 'How many weeks of maternity leave does a worker get?', d: TODAY, kind: 'ok', label: 'ইংরেজিতে প্রশ্ন' },
  { q: 'মাতৃত্ব ছুটি কত সপ্তাহ?', d: '2015-06-01', kind: 'time', label: 'মাতৃত্ব ছুটি, ২০১৫ সালে' },
  { q: 'চাকরি শেষ হলে পাওনা কবে দিতে হয়?', d: TODAY, kind: 'warn', label: 'ইতিহাস অনুপস্থিত সতর্কতা' },
  { q: 'সাইবার অপরাধে জামিনের শর্ত কী?', d: TODAY, kind: 'no', label: 'ভিত্তি না থাকলে উত্তর নয়' },
  { q: 'আমার মজুরির মামলায় আমি কি জিতব?', d: TODAY, kind: 'no', label: 'মামলার ফলাফল অনুমান নয়' }
];

/* sidebar: full application navigation */
const NAV = [
  { k: 'home', href: 'home.html', t: 'প্ল্যাটফর্ম পরিচিতি', ic: 'home' },
  { g: 'আইনি ইঞ্জিন' },
  { k: 'search', href: 'index.html', t: 'আইন অনুসন্ধান', ic: 'search', p: 1 },
  { k: 'prov', href: 'provision.html', t: 'ধারা ব্রাউজার', ic: 'book', p: 1 },
  { k: 'hist', href: 'history.html', t: 'অনুসন্ধানের ইতিহাস', ic: 'hist', p: 1 },
  { g: 'নাগরিক' },
  { k: 'citizen', href: 'citizen.html', t: 'পথনির্দেশ ও আবেদন', ic: 'user', p: 1 },
  { g: 'লিগ্যাল এইড অফিসার' },
  { k: 'lao', href: 'lao.html', t: 'ড্যাশবোর্ড', ic: 'grid', p: 2 },
  { k: 'laocase', href: 'lao-case.html', t: 'কেস: মধ্যস্থতা', ic: 'folder', p: 2 },
  { g: 'পাবলিক প্রসিকিউটর' },
  { k: 'pp', href: 'pp.html', t: 'ড্যাশবোর্ড ও কজলিস্ট', ic: 'grid', p: 2 },
  { k: 'ppcase', href: 'pp-case.html', t: 'কেস: ফৌজদারি', ic: 'folder', p: 2 },
  { g: 'প্রশাসন' },
  { k: 'admin', href: 'admin.html', t: 'রিপোর্ট ও অডিট', ic: 'chart', p: 3 }
];
const ICONS = {
  home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  book: '<path d="M4 5h11a3 3 0 0 1 3 3v12H7a3 3 0 0 1-3-3z"/><path d="M8 9h6M8 13h6"/>',
  hist: '<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5M12 8v4l3 2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'
};
function sidebar(active, extra) {
  const nav = NAV.map(n => n.g ? `<div class="grp">${n.g}</div>` :
    `<a href="${n.href}" class="${active === n.k ? 'on' : ''}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${ICONS[n.ic]}</svg>${n.t}${n.p ? `<i class="pd pd${n.p}" title="পর্যায় ${bn(n.p)}"></i>` : ''}</a>`).join('');
  document.querySelector('.side').innerHTML = `
    <a class="brand" href="home.html"><span class="logo">ধ</span><span>ধারা<small>আইন, সঠিক তারিখে</small></span></a>
    <nav class="nav">${nav}</nav>
    ${extra || ''}
    <div class="scopebox">
      <div class="row"><label class="switch"><input type="checkbox" id="scopeT"><span></span></label>শুধু এই অনুদানের ফিচার</div>
      <div class="lg"><span><i class="pd1"></i>এই অনুদানে (৪ মাস)</span><span><i class="pd2"></i>পর্যায় ২</span><span><i class="pd3"></i>পর্যায় ৩</span></div>
    </div>
    <div class="foot">মক প্রদর্শনী। আইনি পরামর্শ নয়।</div>`;
  const t = document.getElementById('scopeT');
  let on = false; try { on = localStorage.getItem('dhara-scope') === '1'; } catch (e) {}
  t.checked = on; document.body.classList.toggle('scope-only', on);
  t.addEventListener('change', () => { document.body.classList.toggle('scope-only', t.checked); try { localStorage.setItem('dhara-scope', t.checked ? '1' : '0'); } catch (e) {} });
}
const PH = n => `<span class="ph ph${n}">${n === 1 ? 'এই অনুদানে' : 'পর্যায় ' + bn(n)}</span>`;
function tabs(root) {
  const r = root || document;
  r.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => showTab(t.dataset.t)));
}
function showTab(name) {
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('on', t.dataset.t === name));
  document.querySelectorAll('.tabpanel').forEach(p => p.classList.toggle('on', p.id === 'tp-' + name));
}
const wait = ms => new Promise(r => setTimeout(r, ms));
function demo(steps, next, nextLabel) {
  const t = Tour(steps, { lastLabel: nextLabel || 'পরের অংশে যান', onLast: () => { location.href = next === 'home.html' ? next : next + (next.includes('?') ? '&' : '?') + 'demo=1'; } });
  const b = document.getElementById('tourbtn'); if (b) b.addEventListener('click', t.start);
  if (new URLSearchParams(location.search).has('demo')) setTimeout(t.start, 350);
  return t;
}

/* guided tour engine */
function Tour(steps, opts = {}) {
  const box = document.createElement('div');
  box.className = 'tour'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-live', 'polite');
  document.body.appendChild(box);
  let i = 0, spotEl = null;
  const clear = () => { if (spotEl) spotEl.classList.remove('spot'); spotEl = null; };
  async function show(n) {
    i = n; clear();
    const s = steps[i];
    box.innerHTML = `<div class="prog">${steps.map((_, k) => `<i class="${k <= i ? 'on' : ''}"></i>`).join('')}</div>
      <p class="cnt">ধাপ ${bn(i + 1)} / ${bn(steps.length)}</p><h3>${s.t}</h3><p>${s.p}</p>
      <div class="btns"><button class="x" type="button">ট্যুর বন্ধ</button>${i ? '<button class="pv" type="button">আগের ধাপ</button>' : ''}
      <button class="nx" type="button">${i === steps.length - 1 ? (opts.lastLabel || 'শেষ করুন') : 'পরের ধাপ'}</button></div>`;
    box.classList.add('show');
    box.querySelector('.x').onclick = end;
    const pv = box.querySelector('.pv'); if (pv) pv.onclick = () => show(i - 1);
    box.querySelector('.nx').onclick = () => (i === steps.length - 1 ? (opts.onLast ? opts.onLast() : end()) : show(i + 1));
    if (s.do) await s.do();
    if (s.el) {
      const el = typeof s.el === 'function' ? s.el() : document.querySelector(s.el);
      if (el) { spotEl = el; el.classList.add('spot'); el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    }
  }
  function end() { clear(); box.classList.remove('show'); }
  return { start: () => show(0), end };
}
