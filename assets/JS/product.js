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
        img.alt = `${product.title}`
        img.setAttribute('src', product.image);

        imgContainer.append(img);
        
        const productDetails = $.createElement('div');
        productDetails.classList.add('product-details');

        const title = $.createElement('h1');
        title.classList.add('product-title');
        title.textContent = product.title;

        const featureList = $.createElement('div');
        featureList.classList.add('feature-list');

        product.features.forEach(feature => {
            console.log(product.features);
            const features = $.createElement('div');
            features.classList.add('feature')

            const checkIcon = $.createElement('i');
            checkIcon.classList.add('bi', 'bi-check-circle-fill', 'check-icon');

            const description = $.createElement('p');
            description.classList.add('product-description');
            description.textContent = feature;

            features.append(checkIcon, description);
            featureList.append(features);
        })
        
        const productBtns = $.createElement('div');
        productBtns.classList.add('product-btns');

        const detailsBtn = $.createElement('button');
        detailsBtn.classList.add('details-btn');

        const btnLink = $.createElement('a');
        btnLink.textContent = 'جزئیات';
        btnLink.href = `details.html#${product.category}`;

        const arrowBtn = $.createElement('button');
        arrowBtn.classList.add('arrow-btn');

        const arrow = $.createElement('i');
        arrow.classList.add('bi', 'bi-arrow-left-short');

        detailsBtn.append(btnLink);
        arrowBtn.appendChild(arrow);
        productBtns.append(detailsBtn, arrowBtn);

        productDetails.append(title, featureList, productBtns);
        productContainer.append(imgContainer, productDetails);
        productsFragment.append(productContainer);

        img.addEventListener('contextmenu', event => {
            event.preventDefault();
        })
    })
}

export default generateProductCards;