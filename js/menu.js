function initializeMenu() {
    document.querySelectorAll('.menu').forEach(function (menu) {
        menu.addEventListener('click', function (event) {
            event.preventDefault();
            const navigation = menu.closest('nav');
            const submenu = navigation && navigation.querySelector('.sub');
            if (submenu) {
                const isOpen = submenu.classList.toggle('open');
                menu.setAttribute('aria-expanded', String(isOpen));
            }
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMenu);
} else {
    initializeMenu();
}
