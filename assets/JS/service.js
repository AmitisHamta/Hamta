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
    
    if ($.documentElement.scrollTop >= 450) {
        underlines[1].classList.remove('exit-underline');
        underlines[1].classList.add('show-underline');
    }else {
        underlines[1].classList.remove('show-underline');
        underlines[1].classList.add('exit-underline');
    }

    if ($.documentElement.scrollTop >= 1200) {
        underlines[2].classList.remove('exit-underline');
        underlines[2].classList.add('show-underline');
    }else {
        underlines[2].classList.remove('show-underline');
        underlines[2].classList.add('exit-underline');
    }
}

const goToRequestForm = () => {
    $.documentElement.scrollTo({
        top: 2200,
        behavior: 'smooth'
    })
}

window.addEventListener('load', () => {
    removeFilter();
    setLines();
})

window.addEventListener('scroll', () => {
    setLines();
    console.log($.documentElement.scrollTop);
})

requestBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        goToRequestForm();
    })
})