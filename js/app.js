// Load data
const scripts = [
  'js/data/packs.js',
  'js/data/new-packs.js',
  'js/data/strategy.js',
  'js/data/rpm.js',
  'js/data/editing.js',
  'js/data/channel.js',
  'js/data/schedule.js',
  'js/data/trends.js',
  'js/data/prompts.js',
  'js/data/monetize.js',
  'js/data/planner.js'
];

let loaded = 0;
scripts.forEach(src => {
  const s = document.createElement('script');
  s.src = src;
  s.onload = () => { loaded++; if (loaded === scripts.length) init(); };
  document.head.appendChild(s);
});

function init() {
  renderPacks();
  renderStrategy();
  renderRPM();
  renderEditing();
  renderChannel();
  renderSchedule();
  renderTrends();
  renderPrompts();
  renderMonetize();
  renderPlanner();
  setupNav();
  setupFadeIn();
}

// ===== RENDER PACKS =====
function renderPacks() {
  const grid = document.getElementById('packsGrid');
  grid.innerHTML = window.PACKS.map(p => `
    <div class="card ${p.featured ? 'card-featured' : ''}" id="pack-${p.id}">
      <span class="card-icon">${p.icon}</span>
      <span class="card-tag ${p.tagClass}">${p.tag}</span>
      <div class="rpm-row">
        <span class="rpm-meter ${p.rpmClass}">${p.rpmLabel}</span>
      </div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <h4>🎯 Target Celebrities</h4>
      <ul class="card-targets">
        ${p.targets.map(t => `<li><span class="emoji">▸</span><span class="target-name">${t.name}</span><span class="target-hook">${t.hook}</span></li>`).join('')}
      </ul>
      <h4>📈 High-RPM Tweaks</h4>
      <ul class="checklist">
        ${p.highRPM.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <h4>🎬 Edit Hacks</h4>
      <ul class="checklist">
        ${p.edits.map(e => `<li>${e}</li>`).join('')}
      </ul>
      ${p.zone === 'three-zone' ? renderThreeZone() : p.zone === 'spotlight' ? renderSpotlight() : p.zone === 'split-screen' ? renderSplitScreen() : ''}
    </div>
  `).join('');
}

function renderThreeZone() {
  return `
    <h4>📐 Zone Template</h4>
    <div class="zone-visual">
      <div class="zone-top">🟥 TOP 20%: HOOK<br>High-contrast text banner</div>
      <div class="zone-center">🟨 CENTER 60%: TRANSFORMED CLIP<br>Cropped → Mirrored → 1.05x speed</div>
      <div class="zone-bottom">🟩 BOTTOM 20%: ENGAGEMENT<br>Karaoke captions + watermark</div>
    </div>`;
}

function renderSpotlight() {
  return `
    <h4>📐 Spotlight Template</h4>
    <div class="zone-visual">
      <div class="zone-top" style="background:rgba(0,0,0,0.6);color:var(--text-secondary);">DARKENED 40% + SPOTLIGHT</div>
      <div class="zone-center" style="background:rgba(245,200,66,0.15);color:var(--accent-gold);">💡 GLOWING YELLOW CIRCLE<br>around key element</div>
      <div class="zone-bottom" style="color:var(--accent-neon);">🔍 ANALYSIS OVERLAY<br>Arrows + Measurements</div>
    </div>`;
}

function renderSplitScreen() {
  return `
    <h4>📐 Split-Screen Template</h4>
    <div class="split-visual">
      <div class="split-top">📺 OLD (2015)<br>Price tag overlay</div>
      <div class="split-bottom">📺 NOW (2026)<br>Price tag overlay</div>
    </div>
    <div class="progress-demo"><div class="progress-bar"></div></div>
    <p style="text-align:center;font-size:0.75rem;color:var(--text-muted);">Progress bar forces viewers to watch until end</p>`;
}

