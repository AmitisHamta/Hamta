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
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            }
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    setSwiper();
})