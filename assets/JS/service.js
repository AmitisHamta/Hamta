"use strict"

import {Header} from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";
import { Loader } from "../components/loader/loader.js";
import { Form } from "../components/requestForm/form.js";

window.customElements.define('site-header', Header);
window.customElements.define('site-footer', Footer);
window.customElements.define('site-loader', Loader);
window.customElements.define('request-form', Form);

const $ = document;
const container = $.getElementById('container');
const requestBtns = $.querySelectorAll('.request-btn')

const removeFilter = () => {
    container.style.filter = 'none';
}

const setLines = () => {
    const underlines = $.querySelectorAll('.service-title .underline');
    const titles = $.querySelectorAll('.service-title')
    
    if ($.documentElement.scrollTop >= titles[2].offsetTop) {
        console.log(titles[2].offsetTop);
        underlines[1].classList.remove('exit-underline');
        underlines[1].classList.add('show-underline');
    }else {
        underlines[1].classList.remove('show-underline');
        underlines[1].classList.add('exit-underline');
    }

    if ($.documentElement.scrollTop >= 950) {
        underlines[2].classList.remove('exit-underline');
        underlines[2].classList.add('show-underline');
    }else {
        underlines[2].classList.remove('show-underline');
        underlines[2].classList.add('exit-underline');
    }
}

const goToRequestForm = () => {
    const form = $.getElementById('form-wave');
    $.documentElement.scrollTo({
        top: form.offsetTop,
        behavior: 'smooth'
    })
}

const preventRightClick = () => {
    const images = $.querySelectorAll('img');
    const videos = $.querySelectorAll('video')
    images.forEach(img => {
        img.addEventListener('contextmenu', event => {
            event.preventDefault()
        })
    })

    videos.forEach(video => {
        video.addEventListener('contextmenu', event => {
            event.preventDefault()
        })
    })
}

window.addEventListener('load', () => {
    removeFilter();
    setLines();
    preventRightClick();
})

window.addEventListener('scroll', () => {
    setLines();
})

requestBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        goToRequestForm();
    })
})