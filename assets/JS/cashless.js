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
        title: "Centerm K9", 
        image: 'assets/Images/k9.webp',
        features: ["سیستم اندرویدی", 'نمایشگر 5.5 اینچی', 'همراه با سیمکارت ', 'گارانتی یک ساله'],
        category: 'cashless',
        pageLink: 'k9.html',
        formLink: 'cashless-request.html'
    },
    {
        id: 1, 
        title: "TSC 021",
        image: 'assets/Images/tsc021.webp',
        features: ["ابعاد 49 × 34 × 24", 'نمایشگر 8 اینچی', 'همراه با بستر ارتباطی', 'گارانتی یک ساله'],
        category: 'cashless',
        pageLink: 'tsc021.html',
        formLink: 'cashless-request.html'
    },
    {
        id: 2, 
        title: "TSC 030", 
        image: 'assets/Images/tsc030.webp',
        features: ["ابعاد 71 × 49 × 20", 'نمایشگر تاچ 17 اینچی ', 'همراه با بستر ارتباطی', 'گارانتی یک ساله'],
        category: 'cashless',
        pageLink: 'tsc030.html',
        formLink: 'cashless-request.html'
    },
    {
        id: 3, 
        title: "Amitis H1", 
        image: 'assets/Images/amitisH1.webp',
        features: ["ابعاد 35 × 26 × 6", 'نمایشگر 10.1 اینچی', 'همراه با بستر ارتباطی', 'گارانتی یک ساله'],
        category: 'cashless',
        formLink: 'cashless-request.html'
    },
    {
        id: 4, 
        title: "Centerm C960F", 
        image: 'assets/Images/c960.webp',
        features: ["سیستم اندرویدی", 'نمایشگر تاچ 10.1 اینچی', 'همراه با بستر ارتباطی ', "پشتیبانی کارتهای مغناطیسی"],
        category: 'cashless',
        pageLink: 'c960.html',
        formLink: 'cashless-request.html'
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