// ===== RENDER STRATEGY =====
function renderStrategy() {
  const grid = document.getElementById('strategyGrid');
  grid.innerHTML = window.STRATEGY.map(s => `
    <div class="strategy-card ${s.class}">
      <div class="strategy-second ${s.class}">SECOND ${s.second}</div>
      <div class="strategy-name">${s.name}</div>
      <div class="strategy-desc">${s.desc}</div>
      <ul class="strategy-tactics">
        ${s.tactics.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// ===== RENDER RPM =====
function renderRPM() {
  const grid = document.getElementById('rpmGrid');
  grid.innerHTML = window.RPM_DATA.map(r => `
    <div class="rpm-card">
      <h4>${r.title}</h4>
      <div class="rpm-value ${r.class}">${r.value}</div>
      <div class="rpm-label">${r.label}</div>
      <ul class="rpm-factors">
        ${r.factors.map(f => `<li>▸ ${f}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// ===== RENDER EDITING =====
function renderEditing() {
  const el = document.getElementById('editingContent');
  el.innerHTML = `
    <h3 style="font-family:var(--font-display);font-size:1.6rem;letter-spacing:1px;margin-bottom:1.5rem;">⚙️ Baseline Settings (Apply to EVERY Video)</h3>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Technique</th><th>Setting</th><th>Purpose</th></tr></thead>
        <tbody>
          ${window.EDITING_DATA.baseline.map(e => `<tr><td style="color:var(--accent-neon);font-weight:600;">${e.setting}</td><td style="color:var(--accent-gold);font-family:var(--font-mono);">${e.value}</td><td>${e.purpose}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="divider"></div>
    <h3 style="font-family:var(--font-display);font-size:1.6rem;letter-spacing:1px;margin-bottom:1.5rem;">🚀 Advanced Techniques</h3>
    <div class="accordion" id="editingAccordion">
      ${window.EDITING_DATA.advanced.map((a, i) => `
        <div class="accordion-item" data-index="${i}">
          <div class="accordion-header">
            <span>${a.title}</span>
            <span class="arrow">▼</span>
          </div>
          <div class="accordion-body">
            <div class="accordion-body-inner">${a.desc}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  setupAccordion('editingAccordion');
}

// ===== RENDER CHANNEL =====
function renderChannel() {
  const el = document.getElementById('channelContent');
  const c = window.CHANNEL_DATA;
  el.innerHTML = `
    <h3 style="font-family:var(--font-display);font-size:1.6rem;letter-spacing:1px;margin-bottom:0.5rem;">🏗️ Choose Your Lane</h3>
    <p style="color:var(--text-secondary);margin-bottom:2rem;font-size:0.9rem;">Your channel needs ONE unshakeable identity. Viewers subscribe to a promise, not a person. Do NOT mix lanes on one channel.</p>
    <div class="card-grid card-grid-4">
      ${c.lanes.map(l => `
        <div class="card">
          <span class="card-icon">${l.emoji}</span>
          <h3>${l.name}</h3>
          <p>${l.desc}</p>
          <div style="margin-top:0.5rem;">
            <span class="card-tag tag-finance">Packs: ${l.packs}</span>
            <span class="rpm-meter rpm-high" style="margin-left:0.5rem;">${l.rpmRange}</span>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="divider"></div>
    <div class="highlight-box">
      <h4>🏷️ Channel Naming Formula: ${c.namingFormula}</h4>
      <ul>${c.namingExamples.map(n => `<li>${n}</li>`).join('')}</ul>
    </div>
    <div class="highlight-box">
      <h4>🎨 Brand Consistency Rules</h4>
      <ul>
        <li>${c.branding.colors}</li>
        <li>${c.branding.font}</li>
        <li>${c.branding.watermark}</li>
        <li>${c.branding.endCard}</li>
      </ul>
    </div>
    <div class="divider"></div>
    <h3 style="font-family:var(--font-display);font-size:1.6rem;letter-spacing:1px;margin-bottom:1.5rem;">🗺️ The Roadmap</h3>
    <div class="timeline">
      ${c.roadmap.map(r => `
        <div class="timeline-item">
          <div class="timeline-phase">${r.phase}</div>
          <div class="timeline-days">${r.days}</div>
          <div class="timeline-content">
            <ul class="checklist">
              ${r.items.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ===== RENDER SCHEDULE =====
function renderSchedule() {
  const el = document.getElementById('scheduleContent');
  const s = window.SCHEDULE_DATA;
  el.innerHTML = `
    <h3 style="font-family:var(--font-display);font-size:1.6rem;letter-spacing:1px;margin-bottom:1.5rem;">📺 YouTube Shorts — 3x/Day</h3>
    <div class="schedule-grid">
      ${s.youtube.map(t => `
        <div class="schedule-slot">
          <div class="slot-time">${t.icon} ${t.time}</div>
          <div class="slot-label">${t.label}</div>
          <div class="slot-content">${t.content}</div>
          <div style="margin-top:0.75rem;font-size:0.8rem;color:var(--text-muted);">📅 ${t.days} • ${t.why}</div>
        </div>
      `).join('')}
    </div>
    <div class="divider"></div>
    <h3 style="font-family:var(--font-display);font-size:1.6rem;letter-spacing:1px;margin-bottom:1.5rem;">📱 TikTok — 2-3x/Day</h3>
    <div class="schedule-grid">
      ${s.tiktok.map(t => `
        <div class="schedule-slot">
          <div class="slot-time">${t.icon} ${t.time}</div>
          <div class="slot-label">${t.label}</div>
          <div class="slot-content">${t.content}</div>
          <div style="margin-top:0.75rem;font-size:0.8rem;color:var(--text-muted);">📅 ${t.days} • ${t.why}</div>
        </div>
      `).join('')}
    </div>
    <div class="divider"></div>
    <h3 style="font-family:var(--font-display);font-size:1.6rem;letter-spacing:1px;margin-bottom:1.5rem;">🌟 Bonus Windows</h3>
    <div class="card-grid card-grid-2">
      ${s.bonusWindows.map(b => `
        <div class="card">
          <h4 style="color:var(--accent-gold);">${b.time}</h4>
          <p><strong style="color:var(--text-primary);">${b.days}</strong> — ${b.why}</p>
        </div>
      `).join('')}
    </div>
    <div class="divider"></div>
    <div class="warning-box">
      <h4>⚠️ Consistency Rules (Non-Negotiable)</h4>
      <ul class="checklist">
        ${s.rules.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>
  `;
}

// ===== RENDER PROMPTS =====
function renderPrompts() {
  const el = document.getElementById('promptsContent');
  const cats = [...new Set(window.PROMPTS_DATA.map(p => p.category))];
  el.innerHTML = `
    <div class="tabs" id="promptTabs">
      ${cats.map((c, i) => `<button class="tab-btn ${i === 0 ? 'active' : ''}" data-tab="${c}">${c.toUpperCase()}</button>`).join('')}
    </div>
    ${cats.map((c, i) => `
      <div class="tab-content ${i === 0 ? 'active' : ''}" data-tab="${c}">
        ${window.PROMPTS_DATA.filter(p => p.category === c).map(p => `
          <div style="margin-bottom:2rem;">
            <span class="prompt-label">${p.label}</span>
            <h4 style="margin-bottom:0.5rem;color:var(--text-primary);">${p.title}</h4>
            <div class="prompt-block" id="prompt-${p.title.replace(/\s/g, '-')}">${escapeHtml(p.prompt)}<button class="copy-btn" onclick="copyPrompt(this)">COPY</button></div>
          </div>
        `).join('')}
      </div>
    `).join('')}
  `;
  setupTabs('promptTabs');
}

// ===== RENDER MONETIZE =====
function renderMonetize() {
  const el = document.getElementById('monetizeContent');
  el.innerHTML = `
    <div class="card-grid card-grid-3">
      ${window.MONETIZE_DATA.map(m => `
        <div class="card">
          <span class="card-icon">${m.icon}</span>
          <h3>${m.title}</h3>
          <div class="rpm-row">
            <span class="rpm-meter ${m.class === 'high' ? 'rpm-high' : m.class === 'mid' ? 'rpm-mid' : 'rpm-low'}">${m.rpmRange}</span>
          </div>
          <p>${m.desc}</p>
          <h4>💰 Tactics</h4>
          <ul class="checklist">
            ${m.tactics.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
    <div class="divider"></div>
    <div class="highlight-box">
      <h4>🔑 The Income Stack (Order of Implementation)</h4>
      <p>Don't try to do everything at once. Build your income streams in this exact order based on when each becomes viable:</p>
      <ul>
        <li><strong>Month 1-2:</strong> YouTube Ad Revenue only — focus on content quality and RPM optimization</li>
        <li><strong>Month 3-4:</strong> Add Affiliate Marketing — once you know which products your audience cares about</li>
        <li><strong>Month 5-6:</strong> Add Digital Products — your first template/preset pack based on what followers ask about</li>
        <li><strong>Month 6-8:</strong> Start seeking Sponsorships — once you have 10K+ subs and provable engagement</li>
        <li><strong>Month 8-10:</strong> Launch Community/Membership — once you have a loyal core audience</li>
        <li><strong>Month 10+:</strong> Course/Coaching — only after you've proven the model works with your own results</li>
      </ul>
    </div>
  `;
}

// ===== UTILITY FUNCTIONS =====
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function copyPrompt(btn) {
  const block = btn.parentElement;
  const text = block.textContent.replace('COPY', '').replace('COPIED!', '').trim();
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'COPIED!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'COPY';
      btn.classList.remove('copied');
    }, 2000);
  });
}

function setupAccordion(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.querySelectorAll('.accordion-header').forEach(h => {
    h.addEventListener('click', () => {
      const item = h.parentElement;
      const body = item.querySelector('.accordion-body');
      const inner = body.querySelector('.accordion-body-inner');
      if (item.classList.contains('open')) {
        item.classList.remove('open');
        body.style.maxHeight = '0';
      } else {
        item.classList.add('open');
        body.style.maxHeight = inner.scrollHeight + 'px';
      }
    });
  });
}

function setupTabs(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const parent = container.parentElement;
      parent.querySelectorAll('.tab-content').forEach(c => {
        c.classList.toggle('active', c.dataset.tab === tab);
      });
    });
  });
}

function setupNav() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  const links = document.querySelectorAll('.nav-links a, .mobile-nav a');

  toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    toggle.textContent = mobileNav.classList.contains('open') ? '✕' : '☰';
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggle.textContent = '☰';
      // Update active nav link
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      const href = link.getAttribute('href');
      document.querySelectorAll(`.nav-links a[href="${href}"]`).forEach(a => a.classList.add('active'));
    });
  });

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    // Update active nav based on scroll position
    const sections = document.querySelectorAll('.section, .hero');
    let current = '';
    sections.forEach(s => {
      const top = s.offsetTop - 100;
      if (window.scrollY >= top) current = s.id;
    });
    if (current) {
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) a.classList.add('active');
      });
    }
  });
}

function setupFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .strategy-card, .rpm-card, .schedule-slot, .accordion-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

// ===== MERGE NEW PACKS =====
const _origRenderPacks = renderPacks;
renderPacks = function() {
  // Merge new packs into PACKS array
  if (window.NEW_PACKS) {
    window.PACKS = window.PACKS.concat(window.NEW_PACKS);
  }
  _origRenderPacks();
};

// ===== RENDER TRENDS =====
function renderTrends() {
  const el = document.getElementById('trendsContent');
  if (!el || !window.TRENDS_DATA) return;
  const t = window.TRENDS_DATA;
  el.innerHTML = `
    <div class="highlight-box">
      <h4>&#9889; The Core Strategy</h4>
      <p>${t.strategy}</p>
    </div>
    <div class="divider"></div>
    <h3 style="font-family:var(--font-display);font-size:1.6rem;letter-spacing:1px;margin-bottom:1.5rem;">&#128308; The Non-Negotiable Rules</h3>
    <div class="warning-box">
      <h4>&#9888; Trend-Jacking Rules (Break These and You Waste the Trend)</h4>
      <ul class="checklist">
        ${t.rules.map(r => '<li>' + r + '</li>').join('')}
      </ul>
    </div>
    <div class="divider"></div>
    <h3 style="font-family:var(--font-display);font-size:1.6rem;letter-spacing:1px;margin-bottom:1.5rem;">&#127919; Trend Triggers — What to Watch For</h3>
    <div class="card-grid card-grid-3">
      ${t.triggers.map(tr => `
        <div class="card">
          <h4 style="color:var(--accent-gold);">${tr.event}</h4>
          <p>${tr.angle}</p>
          <div style="margin-top:0.75rem;">
            <span class="card-tag tag-finance">Pack: ${tr.pack}</span>
            <span class="rpm-meter rpm-high" style="margin-left:0.5rem;">Speed: ${tr.speed}</span>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="divider"></div>
    <h3 style="font-family:var(--font-display);font-size:1.6rem;letter-spacing:1px;margin-bottom:1rem;">&#128200; A/B Testing Framework</h3>
    <p style="color:var(--text-secondary);margin-bottom:1.5rem;font-size:0.9rem;">${t.abTesting.desc}</p>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Variable</th><th>Options to Test</th><th>Key Metric</th></tr></thead>
        <tbody>
          ${t.abTesting.variables.map(v => '<tr><td style="color:var(--accent-neon);font-weight:600;">' + v.variable + '</td><td>' + v.options + '</td><td style="color:var(--accent-gold);">' + v.metric + '</td></tr>').join('')}
        </tbody>
      </table>
    </div>
    <div class="highlight-box">
      <h4>&#128197; The 6-Week A/B Testing Calendar</h4>
      <ul>
        ${t.abTesting.method.map(m => '<li>' + m + '</li>').join('')}
      </ul>
    </div>
  `;
}

// ===== RENDER PLANNER =====
function renderPlanner() {
  if (!window.PLANNER_DATA) return;
  const data = window.PLANNER_DATA;
  const el = document.getElementById('plannerContent');
  const batchEl = document.getElementById('batchContent');
  const progressEl = document.getElementById('plannerProgress');
  const controlsEl = document.getElementById('plannerControls');

  // Load saved statuses from localStorage
  const saved = JSON.parse(localStorage.getItem('plannerStatus') || '{}');
  data.videos.forEach(v => {
    v.status = saved[v.id] || 'pending';
  });

  // Progress bar
  const completed = data.videos.filter(v => v.status === 'scheduled').length;
  const inProgress = data.videos.filter(v => v.status !== 'pending' && v.status !== 'scheduled').length;
  const pct = Math.round((completed / data.totalVideos) * 100);
  progressEl.innerHTML = `
    <div class="planner-progress-bar">
      <div class="planner-progress-fill" style="width:${pct}%"></div>
    </div>
    <div class="planner-progress-stats">
      <span class="stat-pending">&#9898; ${data.videos.filter(v=>v.status==='pending').length} Pending</span>
      <span class="stat-filmed">&#127909; ${data.videos.filter(v=>v.status==='filmed').length} Filmed</span>
      <span class="stat-edited">&#127903; ${data.videos.filter(v=>v.status==='edited').length} Edited</span>
      <span class="stat-captioned">&#128483; ${data.videos.filter(v=>v.status==='captioned').length} Captioned</span>
      <span class="stat-scheduled">&#128197; ${completed} Scheduled</span>
      <span class="stat-pct">${pct}% Complete</span>
    </div>
  `;

  // Filter controls
  controlsEl.innerHTML = `
    <div class="planner-filters">
      <button class="filter-btn active" data-filter="all">All (${data.totalVideos})</button>
      <button class="filter-btn" data-filter="pending">Pending</button>
      <button class="filter-btn" data-filter="filmed">Filmed</button>
      <button class="filter-btn" data-filter="edited">Edited</button>
      <button class="filter-btn" data-filter="captioned">Captioned</button>
      <button class="filter-btn" data-filter="scheduled">Scheduled</button>
      <button class="filter-btn filter-reset" data-filter="reset">&#128260; Reset All</button>
    </div>
  `;
  setupPlannerFilters();

  // Group videos by day
  const days = {};
  data.videos.forEach(v => {
    if (!days[v.day]) days[v.day] = [];
    days[v.day].push(v);
  });

  // Render day groups
  let html = '';
  Object.keys(days).sort((a,b) => a-b).forEach(day => {
    const dayVideos = days[day];
    const dayComplete = dayVideos.filter(v => v.status === 'scheduled').length;
    html += `
      <div class="planner-day" id="day-${day}">
        <div class="planner-day-header">
          <h3>&#128197; Day ${day} <span class="day-count">(${dayComplete}/${dayVideos.length} scheduled)</span></h3>
          <div class="day-progress">
            <div class="day-progress-fill" style="width:${Math.round(dayComplete/dayVideos.length*100)}%"></div>
          </div>
        </div>
        <div class="planner-videos">
          ${dayVideos.map(v => renderVideoCard(v)).join('')}
        </div>
      </div>
    `;
  });
  el.innerHTML = html;

  // Batch workflow
  batchEl.innerHTML = `
    <h3 style="font-family:var(--font-display);font-size:1.6rem;letter-spacing:1px;margin-bottom:0.5rem;">&#9889; ${data.batchWorkflow.title}</h3>
    <p style="color:var(--text-secondary);margin-bottom:1.5rem;font-size:0.9rem;">${data.batchWorkflow.desc}</p>
    <div class="batch-steps">
      ${data.batchWorkflow.steps.map((s, i) => `
        <div class="batch-step">
          <div class="batch-step-num">${i + 1}</div>
          <div class="batch-step-text">${s}</div>
        </div>
      `).join('')}
    </div>
    <div class="highlight-box" style="margin-top:2rem;">
      <h4>&#128176; The Math: Why 30 Videos Before Launch</h4>
      <p>YouTube's algorithm needs <strong>at least 3-5 videos</strong> to understand your channel and start recommending. By launching with 30 videos scheduled over 10 days (3/day), you give the algorithm a massive data set on day one. Most creators post 1 video and wait. You'll post 3/day for 10 days straight. The algorithm will see consistent output and start pushing your content within the first week. Your RPM will be higher from day 1 because advertisers see an active, consistent channel.</p>
    </div>
  `;

  // Setup status change handlers
  setupStatusHandlers();

  // Setup script toggle handlers
  setupScriptToggles();
}

function renderVideoCard(v) {
  const statusIcons = {
    pending: '&#9898;',
    filmed: '&#127909;',
    edited: '&#127903;',
    captioned: '&#128483;',
    scheduled: '&#128197;'
  };
  const statusLabels = {
    pending: 'Pending',
    filmed: 'Filmed',
    edited: 'Edited',
    captioned: 'Captioned',
    scheduled: 'Scheduled'
  };
  return `
    <div class="video-card ${v.status}" data-id="${v.id}" data-status="${v.status}">
      <div class="video-card-header">
        <span class="video-id">#${String(v.id).padStart(2,'0')}</span>
        <span class="video-pack">${v.pack}</span>
        <span class="rpm-meter ${v.rpmClass}">${v.rpm} RPM</span>
      </div>
      <div class="video-card-body">
        <div class="video-celeb">&#11088; ${v.celebrity}</div>
        <div class="video-hook">${v.hook}</div>
        <button class="script-toggle" data-video-id="${v.id}">&#128196; View Script</button>
        <div class="video-script" id="script-${v.id}" style="display:none;">
          <h4>&#127916; Full Script (0-60s)</h4>
          <p>${v.script}</p>
        </div>
      </div>
      <div class="video-card-footer">
        <div class="video-status-group">
          <select class="status-select" data-video-id="${v.id}">
            <option value="pending" ${v.status==='pending'?'selected':''}>&#9898; Pending</option>
            <option value="filmed" ${v.status==='filmed'?'selected':''}>&#127909; Filmed</option>
            <option value="edited" ${v.status==='edited'?'selected':''}>&#127903; Edited</option>
            <option value="captioned" ${v.status==='captioned'?'selected':''}>&#128483; Captioned</option>
            <option value="scheduled" ${v.status==='scheduled'?'selected':''}>&#128197; Scheduled</option>
          </select>
          <span class="video-slot">&#128336; ${v.slot}</span>
        </div>
        <div class="video-edits-toggle" data-video-id="${v.id}">
          <span>&#128295; ${v.edits.length} Edit Steps</span>
        </div>
        <div class="video-edits" id="edits-${v.id}" style="display:none;">
          <ul class="checklist">
            ${v.edits.map(e => '<li>'+e+'</li>').join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}

function setupStatusHandlers() {
  document.querySelectorAll('.status-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const id = parseInt(e.target.dataset.videoId);
      const newStatus = e.target.value;
      // Update data
      const video = window.PLANNER_DATA.videos.find(v => v.id === id);
      if (video) video.status = newStatus;
      // Save to localStorage
      const saved = JSON.parse(localStorage.getItem('plannerStatus') || '{}');
      saved[id] = newStatus;
      localStorage.setItem('plannerStatus', JSON.stringify(saved));
      // Update card class
      const card = e.target.closest('.video-card');
      card.dataset.status = newStatus;
      card.className = 'video-card ' + newStatus;
      // Re-render progress
      updateProgress();
    });
  });
}

