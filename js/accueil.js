const navigation = document.querySelector(".navigation");
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

let currentIndex = 0;

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        currentIndex = i;
        sliderNav(i);
    });
});

// Fonction pour faire défiler automatiquement
const autoSlide = () => {
    currentIndex = (currentIndex + 1) % btns.length;
    sliderNav(currentIndex);
}

// Défilement automatique toutes les 5 secondes
setInterval(autoSlide, 7000);