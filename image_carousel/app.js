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

nextBtn.addEventListener('click', () => {
    // move slide
    const currentSlide = track.querySelector('.current__slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;

    track.style.transform = `translateX(-${amountToMove})`;
    currentSlide.classList.remove('current__slide');
    nextSlide.classList.add('current__slide');
});