function setupScriptToggles() {
  document.querySelectorAll('.script-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.videoId;
      const scriptEl = document.getElementById('script-' + id);
      const isOpen = scriptEl.style.display !== 'none';
      scriptEl.style.display = isOpen ? 'none' : 'block';
      btn.textContent = isOpen ? '📄 View Script' : '📄 Hide Script';
    });
  });
  document.querySelectorAll('.video-edits-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const id = toggle.dataset.videoId;
      const editsEl = document.getElementById('edits-' + id);
      const isOpen = editsEl.style.display !== 'none';
      editsEl.style.display = isOpen ? 'none' : 'block';
    });
  });
}

function setupPlannerFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      if (filter === 'reset') {
        if (confirm('Reset all video statuses to Pending?')) {
          localStorage.removeItem('plannerStatus');
          window.PLANNER_DATA.videos.forEach(v => v.status = 'pending');
          renderPlanner();
        }
        return;
      }
      // Toggle active class
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Show/hide cards
      document.querySelectorAll('.video-card').forEach(card => {
        if (filter === 'all') {
          card.style.display = '';
        } else {
          card.style.display = card.dataset.status === filter ? '' : 'none';
        }
      });
      // Show/hide day headers if all videos hidden
      document.querySelectorAll('.planner-day').forEach(dayEl => {
        const visibleCards = dayEl.querySelectorAll('.video-card:not([style*="display: none"])');
        dayEl.style.display = visibleCards.length === 0 ? 'none' : '';
      });
    });
  });
}

