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

// When I click right, move 1 slide to the right
function moveSlide(track, currentSlide, targetSlide) {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current__slide');
    targetSlide.classList.add('current__slide');
}

nextBtn.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current__slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveSlide(track, currentSlide, nextSlide);
});

prevBtn.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current__slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveSlide(track, currentSlide, prevSlide);
});
