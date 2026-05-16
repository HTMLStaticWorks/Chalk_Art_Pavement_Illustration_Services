// Main JS for Chalk Art & Pavement Illustration Services

document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;

    // ─── Theme Toggle ─────────────────────────────────────────────────────────
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-bs-theme', savedTheme);
    updateAllThemeIcons(savedTheme);

    document.body.addEventListener('click', (e) => {
        const themeBtn = e.target.closest('.theme-toggle-btn');
        if (themeBtn) {
            e.preventDefault();
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            htmlElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateAllThemeIcons(newTheme);
        }
    });

    function updateAllThemeIcons(theme) {
        document.querySelectorAll('.theme-toggle-btn i').forEach(icon => {
            if (theme === 'dark') {
                icon.classList.remove('bi-moon-fill');
                icon.classList.add('bi-sun-fill');
            } else {
                icon.classList.remove('bi-sun-fill');
                icon.classList.add('bi-moon-fill');
            }
        });
    }

    // ─── RTL Toggle ───────────────────────────────────────────────────────────
    const savedDir = localStorage.getItem('dir') || 'ltr';
    htmlElement.setAttribute('dir', savedDir);

    document.body.addEventListener('click', (e) => {
        const rtlBtn = e.target.closest('.rtl-toggle-btn');
        if (rtlBtn) {
            e.preventDefault();
            const currentDir = htmlElement.getAttribute('dir');
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            htmlElement.setAttribute('dir', newDir);
            localStorage.setItem('dir', newDir);
        }
    });

    // ─── Back to Top ──────────────────────────────────────────────────────────
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('show', window.scrollY > 300);
        });
    }

    // ─── Password Toggle ──────────────────────────────────────────────────────
    document.querySelectorAll('.password-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const input = toggle.parentElement.querySelector('input');
            const icon = toggle.querySelector('i');
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.replace('bi-eye', 'bi-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.replace('bi-eye-slash', 'bi-eye');
            }
        });
    });

    // ─── Form Validation ──────────────────────────────────────────────────────
    document.querySelectorAll('.needs-validation').forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
});
