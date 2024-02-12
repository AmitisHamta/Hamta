"use strict"

const setSwiper = () => {
    const mainSwiper = new Swiper(".main-swiper", {
        loop: true,
        centeredSlide: true,
        spaceBetween: 0,
        slidesPerView: 1,
        speed: 2000,
        autoplay: {
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
    });

    const banksSwiper = new Swiper(".banks-swiper", {
        loop: true,
        centeredSlide: true,
        spaceBetween: 100,
        slidesPerView: 1,
        speed: 2000,
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