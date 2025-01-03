document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});



//SWITCH THEME

const themeToggle = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    themeStylesheet.setAttribute('href', currentTheme);
    themeToggle.checked = currentTheme === 'styles/dark-mode.css';
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        themeStylesheet.setAttribute('href', 'styles/dark-mode.css');
        localStorage.setItem('theme', 'styles/dark-mode.css');
    } else {
        themeStylesheet.setAttribute('href', 'styles/light-mode.css');
        localStorage.setItem('theme', 'styles/light-mode.css');
    }
});

