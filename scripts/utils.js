//Scroll behavior

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});



//Switch Theme

const themeToggle = document.getElementById('switch');
const body = document.body;

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || savedTheme === null) {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
} else {
    body.classList.remove('dark-mode');
    themeToggle.checked = false;
}


themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});