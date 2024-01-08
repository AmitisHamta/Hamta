"use strict"

import {Header} from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";

window.customElements.define('site-header', Header);
window.customElements.define('site-footer', Footer);

const $ = document;
const certifications = $.querySelectorAll('.certification');

const preventRightCLick = () => {
    certifications.forEach(certificate => {
        certificate.addEventListener('contextmenu', event => {
            event.preventDefault();
        })
    })
}

const setLines = () => {
    const titleUnderlines = $.querySelectorAll('.about-name .underline');

    if ($.documentElement.scrollTop >= 0) {
        titleUnderlines[0].classList.add('show-underline')
    }

    if ($.documentElement.scrollTop >= 150) {
        titleUnderlines[1].classList.remove('exit-underline')
        titleUnderlines[1].classList.add('show-underline')
    }else {
        titleUnderlines[1].classList.remove('show-underline')
        titleUnderlines[1].classList.add('exit-underline')
    }

    if ($.documentElement.scrollTop >= 900) {
        titleUnderlines[2].classList.remove('exit-underline')
        titleUnderlines[2].classList.add('show-underline')
    }else {
        titleUnderlines[2].classList.remove('show-underline')
        titleUnderlines[2].classList.add('exit-underline')
    }

    if ($.documentElement.scrollTop >= 1350) {
        titleUnderlines[3].classList.remove('exit-underline')
        titleUnderlines[3].classList.add('show-underline')
    }else {
        titleUnderlines[3].classList.remove('show-underline')
        titleUnderlines[3].classList.add('exit-underline')
    }

    const centerline = $.querySelector('.centerline')

    if ($.documentElement.scrollTop >= 1450) {
        centerline.classList.remove('exit-centerline')
        centerline.classList.add('show-centerline')
    }else {
        centerline.classList.remove('show-centerline')
        centerline.classList.add('exit-centerline')
    }
}

window.addEventListener('load', () => {
    preventRightCLick();
    setLines();
})

window.addEventListener('scroll', () => {
    setLines()
})