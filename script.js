const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const slides = [...document.querySelectorAll(".hero-slide")];
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const slideCurrent = document.querySelector(".slide-current");
let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === currentSlide;
    slide.classList.toggle("opacity-100", isActive);
    slide.classList.toggle("opacity-0", !isActive);
  });
  slideCurrent.textContent = String(currentSlide + 1).padStart(2, "0");
}

menuToggle.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  mobileNav.classList.toggle("hidden", !isOpen);
});

prevButton.addEventListener("click", () => showSlide(currentSlide - 1));
nextButton.addEventListener("click", () => showSlide(currentSlide + 1));
