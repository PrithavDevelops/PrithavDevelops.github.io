/**
 * Portfolio Controller Script — prithav
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = typeof portfolioConfig !== 'undefined' ? portfolioConfig : {};

  initProfile(config);
  initGreetings(config.greetings || ["Hey, I'm prithav."]);
  renderProjects(config.projects || []);
  renderSkills(config.skills || []);
  renderSocials(config.socials || []);
  initThemeSwitcher();
  initNepaliEasterEgg(); // 🇳🇵
});

/**
 * Populate Profile Header from config
 */
function initProfile(config) {
  if (config.title) document.title = config.title;

  if (config.avatarUrl) {
    const avatarImg = document.getElementById('avatar-img');
    if (avatarImg) avatarImg.src = config.avatarUrl;
  }

  if (config.handle) {
    const handleEl = document.getElementById('user-handle');
    if (handleEl) handleEl.textContent = `@${config.handle}`;
  }

  if (config.floatingBadge) {
    const badgeText = document.getElementById('dev-badge-text');
    const badgeEmoji = document.getElementById('dev-badge-emoji');
    if (badgeText) badgeText.textContent = config.floatingBadge.text;
    if (badgeEmoji) badgeEmoji.textContent = config.floatingBadge.emoji;
  }
}

/**
 * Rotating Greetings Animation Ticker
 */
function initGreetings(greetings) {
  const container = document.getElementById('greeting-wrapper');
  if (!container || greetings.length === 0) return;

  container.innerHTML = '';
  greetings.forEach((text, index) => {
    const span = document.createElement('span');
    span.className = `greeting-item ${index === 0 ? 'active' : ''}`;
    span.textContent = text;
    container.appendChild(span);
  });

  const items = container.querySelectorAll('.greeting-item');
  if (items.length <= 1) return;

  let currentIndex = 0;
  setInterval(() => {
    items[currentIndex].classList.remove('active');
    items[currentIndex].classList.add('previous');
    currentIndex = (currentIndex + 1) % items.length;
    items.forEach((item, idx) => { if (idx !== currentIndex) item.classList.remove('previous'); });
    items[currentIndex].classList.remove('previous');
    items[currentIndex].classList.add('active');
  }, 2500);
}

/**
 * Render Projects Grid
 */
function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = '';
  projects.forEach((proj) => {
    const card = document.createElement('a');
    card.className = 'project-card';
    card.href = proj.github || proj.link || '#';
    card.target = '_blank';
    card.rel = 'noopener noreferrer';

    const tagsHtml = (proj.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('');

    card.innerHTML = `
      <div class="project-header">
        <span class="project-title">${proj.title}</span>
        <span class="project-status ${proj.status || 'Active'}">${proj.status || 'Active'}</span>
      </div>
      <div class="project-desc">${proj.description}</div>
      <div class="project-tags">${tagsHtml}</div>
    `;
    container.appendChild(card);
  });
}

/**
 * Render Skills Pills with level indicators
 * Each skill: { label, level } where level is 'proficient' | 'learning' | 'planned'
 */
function renderSkills(skills) {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = '';

  // Support both plain strings and { label, level } objects
  skills.forEach((skill) => {
    const pill = document.createElement('span');
    const label = typeof skill === 'string' ? skill : skill.label;
    const level = typeof skill === 'string' ? null : skill.level;

    pill.className = 'skill-pill';
    if (level) pill.setAttribute('data-level', level);

    let dot = '';
    if (level === 'proficient') dot = '<span class="skill-dot proficient" title="Proficient">●</span> ';
    else if (level === 'learning') dot = '<span class="skill-dot learning" title="Learning">●</span> ';
    else if (level === 'planned') dot = '<span class="skill-dot planned" title="Planning to learn">●</span> ';

    pill.innerHTML = dot + label;
    container.appendChild(pill);
  });
}

/**
 * Render Social Links
 */
function renderSocials(socials) {
  const container = document.getElementById('socials-container');
  if (!container) return;

  container.innerHTML = '';
  socials.forEach((social) => {
    const link = document.createElement('a');
    link.className = 'social-link';
    link.href = social.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = social.name;
    container.appendChild(link);
  });
}

/**
 * Theme Switcher (Dark / OLED / Light)
 */
function initThemeSwitcher() {
  const toggleBtn = document.getElementById('theme-toggle');
  const iconEl = document.getElementById('theme-icon');
  const labelEl = document.getElementById('theme-label');
  const htmlEl = document.documentElement;

  const themes = [
    { name: 'dark', icon: '🌙', label: 'Dark' },
    { name: 'oled', icon: '⬛', label: 'OLED' },
    { name: 'light', icon: '☀️', label: 'Light' }
  ];

  let currentIndex = 0;
  const saved = localStorage.getItem('portfolio_theme');
  if (saved) {
    const found = themes.findIndex(t => t.name === saved);
    if (found !== -1) currentIndex = found;
  }

  function applyTheme(index) {
    const theme = themes[index];
    htmlEl.setAttribute('data-theme', theme.name);
    if (iconEl) iconEl.textContent = theme.icon;
    if (labelEl) labelEl.textContent = theme.label;
    localStorage.setItem('portfolio_theme', theme.name);
  }

  applyTheme(currentIndex);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % themes.length;
      applyTheme(currentIndex);
    });
  }
}

