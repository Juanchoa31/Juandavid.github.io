document.addEventListener("DOMContentLoaded", () => {

    // === Actualiza el año automáticamente ===
    document.getElementById('year').textContent = new Date().getFullYear();

    // === Inicializa el carrusel Swiper ===
    const swiper = new Swiper(".card-swiper", {
        centeredSlides: false,
        spaceBetween: 20,
        slidesPerView: 'auto'
    });

    // === Efecto de escritura en el título principal ===
    const title = document.querySelector(".typewriter");
    const text = title.textContent;
    title.textContent = "";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // velocidad de escritura
        }
    }
    typeEffect();

    // === Efecto de flotación para íconos ===
    const icons = document.querySelectorAll(".skills-container i");
    icons.forEach((icon, i) => {
        icon.style.animation = `floatIcon 3s ease-in-out ${i * 0.3}s infinite`;
    });
});