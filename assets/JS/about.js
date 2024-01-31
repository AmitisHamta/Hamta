"use strict"

import {Header} from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";
import { Loader } from "../components/loader/loader.js";

window.customElements.define('site-header', Header);
window.customElements.define('site-footer', Footer);
window.customElements.define('site-loader', Loader);

const $ = document;
const certifications = $.querySelectorAll('.certification');
const container = $.getElementById('container');

const removeFilter = () => {
    container.style.filter = 'none';
}

const preventRightClick = () => {
    certifications.forEach(certificate => {
        certificate.addEventListener('contextmenu', event => {
            event.preventDefault();
        })
    })

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

    if ($.documentElement.scrollTop >= 1420) {
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

const moveToSection = () => {
    const scrollTop = $.documentElement.scrollTop;

    if (location.hash.includes('activity')) {
        $.documentElement.scrollTo({
            top: 800,
            behavior: 'smooth'
        })
    }else if (location.hash.includes('structure')) {
        $.documentElement.scrollTo({
            top: 300,
            behavior: 'smooth'
        })
    }else if (location.hash.includes('experience')) {
        $.documentElement.scrollTo({
            top: 2200,
            behavior: 'smooth'
        })
    }else if (location.hash.includes('facility')) {
        $.documentElement.scrollTo({
            top: 1400,
            behavior: 'smooth'
        })
    }
}

const responsive = () => {
    if ($.documentElement.clientWidth > 480 && $.documentElement.clientWidth <= 767 ) {
        const cert1 = $.getElementById('cert-1');
        const cert4 = $.getElementById('cert-4');
        const certification = $.querySelector('.certs');

        certification.replaceChild(cert4, cert1);
        certification.appendChild(cert1);
    }
}

window.addEventListener('load', () => {
    moveToSection();
    responsive();
    preventRightClick()
    removeFilter();
    setLines();
})

window.addEventListener('scroll', () => {
    setLines();
})