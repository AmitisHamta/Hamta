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
        title: "NCR 5886", 
        description: `صفحه نمایش 5.5 اینچی HD پرینتر حرارتی با سرعت بالا پشتیبانی از تمامی روش های پرداخت طراحی ارگونومیک، آسان برای استفاده`,
        image: 'assets/Images/ncr.webp',
        features: ['استاندارد امنیت', 'نمایشگر 12.1 اینچی', "ابعاد 126 × 124 × 84", 'گارانتی سه ماهه'],
        category: 'atm',
    },
    {
        id: 1, 
        title: "Wincore 2150", 
        description: `صفحه نمایش 5.5 اینچی HD پرینتر حرارتی با سرعت بالا پشتیبانی از تمامی روش های پرداخت طراحی ارگونومیک، آسان برای استفاده`,
        image: 'assets/Images/wincore.webp',
        features: ['استاندارد امنیت', 'نمایشگر 12.1 اینچی', "ابعاد 150 × 60 × 84", 'گارانتی سه ماهه'],
        category: 'atm',
    }
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