function updateProgress() {
  const data = window.PLANNER_DATA;
  const completed = data.videos.filter(v => v.status === 'scheduled').length;
  const pct = Math.round((completed / data.totalVideos) * 100);
  const progressEl = document.getElementById('plannerProgress');
  progressEl.innerHTML = `
    <div class="planner-progress-bar">
      <div class="planner-progress-fill" style="width:${pct}%"></div>
    </div>
    <div class="planner-progress-stats">
      <span class="stat-pending">&#9898; ${data.videos.filter(v=>v.status==='pending').length} Pending</span>
      <span class="stat-filmed">&#127909; ${data.videos.filter(v=>v.status==='filmed').length} Filmed</span>
      <span class="stat-edited">&#127903; ${data.videos.filter(v=>v.status==='edited').length} Edited</span>
      <span class="stat-captioned">&#128483; ${data.videos.filter(v=>v.status==='captioned').length} Captioned</span>
      <span class="stat-scheduled">&#128197; ${completed} Scheduled</span>
      <span class="stat-pct">${pct}% Complete</span>
    </div>
  `;
  // Update day headers
  const days = {};
  data.videos.forEach(v => {
    if (!days[v.day]) days[v.day] = [];
    days[v.day].push(v);
  });
  Object.keys(days).forEach(day => {
    const dayEl = document.getElementById('day-' + day);
    if (!dayEl) return;
    const dayVideos = days[day];
    const dayComplete = dayVideos.filter(v => v.status === 'scheduled').length;
    const header = dayEl.querySelector('.planner-day-header');
    if (header) {
      header.querySelector('.day-count').textContent = `(${dayComplete}/${dayVideos.length} scheduled)`;
      const fill = header.querySelector('.day-progress-fill');
      if (fill) fill.style.width = Math.round(dayComplete/dayVideos.length*100) + '%';
    }
  });
}
