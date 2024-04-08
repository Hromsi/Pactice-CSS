
// Navbar script
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar__menu");
const navLink = document.querySelectorAll(".navbar__link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Scrolling up script
window.addEventListener('scroll', function() {
    const scrollUp = document.getElementById('scroll-up');
    if (window.pageYOffset > 350) { // Порог прокрутки, после которого стрелка появляется
        scrollUp.style.display = 'block'; // Показываем стрелку
    } else {
        scrollUp.style.display = 'none'; // Скрываем стрелку
    }
});

// Smooth scrolling script
const anchors = document.querySelectorAll('a.navbar__link, a.navbar__logo, a.scroll-up');

anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const headerHeight = 85;
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

