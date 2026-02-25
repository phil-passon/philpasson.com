const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('lang') || 'de';
let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    if (themeToggle) themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', theme);
}

function applyLanguage(lang) {
    currentLang = lang;
    if (langToggle) langToggle.textContent = lang === 'de' ? '🇬🇧' : '🇩🇪';
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroTitle && heroSubtitle) {
        if (lang === 'en') {
            heroTitle.textContent = "Hey, I'm Phil Passon! 👋";
            heroSubtitle.textContent = "Dual Student in Business Informatics";
        } else {
            heroTitle.textContent = "Hey, ich bin Phil Passon! 👋";
            heroSubtitle.textContent = "Dualer Student in Wirtschaftsinformatik";
        }
    }
}

applyTheme(currentTheme);
applyLanguage(currentLang);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
        applyTheme(activeTheme === 'dark' ? 'light' : 'dark');
    });
}

if (langToggle) {
    langToggle.addEventListener('click', () => {
        applyLanguage(currentLang === 'de' ? 'en' : 'de');
    });
}

// --- Dropdown Logik Fix ---
const emailBtn = document.getElementById('email-main-btn');
const emailDropdown = document.getElementById('email-dropdown');
const socialBtn = document.getElementById('socials-main-btn');
const socialDropdown = document.getElementById('socials-dropdown');

// Email Dropdown Toggle
if (emailBtn && emailDropdown) {
    emailBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (socialDropdown) socialDropdown.classList.remove('show');
        emailDropdown.classList.toggle('show');
    });
}

// Socials Dropdown Toggle (Explizit getrennt für maximale Stabilität)
if (socialBtn && socialDropdown) {
    socialBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (emailDropdown) emailDropdown.classList.remove('show');
        socialDropdown.classList.toggle('show');
    });
}

// Schließen beim Klick außerhalb
window.addEventListener('click', () => {
    if (emailDropdown) emailDropdown.classList.remove('show');
    if (socialDropdown) socialDropdown.classList.remove('show');
});

window.copyEmail = function() {
    if (!emailBtn) return;
    navigator.clipboard.writeText('me@philpasson.com').then(() => {
        const original = emailBtn.innerHTML;
        emailBtn.textContent = currentLang === 'en' ? 'Copied!' : 'Kopiert!';
        setTimeout(() => emailBtn.innerHTML = original, 2000);
    });
};

// Galerie Logik
const gallery = document.getElementById('gallery');
const reshuffleBtn = document.getElementById('reshuffle-btn');
const totalImages = 31;

function shuffleAndDisplay() {
    if (!gallery) return;
    let indices = Array.from({length: totalImages}, (_, i) => i + 1);
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    gallery.innerHTML = '';
    const isMobile = window.innerWidth <= 768;
    const limit = isMobile ? 8 : 9;
    indices.slice(0, limit).forEach(num => {
        const img = document.createElement('img');
        img.src = `pics/pic${num}.jpg`;
        img.className = "gallery-img";
        img.loading = "lazy";
        gallery.appendChild(img);
    });
}

if (gallery) shuffleAndDisplay();
if (reshuffleBtn) reshuffleBtn.addEventListener('click', shuffleAndDisplay);