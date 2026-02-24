const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const emailBtn = document.getElementById('email-main-btn');
const emailDropdown = document.getElementById('email-dropdown');
const socialBtn = document.getElementById('socials-main-btn');
const socialDropdown = document.getElementById('socials-dropdown');

let currentLang = 'de';

themeToggle.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.textContent = isDark ? '🌙' : '☀️';
});

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'de' ? 'en' : 'de';
    langToggle.textContent = currentLang === 'de' ? '🇬🇧' : '🇩🇪';

    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });

    if (currentLang === 'en') {
        document.getElementById('hero-title').textContent = "Hey, I'm Phil Passon! 👋";
        document.getElementById('hero-subtitle').textContent = "Dual Student in Business Informatics";
        document.getElementById('about-text').textContent = "From early on, I was fascinated not only by the design of digital media...";
        document.getElementById('connect-text').textContent = "Just send me a message if you have questions or want to connect!";
        document.getElementById('open-client-text').innerHTML = '<i class="fas fa-envelope-open"></i> Open Client';
        document.getElementById('copy-mail-text').innerHTML = '<i class="fas fa-copy"></i> Copy Address';
    } else {
        document.getElementById('hero-title').textContent = "Hey, ich bin Phil Passon! 👋";
        document.getElementById('hero-subtitle').textContent = "Dualer Student in Wirtschaftsinformatik";
        document.getElementById('about-text').textContent = "Schon früh hat mich nicht nur die Gestaltung digitaler Medien fasziniert...";
        document.getElementById('connect-text').textContent = "Schreib mir einfach, wenn du Fragen hast oder dich vernetzen willst!";
        document.getElementById('open-client-text').innerHTML = '<i class="fas fa-envelope-open"></i> Client öffnen';
        document.getElementById('copy-mail-text').innerHTML = '<i class="fas fa-copy"></i> Adresse kopieren';
    }
});

emailBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    socialDropdown.classList.remove('show');
    emailDropdown.classList.toggle('show');
});

socialBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    emailDropdown.classList.remove('show');
    socialDropdown.classList.toggle('show');
});

window.addEventListener('click', () => {
    emailDropdown.classList.remove('show');
    socialDropdown.classList.remove('show');
});

window.copyEmail = function() {
    const email = 'me@philpasson.com';
    navigator.clipboard.writeText(email).then(() => {
        const originalBtnHTML = emailBtn.innerHTML;
        emailBtn.textContent = currentLang === 'en' ? 'Copied!' : 'Kopiert!';
        emailBtn.style.background = '#28a745';

        setTimeout(() => {
            emailBtn.innerHTML = originalBtnHTML;
            emailBtn.style.background = 'var(--primary)';
        }, 2000);
    });
};