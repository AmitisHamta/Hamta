"use strict"

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

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

const supabase = createClient
('https://wbkeahghzxpcrxdbmdge.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6India2VhaGdoenhwY3J4ZGJtZGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5OTU3MDQsImV4cCI6MjAyMTU3MTcwNH0.g0VDd1nt_JwDOKjItT6pWdtLjLqm9zs5k1toXLCHo5I');

let news = [];

const removeFilter = () => {
    container.style.filter = 'none';
}

async function getNewsData () {
    const data = await supabase
    .from('news')
    .select('*')
    .then(res => {
        news = res.data;
        removeFilter();
        renderNews();
    })
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
        img.setAttribute('src', news.Image);
        img.alt = 'اخبر اقتصادی و بانکی'

        imgContainer.append(img);

        const newsDetails = $.createElement('div');
        newsDetails.classList.add('news-details');

        const title = $.createElement('h1');
        title.textContent = news.title;

        const date = $.createElement('p');
        date.classList.add('date');
        date.innerHTML = news.date;

        const content = $.createElement('p');
        content.textContent = news.content;

        const linkButton = $.createElement('button');
        linkButton.classList.add('news-btn');

        const link = $.createElement('a');
        link.textContent = 'ادامه مطلب';
        link.ariaLabel = 'link to news';
        link.href = news.link;

        linkButton.append(link);

        const arrowBtn = $.createElement('button');
        arrowBtn.classList.add('arrow-btn');

        const arrowIcon = $.createElement('i');
        arrowBtn.classList.add('bi', "bi-arrow-left-short");

        arrowBtn.append(arrowIcon);

        newsDetails.append(title, date, content, linkButton, arrowBtn);
        newsContainer.append(imgContainer, newsDetails);

        const underline = $.createElement('div');
        underline.classList.add('underline', 'show-underline');

        newsFragment.append(newsContainer, underline);
    })
}

window.addEventListener('load', () => {
    getNewsData();
})
