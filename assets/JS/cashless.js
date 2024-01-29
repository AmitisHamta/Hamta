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
        description: `صفحه نمایش 5.5 اینچی HD پرینتر حرارتی با سرعت بالا پشتیبانی از تمامی روش های پرداخت طراحی ارگونومیک، آسان برای استفاده`,
        image: 'assets/Images/pos.png',
        features: ["باتری حافظه پردازش", "باتری حافظه پردازش", "باتری حافظه پردازش", "باتری حافظه پردازش"]
    },
    {
        id: 1, 
        title: "TSC 030", 
        description: `صفحه نمایش 5.5 اینچی HD پرینتر حرارتی با سرعت بالا پشتیبانی از تمامی روش های پرداخت طراحی ارگونومیک، آسان برای استفاده`,
        image: 'assets/Images/pos.png',
        features: ["باتری حافظه پردازش", "باتری حافظه پردازش", "باتری حافظه پردازش", "باتری حافظه پردازش"]
    },
    {
        id: 2, 
        title: "Amitis H1", 
        description: `صفحه نمایش 5.5 اینچی HD پرینتر حرارتی با سرعت بالا پشتیبانی از تمامی روش های پرداخت طراحی ارگونومیک، آسان برای استفاده`,
        image: 'assets/Images/pos.png',
        features: ["باتری حافظه پردازش", "باتری حافظه پردازش", "باتری حافظه پردازش", "باتری حافظه پردازش"]
    },
    {
        id: 3, 
        title: "Centerm K9", 
        description: `صفحه نمایش 5.5 اینچی HD پرینتر حرارتی با سرعت بالا پشتیبانی از تمامی روش های پرداخت طراحی ارگونومیک، آسان برای استفاده`,
        image: 'assets/Images/pos.png',
        features: ["باتری حافظه پردازش", "باتری حافظه پردازش", "باتری حافظه پردازش", "باتری حافظه پردازش"]
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