const images = document.querySelectorAll(`img`);
const slider = document.querySelector(`.slider`);
const nextButton = document.querySelector(`.slider__next-button`);
const prevButton = document.querySelector(`.slider__prev-button`);
let count = 0;
let width;

const init = () => {
    width = slider.offsetWidth;
    slider.style.width = `${width} * ${images.length} px`;
    images.forEach(img => {
        img.style.width = width + `px`;
        img.style.height = `auto`;
    });
}


const roolSlider = () => {
    slider.style.transform = `translate(-` + count * width + `px)`;
};


prevButton.addEventListener(`click`, () => {
    count--;
    if (count < 0) {
        count = 0;
    }
    roolSlider();
});

nextButton.addEventListener(`click`, () => {
    count++;
    if (count >= images.length - 1) {
        count = images.length - 1;
    }
    roolSlider();
});

init();
window.addEventListener(`resize`, init);