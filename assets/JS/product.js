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
        if (product.pageLink) {
            btnLink.href = product.pageLink;
        }

        detailsBtn.append(btnLink);

        const formBtnsContainer = $.createElement('div');
        formBtnsContainer.classList.add('form-btns');

        const formBtn = $.createElement('button');
        formBtn.classList.add('form-btn');

        const formLink = $.createElement('a');
        formLink.textContent = 'ثبت درخواست نماینده';
        if (product.formLink) {
            formLink.href = product.formLink
        }else {
            formLink.href = 'form';
        }

        formBtn.append(formLink);

        const form2Btn = $.createElement('button');
        form2Btn.classList.add('form-btn', 'bg-orange');

        const form2Link = $.createElement('a');
        form2Link.textContent = 'ثبت درخواست پذیرنده';
        form2Link.href = 'form.html';

        form2Btn.append(form2Link);
        formBtnsContainer.append(formBtn, form2Btn)

        productBtns.append(detailsBtn, formBtnsContainer);

        productDetails.append(title, featureList, productBtns);
        productContainer.append(imgContainer, productDetails);
        productsFragment.append(productContainer);

        img.addEventListener('contextmenu', event => {
            event.preventDefault();
        })
    })
}

export default generateProductCards;