// ==========================================================================
// CELESTE NICOLÁS ISIDRO - PORTFOLIO INTERACTIVO (MAIN JS)
// Enfoque: Análisis de Datos & Soporte Técnico IT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. TYPEWRITER EFFECT
    const app = document.getElementById('app');
    if (app && typeof Typewriter !== 'undefined') {
        const typewriter = new Typewriter(app, {
            loop: true,
            delay: 70,
            deleteSpeed: 35
        });

        typewriter
            .typeString('Ingeniera en Sistemas Computacionales')
            .pauseFor(2200)
            .deleteAll()
            .typeString('Analista de Datos Jr.')
            .pauseFor(2200)
            .deleteAll()
            .typeString('Soporte Técnico IT')
            .pauseFor(2200)
            .deleteAll()
            .typeString('Desarrollo Web (Hobby)')
            .pauseFor(2200)
            .deleteAll()
            .start();
    }

    // 2. SCROLL REVEAL ANIMATIONS (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        root: null,
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. TOGGLE INTERACTIVO PARA LA SECCIÓN DE CURSOS
    const collapseCursos = document.getElementById('collapseCursos');
    const btnToggleCursosText = document.getElementById('btnToggleCursosText');
    const iconToggleCursos = document.getElementById('iconToggleCursos');

    if (collapseCursos) {
        collapseCursos.addEventListener('show.bs.collapse', () => {
            if (btnToggleCursosText) btnToggleCursosText.textContent = 'Ocultar Cursos y Certificados';
            if (iconToggleCursos) iconToggleCursos.classList.add('rotated');
        });

        collapseCursos.addEventListener('hide.bs.collapse', () => {
            if (btnToggleCursosText) btnToggleCursosText.textContent = 'Ver Cursos y Certificados';
            if (iconToggleCursos) iconToggleCursos.classList.remove('rotated');
        });
    }

    // 4. BOTÓN VOLVER ARRIBA & NAVBAR HIGHLIGHT ON SCROLL
    const backToTopBtn = document.getElementById('botonArriba');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.custom-navbar .nav-link');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        // Mostrar / Ocultar botón Volver Arriba
        if (backToTopBtn) {
            if (scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }

        // Resaltar elemento activo en la Navbar según la sección visible
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Evento Click Volver Arriba
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 5. FUNCIONALIDAD COPIAR CORREO AL PORTAPAPELES
    const btnCopyEmail = document.getElementById('btnCopyEmail');
    const emailText = document.getElementById('emailText');
    const copyBtnText = document.getElementById('copyBtnText');
    const copyToastEl = document.getElementById('copyToast');

    if (btnCopyEmail && emailText) {
        btnCopyEmail.addEventListener('click', () => {
            const email = emailText.textContent.trim();

            navigator.clipboard.writeText(email).then(() => {
                // Feedback visual en el botón
                if (copyBtnText) copyBtnText.textContent = '¡Copiado!';
                btnCopyEmail.classList.add('btn-success');
                btnCopyEmail.classList.remove('btn-purple-pill');

                // Mostrar Toast de Bootstrap si existe
                if (copyToastEl && typeof bootstrap !== 'undefined') {
                    const toast = new bootstrap.Toast(copyToastEl, { delay: 3000 });
                    toast.show();
                }

                // Restaurar estado del botón después de 3 segundos
                setTimeout(() => {
                    if (copyBtnText) copyBtnText.textContent = 'Copiar';
                    btnCopyEmail.classList.remove('btn-success');
                    btnCopyEmail.classList.add('btn-purple-pill');
                }, 3000);
            }).catch(err => {
                console.error('Error al copiar el correo: ', err);
            });
        });
    }

    // 6. CERRAR MENÚ RESPONSIVE NAVBAR AL HACER CLICK EN UN ENLACE (MÓVIL)
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            });
        });
    }

});
