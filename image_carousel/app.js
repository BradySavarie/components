const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel__button--right');
const prevBtn = document.querySelector('.carousel__button--left');
const nav = document.querySelector('.carousel__nav');
const indicators = Array.from(nav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

// arrange slides next to eachother
slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});
