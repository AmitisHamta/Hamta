"use strict"

const setAOS = () => {
    AOS.init();
}

window.addEventListener('load', () => {
    setAOS();
})