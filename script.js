document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('year').textContent = new Date().getFullYear();

    const swiper = new Swiper(".card-swiper", {
        centeredSlides: false,
        spaceBetween: 20,
        slidesPerView: 'auto'
    });

    const title = document.querySelector(".typewriter");
    const text = title.textContent;
    title.textContent = "";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    const icons = document.querySelectorAll(".skills-container i");
    icons.forEach((icon, i) => {
        icon.style.animation = `floatIcon 3s ease-in-out ${i * 0.3}s infinite`;
    });

    const toggle = document.getElementById('theme-toggle');
        toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
    });
});