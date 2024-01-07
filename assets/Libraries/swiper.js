"use strict"

const setSwiper = () => {
    const banksSwiper = new Swiper(".banks-swiper", {
        loop: true,
        spaceBetween: 100,
        // centeredSlides: true,
        slidesPerView: 5,
        speed: 1000,
        freeMode: true,
        freeModeMomentum: false,
        autoplay: {
            delay: 0,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    setSwiper();
})