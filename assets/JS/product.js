"use strict"

import {Header} from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";
import { Loader } from "../components/loader/loader.js";

window.customElements.define('site-header', Header);
window.customElements.define('site-footer', Footer);
window.customElements.define('site-loader', Loader);

const $ = document;
const container = $.getElementById('container');
const productList = $.getElementById('products-list');
const pageTitle = $.querySelector('#page-title h1')

const productsFragment = $.createDocumentFragment();

const products = [
    {
        id: 0, 
        title: "K9", 
        description: `صفحه نمایش 5.5 اینچی HD پرینتر حرارتی با سرعت بالا پشتیبانی از تمامی روش های پرداخت طراحی ارگونومیک، آسان برای استفاده`,
        image: 'assets/Images/pos.png'
    },
    {
        id: 1, 
        title: "K9", 
        description: `صفحه نمایش 5.5 اینچی HD پرینتر حرارتی با سرعت بالا پشتیبانی از تمامی روش های پرداخت طراحی ارگونومیک، آسان برای استفاده`,
        image: 'assets/Images/pos.png'
    },
    {
        id: 2, 
        title: "K9", 
        description: `صفحه نمایش 5.5 اینچی HD پرینتر حرارتی با سرعت بالا پشتیبانی از تمامی روش های پرداخت طراحی ارگونومیک، آسان برای استفاده`,
        image: 'assets/Images/pos.png'
    },
    {
        id: 3, 
        title: "K9", 
        description: `صفحه نمایش 5.5 اینچی HD پرینتر حرارتی با سرعت بالا پشتیبانی از تمامی روش های پرداخت طراحی ارگونومیک، آسان برای استفاده`,
        image: 'assets/Images/pos.png'
    },
    {
        id: 4, 
        title: "K9", 
        description: `صفحه نمایش 5.5 اینچی HD پرینتر حرارتی با سرعت بالا پشتیبانی از تمامی روش های پرداخت طراحی ارگونومیک، آسان برای استفاده`,
        image: 'assets/Images/pos.png'
    },
    {
        id: 5, 
        title: "K9", 
        description: `صفحه نمایش 5.5 اینچی HD پرینتر حرارتی با سرعت بالا پشتیبانی از تمامی روش های پرداخت طراحی ارگونومیک، آسان برای استفاده`,
        image: 'assets/Images/pos.png'
    },
    {
        id: 6, 
        title: "K9", 
        description: `صفحه نمایش 5.5 اینچی HD پرینتر حرارتی با سرعت بالا پشتیبانی از تمامی روش های پرداخت طراحی ارگونومیک، آسان برای استفاده`,
        image: 'assets/Images/pos.png'
    },
]

const checkCategory = () => {
    if (location.hash.includes('cashless')) {
        pageTitle.textContent = 'کش لس ها';
    }else if (location.hash.includes('pos')) {
        pageTitle.textContent = 'کارتخوان ها';
    }else if (location.hash.includes('atm')) {
        pageTitle.textContent = 'خودپرداز ها';
    }else if (location.hash.includes('cashbox')) {
        pageTitle.textContent = 'صندوق های فروشگاهی';
    }else if (location.hash.includes('others')) {
        pageTitle.textContent = 'ملزومات بانکی';
    }
    const underline = $.createElement('div');
    underline.classList.add('underline', 'show-underline');
    pageTitle.append(underline)

    renderProducts();
}

const renderProducts = () => {
    productList.innerHTML = '';

    generateProductCards();

    productList.append(productsFragment);
}

const generateProductCards = () => {
    products.forEach(product => {
        const productContainer = $.createElement('div');
        productContainer.classList.add('product');

        const imgContainer = $.createElement('div');
        imgContainer.classList.add('img-container');

        const img = $.createElement('img');
        img.classList.add('img');
        img.setAttribute('src', product.image);

        imgContainer.append(img);
        
        const productDetails = $.createElement('div');
        productDetails.classList.add('product-details');

        const title = $.createElement('h1');
        title.classList.add('product-title');
        title.textContent = product.title;

        const description = $.createElement('p');
        description.classList.add('product-description');
        description.textContent = product.description;

        const detailsBtn = $.createElement('button');
        detailsBtn.classList.add('details-btn');

        const btnLink = $.createElement('a');
        btnLink.textContent = 'جزئیات';

        detailsBtn.append(btnLink);

        productDetails.append(title, description, detailsBtn);
        productContainer.append(imgContainer, productDetails);

        productsFragment.append(productContainer);
    })
}

const removeFilter = () => {
    container.style.filter = 'none';
}

window.addEventListener('load', () => {
    removeFilter();
    checkCategory();
})