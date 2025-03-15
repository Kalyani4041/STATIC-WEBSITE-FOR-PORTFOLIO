document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});
