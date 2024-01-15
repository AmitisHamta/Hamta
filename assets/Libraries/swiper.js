"use strict"

const setSwiper = () => {
    const banksSwiper = new Swiper(".banks-swiper", {
        loop: true,
        centeredSlide: true,
        spaceBetween: 100,
        slidesPerView: 1,
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