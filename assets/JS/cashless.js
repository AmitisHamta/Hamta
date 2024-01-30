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
        title: "TSC 021",
        image: 'assets/Images/12.png',
        features: ["ابعاد 49 × 34 × 24", 'نمایشگر 8 اینچی', 'همراه با بستر ارتباطی', 'گارانتی یک ساله']
    },
    {
        id: 1, 
        title: "TSC 030", 
        image: 'assets/Images/21.png',
        features: ["ابعاد 71 × 49 × 20", 'نمایشگر تاچ 17 اینچی ', 'همراه با بستر ارتباطی', 'گارانتی یک ساله']
    },
    {
        id: 2, 
        title: "Amitis H1", 
        image: 'assets/Images/002.png',
        features: ["ابعاد 35 × 26 × 6", 'نمایشگر 10.1 اینچی', 'همراه با بستر ارتباطی', 'گارانتی یک ساله']
    },
    {
        id: 3, 
        title: "Centerm K9", 
        image: 'assets/Images/Untitled-1xx.png',
        features: ["سیستم اندرویدی", 'نمایشگر 5.5 اینچی', 'همراه با سیمکارت ', 'گارانتی یک ساله']
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