// Resaltar automáticamente el enlace activo del menú principal
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.parentElement.classList.add('active');
    }
});

// Menú móvil
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Año dinámico en el footer
const footer = document.querySelector('footer > p');
if (footer) {
    footer.innerHTML = `&copy; ${new Date().getFullYear()} MyBlog - Todos los derechos reservados`;
}

// Filtro de noticias por deporte
const filterButtons = document.querySelectorAll('.filter-btn');
const newsItems = document.querySelectorAll('.news-card[data-category]');

if (filterButtons.length && newsItems.length) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            newsItems.forEach(item => {
                const show = filter === 'all' || item.dataset.category === filter;
                item.style.display = show ? '' : 'none';
            });
        });
    });
}
