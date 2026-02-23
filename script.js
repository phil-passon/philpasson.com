const langToggle = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');
let currentLang = 'de';

const translations = {
    en: {
        heroTitle: "Hey, I'm Phil Passon! 👋",
        heroSub: "Dual Student in Business Informatics",
        about: "I’ve always been fascinated by how digital technology works under the hood. What started as creative media projects quickly turned into a deep interest in software development and IT systems. Today, I'm applying that technical curiosity as a dual student at OBI and FHDW, pursuing a Bachelor's in Business Informatics with a dedicated focus on Cybersecurity.",
        connect: "Feel free to reach out if you want to chat or connect!"
    },
    de: {
        heroTitle: "Hey, ich bin Phil Passon! 👋",
        heroSub: "Dualer Student in Wirtschaftsinformatik",
        about: "Schon früh hat mich nicht nur die Gestaltung digitaler Medien fasziniert, sondern vor allem die Frage, wie die Technik dahinter eigentlich funktioniert. Aus ersten kreativen Projekten in der Medienproduktion wurde schnell ein tiefes Interesse an Softwareentwicklung und IT-Systemen. Heute verbinde ich dieses technische Verständnis mit meinem Studium: Als dualer Student bei OBI und der FHDW konzentriere ich mich im Bachelor Wirtschaftsinformatik voll auf den Bereich Cybersecurity, um Systeme nicht nur zu verstehen, sondern sie auch sicher zu machen.",
        connect: "Schreib mir einfach, wenn du Fragen hast oder dich vernetzen willst!"
    }
};

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'de' ? 'en' : 'de';
    langToggle.innerText = currentLang === 'de' ? '🇬🇧' : '🇩🇪';

    document.getElementById('hero-title').innerText = translations[currentLang].heroTitle;
    document.getElementById('hero-subtitle').innerText = translations[currentLang].heroSub;
    document.getElementById('about-text').innerText = translations[currentLang].about;
    document.getElementById('connect-text').innerText = translations[currentLang].connect;

    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerText = el.getAttribute(`data-${currentLang}`);
    });
});

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.innerText = isDark ? '🌙' : '☀️';
});