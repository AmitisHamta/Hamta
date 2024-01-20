"use strict"

import {Header} from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";
import { Loader } from "../components/loader/loader.js";

window.customElements.define('site-header', Header);
window.customElements.define('site-footer', Footer);
window.customElements.define('site-loader', Loader);

const $ = document;
const container = $.getElementById('container');
const newsList = $.getElementById('news-list');

const newsFragment = $.createDocumentFragment();

const news = [
    {id: 0, title: "1عنوان خبر", content: "متن خبر متن خبرمتن خبر متن خبر متن خبر متن خبر متن خبرمتن خبر متن خبر متن خبر متن خبر متن خبر متن خبر", link: "https://way2pay.ir/", img: "assets/Images/755e0813-4e5e-443f-8bfe-093e6bb4552f.jpg"},
    {id: 1, title: "2عنوان خبر", content: "متن خبر متن خبرمتن خبر متن خبر متن خبر متن خبر متن خبرمتن خبر متن خبر متن خبر متن خبر متن خبر متن خبر", link: "https://way2pay.ir/", img: "assets/Images/755e0813-4e5e-443f-8bfe-093e6bb4552f.jpg"},
    {id: 2, title: "3عنوان خبر", content: "متن خبر متن خبرمتن خبر متن خبر متن خبر متن خبر متن خبرمتن خبر متن خبر متن خبر متن خبر متن خبر متن خبر", link: "https://way2pay.ir/", img: "assets/Images/755e0813-4e5e-443f-8bfe-093e6bb4552f.jpg"},
    {id: 3, title: "4عنوان خبر", content: "متن خبر متن خبرمتن خبر متن خبر متن خبر متن خبر متن خبرمتن خبر متن خبر متن خبر متن خبر متن خبر متن خبر", link: "https://way2pay.ir/", img: "assets/Images/755e0813-4e5e-443f-8bfe-093e6bb4552f.jpg"},
    {id: 4, title: "5عنوان خبر", content: "متن خبر متن خبرمتن خبر متن خبر متن خبر متن خبر متن خبرمتن خبر متن خبر متن خبر متن خبر متن خبر متن خبر", link: "https://way2pay.ir/", img: "assets/Images/755e0813-4e5e-443f-8bfe-093e6bb4552f.jpg"},
]

const removeFilter = () => {
    container.style.filter = 'none';
}

const renderNews = () => {
    newsList.innerHTML = '';

    generateNews(news, newsFragment);

    newsList.append(newsFragment);
}

const generateNews = (newsData, newsFragment) => {
    newsData.forEach(news => {
        const newsContainer = $.createElement('div');
        newsContainer.classList.add('news');

        const imgContainer = $.createElement('div');
        imgContainer.classList.add('img-container');

        const img = $.createElement('img');
        img.setAttribute('src', news.img);
        img.alt = 'خبر اقتصادی و بانکی'

        imgContainer.append(img);

        const newsDetails = $.createElement('div');
        newsDetails.classList.add('news-details');

        const title = $.createElement('h1');
        title.textContent = news.title;

        const content = $.createElement('p');
        content.textContent = news.content;

        const linkButton = $.createElement('button');
        linkButton.classList.add('news-btn');

        const link = $.createElement('a');
        link.textContent = 'لینک خبر';
        link.ariaLabel = 'link to news';
        link.href = news.link;

        linkButton.append(link);

        const arrowBtn = $.createElement('button');
        arrowBtn.classList.add('arrow-btn');

        const arrowIcon = $.createElement('i');
        arrowBtn.classList.add('bi', "bi-arrow-left-short");

        arrowBtn.append(arrowIcon);

        newsDetails.append(title, content, linkButton, arrowBtn);
        newsContainer.append(imgContainer, newsDetails);

        const underline = $.createElement('div');
        underline.classList.add('underline', 'show-underline');

        newsFragment.append(newsContainer, underline);
    })
}

window.addEventListener('load', () => {
    removeFilter();
    renderNews();
})
