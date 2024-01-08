"use strict"

import {Header} from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";
import { Loader } from "../components/loader/loader.js";

window.customElements.define('site-header', Header);
window.customElements.define('site-footer', Footer);
window.customElements.define('site-footer', Loader);

const $ = document;
const mainText = $.getElementById('main-text');
const mainDescript = $.getElementById('main-descript');
const textBoxes = $.querySelectorAll('.text-box');

const setBoxesAnimation = () => {
    textBoxes.forEach(box => {
        box.classList.add('swipe-in-out-right')
    })
}

const showMainTexts = () => {
    setTimeout(() => {
        mainText.style.opacity = 1;
        mainDescript.style.opacity = 1;
    }, 1250);
}

const setLines = () => {
    const aboutTarget = $.querySelector(`#about-content .section-title .underline`);
    if ($.documentElement.scrollTop >= 200) {
        aboutTarget.classList.remove('exit-underline')
        aboutTarget.classList.add('show-underline');
    }else {
        aboutTarget.classList.remove('show-underline');
        aboutTarget.classList.add('exit-underline')
    }

    const aboutTopLines = $.querySelectorAll(`#about-content .about-info .topline`);
    const aboutUnderLines = $.querySelectorAll(`#about-content .about-info .underline`);
    const aboutLeftLines = $.querySelectorAll(`#about-content .about-info .leftline`);
    const aboutRightLines = $.querySelectorAll(`#about-content .about-info .rightline`);

    if ($.documentElement.scrollTop >= 200) {
        aboutTopLines.forEach(line => {
            line.classList.remove('hide-topline');
            line.classList.add('show-topline');
            line.style.animationDuration = '1s';
            line.classList.add('width-100')
        })
        aboutUnderLines.forEach(line => {
            line.classList.remove('hide-underline');
            line.classList.add('show-underline');
            line.style.animationDuration = '1s';
            line.classList.add('width-100')
        })
        aboutRightLines.forEach(line => {
            line.classList.remove('hide-rightline');
            line.classList.add('show-rightline');
            line.style.animationDuration = '1s';
            line.classList.add('height-100')
        })
        aboutLeftLines.forEach(line => {
            line.classList.remove('hide-leftline');
            line.classList.add('show-leftline');
            line.style.animationDuration = '1s';
            line.classList.add('height-100')
        })
    }else {
        aboutTopLines.forEach(line => {
            line.classList.remove('show-topline');
            line.classList.add('hide-topline');
            line.style.animationDuration = '1s';
            line.classList.remove('width-100')
        })
        aboutUnderLines.forEach(line => {
            line.classList.remove('show-underline');
            line.classList.add('hide-underline');
            line.style.animationDuration = '1s';
            line.classList.remove('width-100')
        })
        aboutRightLines.forEach(line => {
            line.classList.remove('show-rightline');
            line.classList.add('hide-rightline');
            line.style.animationDuration = '1s';
            line.classList.remove('height-100')
        })
        aboutLeftLines.forEach(line => {
            line.classList.remove('show-leftline');
            line.classList.add('hide-leftline');
            line.style.animationDuration = '1s';
            line.classList.remove('height-100')
        })
    }

    const serviceTarget = $.querySelector(`#service-content .section-title .underline`);

    if ($.documentElement.scrollTop >= 1100) {
        serviceTarget.classList.remove('exit-underline')
        serviceTarget.classList.add('show-underline');
        serviceTarget.classList.add('width-100')
    }else {
        serviceTarget.classList.remove('show-underline');
        serviceTarget.classList.add('exit-underline')
        serviceTarget.classList.remove('width-100')
    }

    const serviceRight = $.querySelectorAll(`#service-content .service-info .rightline`);
    const serviceLeft = $.querySelectorAll(`#service-content .service-info .leftline`);

    if ($.documentElement.scrollTop >= 1200) {
        serviceRight[0].classList.remove('exit-rightline');
        serviceRight[0].classList.add('show-rightline');
        serviceRight[0].classList.add('height-100')
    }else {
        serviceRight[0].classList.remove('show-rightline');
        serviceRight[0].classList.add('exit-rightline');
        serviceRight[0].classList.remove('height-100')
    }

    if ($.documentElement.scrollTop >= 1550) {
        serviceRight[1].classList.remove('exit-rightline');
        serviceRight[1].classList.add('show-rightline');
        serviceRight[1].classList.add('height-100')
    }else {
        serviceRight[1].classList.remove('show-rightline');
        serviceRight[1].classList.add('exit-rightline');
        serviceRight[1].classList.add('height-100')
    }

    if ($.documentElement.scrollTop >= 1400) {
        serviceLeft[0].classList.remove('exit-leftline');
        serviceLeft[0].classList.add('show-leftline');
        serviceLeft[0].classList.add('height-100')
    }else {
        serviceLeft[0].classList.remove('show-leftline');
        serviceLeft[0].classList.add('exit-leftline');
        serviceLeft[0].classList.remove('height-100')
    }

    if ($.documentElement.scrollTop >= 1800) {
        serviceLeft[1].classList.remove('exit-leftline');
        serviceLeft[1].classList.add('show-leftline');
        serviceLeft[1].classList.add('height-100')
    }else {
        serviceLeft[1].classList.remove('show-leftline');
        serviceLeft[1].classList.add('exit-leftline');
        serviceLeft[1].classList.remove('height-100')
    }
}

window.addEventListener('load', () => {
    
})

window.addEventListener('DOMContentLoaded', () => {
    setLines();
    setBoxesAnimation();
    showMainTexts();
})

window.addEventListener('scroll', () => {
    setLines();
})
