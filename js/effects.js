// effects.js
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.15
    });

    // Aplica a títulos y descripciones
    document.querySelectorAll('.portfolio-header, .portfolio-text').forEach(el => observer.observe(el));

    // Aplica a tarjetas de proyectos
    document.querySelectorAll('.project-card .card').forEach(el => observer.observe(el));

    // Aplica a tarjetas de servicios
    document.querySelectorAll('.col-services .card').forEach(el => observer.observe(el));

    // Aplica a tarjetas del equipo
    document.querySelectorAll('.col-team .card').forEach(el => observer.observe(el));

    // Aplica al formulario de contacto
    document.querySelectorAll('.contact-content, .data-form, .info').forEach(el => observer.observe(el));
});
