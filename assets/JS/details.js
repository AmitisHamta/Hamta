"use strict"

import {Header} from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";
import { Loader } from "../components/loader/loader.js";

window.customElements.define('site-header', Header);
window.customElements.define('site-footer', Footer);
window.customElements.define('site-loader', Loader);

const $ = document;
const container = $.getElementById('container');
const mainTexts = $.querySelectorAll('.maintext-container')

const removeFilter = () => {
    container.style.filter = 'none';
}

const showMainTexts = () => {
    mainTexts.forEach(text => {
        text.classList.add('opacity-1', 'slide-in-blurred-right');
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
    showMainTexts();
    preventRightClick()
})