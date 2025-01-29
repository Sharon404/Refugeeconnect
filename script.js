document.addEventListener("DOMContentLoaded", () => {
    // Toggle menu functionality
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("open");
    });

    // Intersection Observer for fade-in effect
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => observer.observe(element));

    // Ensuring mobile-friendly layout
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            document.body.style.paddingLeft = '0';
            document.body.style.paddingRight = '0';
        }
    });
});
