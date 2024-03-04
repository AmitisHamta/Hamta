"use strict"

import { Header } from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";
import { Loader } from "../components/loader/loader.js";

window.customElements.define('site-header', Header);
window.customElements.define('site-footer', Footer);
window.customElements.define('site-loader', Loader);

const $ = document;
const container = $.getElementById('container');
const modalForm = $.getElementById('modal-form');
const form = $.querySelector('.form');
const dataBox = $.getElementById('data-box');
const loaderBox = $.getElementById('loader-box');
const errMsg = $.querySelector('.err');
const phoneInput = $.getElementById('phone-input')

const phoneRegex = /^(?:(?:\+|00)98|0)?9\d{9}$/;

const removeFilter = () => {
    container.style.filter = 'none';
}

const showData = () => {
    loaderBox.classList.add('display-none');
    dataBox.classList.add('display-flex')
}

const showLoader = () => {
    modalForm.classList.add('display-none');
    loaderBox.classList.add('display-flex');

    setTimeout(() => {
        showData();
    }, 2000);
}

form.addEventListener('submit', event => {
    event.preventDefault();
    showLoader()
})

window.addEventListener('load', () => {
    removeFilter();
})
