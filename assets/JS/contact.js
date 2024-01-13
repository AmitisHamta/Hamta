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
const selectBtn = $.querySelector('#drop-btn');
const menu = $.querySelector('.dropdown-menu');
const items = $.querySelectorAll('.dropdown-item');

const removeFilter = () => {
    container.style.filter = 'none';
}

const showMenu = () => {
    menu.classList.toggle('show');
}

const hideMenu = () => {
    menu.classList.remove('show');
}

const chooseItem = item => {
    selectBtn.textContent = item.textContent;
    hideMenu();
}

window.addEventListener('load', () => {
    removeFilter();
})

selectBtn.addEventListener('click', () => {
    showMenu();
})

items.forEach(item => {
    item.addEventListener('click', () => {
        chooseItem(item);
    })
})