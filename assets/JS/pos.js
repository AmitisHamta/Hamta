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
    // {
    //     id: 0, 
    //     title: "ANFU 75",
    //     image: 'assets/Images/pos.png',
    //     features: [ "شبکه دو سیمکارت 4G", 'دارای وای فای', "پشتیبانی کارتهای مغناطیسی", 'گارانتی 18 ماهه']
    // },
    {
        id: 1, 
        title: "ANFU 70",
        image: 'assets/Images/anfu70.png',
        features: [ "شبکه دو سیمکارت 4G", 'دارای وای فای', "پشتیبانی کارتهای مغناطیسی", 'گارانتی 18 ماهه'],
        category: 'pos',
        pageLink: 'a70.html'
    },
    {
        id: 2, 
        title: "Aisino V72",
        image: 'assets/Images/aisinoV72.png',
        features: ["سیستم لینوکس", 'نمایشگر 2.8 اینچی', 'ظرفیت بالای باطری', 'گارانتی طلایی یک ساله'],
        category: 'pos',
        pageLink: 'v72.html'
    },
    {
        id: 3, 
        title: "Aisino A75",
        image: 'assets/Images/aisinoA75.png',
        features: ["سیستم اندرویدی", 'نمایشگر 5.5 اینچی', 'دارای دوربین', 'گارانتی یک ساله'],
        category: 'pos',
        pageLink: 'a75.html'
    },
    {
        id: 4, 
        title: "Centerm B70",
        image: 'assets/Images/centermB70.png',
        features: ["سیستم لینوکس", 'ظرفیت بالای باطری', 'پرینتر سریع', 'گارانتی یک ساله'],
        category: 'pos',
        pageLink: 'b70.html'
    },
    {
        id: 5, 
        title: "Centerm K9",
        image: 'assets/Images/posk9.png',
        features: ["سیستم اندرویدی", 'نمایشگر 5.5 اینچی', 'دارای دوربین', 'گارانتی یک ساله'],
        category: 'pos',
        pageLink: 'k9p.html'
    },
    {
        id: 6, 
        title: "Morefun H9",
        image: 'assets/Images/morefunH9.png',
        features: ["سیستم لینوکس", "شبکه دو سیمکارت 4G", 'دارای وای فای', 'گارانتی 18 ماهه'],
        category: 'pos',
        pageLink: 'h9.html'
    },
    {
        id: 7, 
        title: "Dspread Trio",
        image: 'assets/Images/dspread.png',
        features: ['ظرفیت بالای باطری', 'دارای وای فای', "پشتیبانی کارتهای مغناطیسی", 'گارانتی یک ساله'],
        category: 'pos',
        pageLink: 'dspread.html'
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