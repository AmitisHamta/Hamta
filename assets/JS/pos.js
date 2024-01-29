"use strict"

import {Header} from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";
import { Loader } from "../components/loader/loader.js";
import generateProductCards from "./product.js";

window.customElements.define('site-header', Header);
window.customElements.define('site-footer', Footer);
window.customElements.define('site-loader', Loader);

const $ = document;
const container = $.getElementById('container');
const productList = $.getElementById('products-list');

const productsFragment = $.createDocumentFragment();

const products = [
    {
        id: 0, 
        title: "ANFU 70",
        image: 'assets/Images/pos.png',
        features: [ "شبکه دو سیمکارت 4G", 'دارای وای فای', "پشتیبانی کارتهای مغناطیسی", 'گارانتی یک ساله']
    },
    {
        id: 1, 
        title: "Aisino V72",
        image: 'assets/Images/pos.png',
        features: ["سیستم لینوکس", 'نمایشگر 2.8 اینچی', 'ظرفیت بالای باطری', 'گارانتی طلایی یک ساله']
    },
    {
        id: 2, 
        title: "Centerm B70",
        image: 'assets/Images/pos.png',
        features: ["سیستم لینوکس", 'ظرفیت بالای باطری', 'پرینتر سریع', 'گارانتی یک ساله']
    },
    {
        id: 3, 
        title: "Centerm K9",
        image: 'assets/Images/pos.png',
        features: ["سیستم اندرویدی", 'نمایشگر 5.5 اینچی', 'دارای دوربین', 'گارانتی یک ساله']
    },
    {
        id: 4, 
        title: "Morefun H9",
        image: 'assets/Images/pos.png',
        features: ["سیستم لینوکس", "شبکه دو سیمکارت 4G", 'دارای وای فای', 'گارانتی یک ساله']
    },
    {
        id: 5, 
        title: "Dspread Trio",
        image: 'assets/Images/pos.png',
        features: ['ظرفیت بالای باطری', 'دارای وای فای', "پشتیبانی کارتهای مغناطیسی", 'گارانتی یک ساله']
    },
]

const renderProducts = () => {
    productList.innerHTML = '';

    generateProductCards(products, productsFragment);

    productList.append(productsFragment);
}

const removeFilter = () => {
    container.style.filter = 'none';
}

window.addEventListener('load', () => {
    removeFilter();
    renderProducts();
})