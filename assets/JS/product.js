"use strict"

const $ = document;

const generateProductCards = (products, productsFragment) => {
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

        const productBtns = $.createElement('div');
        productBtns.classList.add('product-btns');

        const detailsBtn = $.createElement('button');
        detailsBtn.classList.add('details-btn');

        const btnLink = $.createElement('a');
        btnLink.textContent = 'جزئیات';

        const arrowBtn = $.createElement('button');
        arrowBtn.classList.add('arrow-btn');

        const arrow = $.createElement('i');
        arrow.classList.add('bi', 'bi-arrow-left-short');

        detailsBtn.append(btnLink);
        arrowBtn.appendChild(arrow);
        productBtns.append(detailsBtn, arrowBtn);

        productDetails.append(title, description, productBtns);
        productContainer.append(imgContainer, productDetails);
        productsFragment.append(productContainer);
    })
}

export default generateProductCards;