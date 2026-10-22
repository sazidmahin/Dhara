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

/* sidebar */
function sidebar(active, extra) {
  const ic = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h11a3 3 0 0 1 3 3v12H7a3 3 0 0 1-3-3z"/><path d="M8 9h6M8 13h6"/></svg>',
    hist: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5M12 8v4l3 2"/></svg>'
  };
  const a = (href, key, icon, text) => `<a href="${href}" class="${active === key ? 'on' : ''}">${ic[icon]}${text}</a>`;
  document.querySelector('.side').innerHTML = `
    <a class="brand" href="index.html">ধারা<small>বাংলাদেশের আইন, সঠিক তারিখে</small></a>
    <nav class="nav">${a('index.html', 'search', 'search', 'আইন অনুসন্ধান')}${a('provision.html', 'prov', 'book', 'ধারা ব্রাউজার')}${a('history.html', 'hist', 'hist', 'অনুসন্ধানের ইতিহাস')}</nav>
    ${extra || ''}
    <div class="foot">আইনি পরামর্শ নয়। প্রতিটি উত্তর মূল ধারার সাথে মিলিয়ে দেখুন।</div>`;
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
