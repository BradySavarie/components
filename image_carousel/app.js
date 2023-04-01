const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel__button--right');
const prevBtn = document.querySelector('.carousel__button--left');
const nav = document.querySelector('.carousel__nav');
const indicators = Array.from(nav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

function moveSlide(track, currentSlide, targetSlide) {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current__slide');
    targetSlide.classList.add('current__slide');
}

function updateIndicator(currentIndicator, targetIndicator) {
    currentIndicator.classList.remove('current__slide');
    targetIndicator.classList.add('current__slide');
}

nextBtn.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current__slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentIndicator = nav.querySelector('.current__slide');
    const targetIndicator = currentIndicator.nextElementSibling;
    moveSlide(track, currentSlide, nextSlide);
    updateIndicator(currentIndicator, targetIndicator);
});

prevBtn.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current__slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentIndicator = nav.querySelector('.current__slide');
    const targetIndicator = currentIndicator.previousElementSibling;
    moveSlide(track, currentSlide, prevSlide);
    updateIndicator(currentIndicator, targetIndicator);
});

nav.addEventListener('click', (e) => {
    const targetIndicator = e.target.closest('button');

    if (!targetIndicator) return;

    const currentSlide = track.querySelector('.current__slide');
    const currentIndicator = nav.querySelector('.current__slide');
    const currentIndex = indicators.findIndex(
        (indicator) => indicator === targetIndicator
    );
    const targetSlide = slides[currentIndex];
    moveSlide(track, currentSlide, targetSlide);
    updateIndicator(currentIndicator, targetIndicator);
});
