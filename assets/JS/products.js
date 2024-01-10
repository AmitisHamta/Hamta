"use strict"

import { Header } from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";
import { Loader } from "../components/loader/loader.js";
import { Form } from "../components/requestForm/form.js";

window.customElements.define('site-header', Header);
window.customElements.define('site-footer', Footer);
window.customElements.define('site-loader', Loader);
window.customElements.define('request-form', Form);

const $ = document;
const container = $.getElementById('container');
const requestBtns = $.querySelectorAll('.request-btn');

const removeFilter = () => {
    container.style.filter = 'none';
}

const setLines = () => {
    const underlines = $.querySelectorAll('.product .underline');

    if ($.documentElement.scrollTop >= 0) {
        underlines[0].classList.remove('exit-underline');
        underlines[0].classList.add('show-underline');
    }else {
        underlines[0].classList.remove('show-underline');
        underlines[0].classList.add('exit-underline');
    } 
    
    if ($.documentElement.scrollTop >= 300) {
        underlines[1].classList.remove('exit-underline');
        underlines[1].classList.add('show-underline');
    }else {
        underlines[1].classList.remove('show-underline');
        underlines[1].classList.add('exit-underline');
    }

    if ($.documentElement.scrollTop >= 900) {
        underlines[2].classList.remove('exit-underline');
        underlines[2].classList.add('show-underline');
    }else {
        underlines[2].classList.remove('show-underline');
        underlines[2].classList.add('exit-underline');
    }

    if ($.documentElement.scrollTop >= 1500) {
        underlines[3].classList.remove('exit-underline');
        underlines[3].classList.add('show-underline');
    }else {
        underlines[3].classList.remove('show-underline');
        underlines[3].classList.add('exit-underline');
    }

    if ($.documentElement.scrollTop >= 2250) {
        underlines[4].classList.remove('exit-underline');
        underlines[4].classList.add('show-underline');
    }else {
        underlines[4].classList.remove('show-underline');
        underlines[4].classList.add('exit-underline');
    }
}

const moveToSection = () => {
    const scrollTop = $.documentElement.scrollTop;

    if (location.hash.includes('cashless')) {
        $.documentElement.scrollTo({
            top: 260,
            behavior: 'smooth'
        })
    }else if (location.hash.includes('pos')) {
        $.documentElement.scrollTo({
            top: 900,
            behavior: 'smooth'
        })
    }else if (location.hash.includes('atm')) {
        $.documentElement.scrollTo({
            top: 1500,
            behavior: 'smooth'
        })
    }else if (location.hash.includes('cashbox')) {
        $.documentElement.scrollTo({
            top: 2120,
            behavior: 'smooth'
        })
    }else if (location.hash.includes('essentials')) {
        $.documentElement.scrollTo({
            top: 2800,
            behavior: 'smooth'
        })
    }
}

const goToRequestForm = () => {
    $.documentElement.scrollTo({
        top: 3800,
        behavior: 'smooth'
    })
}

window.addEventListener('load', () => {
    setLines();
    moveToSection();
    removeFilter()
})

window.addEventListener('scroll', () => {
    setLines();
})

requestBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        goToRequestForm();
    })
})