/**
 * 🇳🇵 Nepali Easter Egg
 * Trigger: Konami Code (↑↑↓↓←→←→BA) OR type "nepal" anywhere on the page
 */
function initNepaliEasterEgg() {
  // Inject styles once
  const style = document.createElement('style');
  style.textContent = `
    #nepal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.88);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      cursor: pointer;
      animation: nepal-fadein 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes nepal-fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    #nepal-card {
      text-align: center;
      padding: 40px 32px;
      max-width: 400px;
      width: 90%;
      animation: nepal-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    @keyframes nepal-pop {
      from { transform: scale(0.7); opacity: 0; }
      to   { transform: scale(1);   opacity: 1; }
    }
    #nepal-flag {
      font-size: 72px;
      line-height: 1;
      margin-bottom: 16px;
      filter: drop-shadow(0 0 30px rgba(255,255,255,0.15));
    }
    #nepal-namaste {
      font-family: 'Inter', sans-serif;
      font-size: 42px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 8px;
      letter-spacing: -0.5px;
    }
    #nepal-sub {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #7a7672;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 24px;
    }
    #nepal-fact {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      color: #c5bdb2;
      line-height: 1.65;
      margin: 0 auto 20px auto;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 10px;
      padding: 14px 18px;
    }
    #nepal-hint {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #3a3836;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }
    @keyframes nepal-fall {
      0%   { transform: translateY(0) rotate(0deg);      opacity: 1; }
      100% { transform: translateY(110vh) rotate(360deg); opacity: 0.2; }
    }
  `;
  document.head.appendChild(style);

  // Fun facts about Nepal
  const facts = [
    'Nepal has the world\'s only non-rectangular national flag. 📐',
    'Mount Everest — the highest point on Earth — is in Nepal. 🏔️',
    'Nepal is the birthplace of Siddhartha Gautama, the Buddha. ☸️',
    'Nepal was never colonised by a European power. 🛡️',
    'Nepal has 8 of the world\'s 10 tallest mountains. ⛰️'
  ];

  // Konami Code sequence
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiProgress = 0;

  // Secret word buffer
  const SECRET = 'nepal';
  let wordBuffer = '';

  document.addEventListener('keydown', (e) => {
    // --- Konami ---
    if (e.key === KONAMI[konamiProgress]) {
      konamiProgress++;
      if (konamiProgress === KONAMI.length) {
        triggerEasterEgg();
        konamiProgress = 0;
      }
    } else {
      konamiProgress = 0;
    }

    // --- Secret word ---
    if (e.key.length === 1) {
      wordBuffer = (wordBuffer + e.key.toLowerCase()).slice(-SECRET.length);
      if (wordBuffer === SECRET) {
        triggerEasterEgg();
        wordBuffer = '';
      }
    }
  });

  function triggerEasterEgg() {
    if (document.getElementById('nepal-overlay')) return;

    const fact = facts[Math.floor(Math.random() * facts.length)];

    const overlay = document.createElement('div');
    overlay.id = 'nepal-overlay';
    overlay.innerHTML = `
      <div id="nepal-card">
        <div id="nepal-flag">🇳🇵</div>
        <div id="nepal-namaste">नमस्ते!</div>
        <div id="nepal-sub">you found the easter egg</div>
        <div id="nepal-fact">${fact}</div>
        <div id="nepal-hint">click anywhere · esc to close</div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Rain confetti
    for (let i = 0; i < 36; i++) {
      const piece = document.createElement('span');
      piece.textContent = Math.random() > 0.5 ? '🇳🇵' : '🏔️';
      piece.style.cssText = `
        position: fixed;
        top: -60px;
        left: ${Math.random() * 100}vw;
        font-size: ${14 + Math.random() * 16}px;
        opacity: 0;
        animation: nepal-fall ${2.5 + Math.random() * 3}s ease-in ${Math.random() * 1.8}s forwards;
        pointer-events: none;
        z-index: 10001;
      `;
      overlay.appendChild(piece);
    }

    const dismiss = () => {
      overlay.style.transition = 'opacity 0.3s ease';
      overlay.style.opacity = '0';
      setTimeout(() => overlay.remove(), 320);
    };

    overlay.addEventListener('click', dismiss);
    document.addEventListener('keydown', function onEsc(e) {
      if (e.key === 'Escape') { dismiss(); document.removeEventListener('keydown', onEsc); }
    }, { once: true });

    setTimeout(dismiss, 7000);
  }
}

