"use strict"

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

import {Header} from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";
import { Loader } from "../components/loader/loader.js";

window.customElements.define('site-header', Header);
window.customElements.define('site-footer', Footer);
window.customElements.define('site-loader', Loader);

const $ = document;
const container = $.getElementById('container');
const mainText = $.getElementById('main-text');
const mainDescript = $.getElementById('main-descript');
const textBoxes = $.querySelectorAll('.text-box');
const companies = $.querySelectorAll('.company');
const newsList = $.getElementById('news-body');

const companyLogos = [
    {id: 'c0', logo: 'assets/Images/pardakh-novin.webp', orangeLogo: 'assets/Images/pardakh-novin-O.webp'},
    {id: 'c1', logo: 'assets/Images/fan ava.webp', orangeLogo: 'assets/Images/fan ava O.webp'},
    {id: 'c2', logo: 'assets/Images/iran kish.webp', orangeLogo: 'assets/Images/iran kish O.webp'},
    {id: 'c3', logo: 'assets/Images/sepehr.webp', orangeLogo: 'assets/Images/sepehr O.webp'},
    {id: 'c4', logo: 'assets/Images/sayan.webp', orangeLogo: 'assets/Images/sayan O.webp'},
    {id: 'c5', logo: 'assets/Images/pasargard.webp', orangeLogo: 'assets/Images/pasargard O.webp'},
    {id: 'c6', logo: 'assets/Images/shatel.webp', orangeLogo: 'assets/Images/shatel O.webp'},
    {id: 'c7', logo: 'assets/Images/TIT.webp', orangeLogo: 'assets/Images/TIT O.webp'},
    {id: 'c8', logo: 'assets/Images/sabin.webp', orangeLogo: 'assets/Images/sabin    O.webp'},
    {id: 'c9', logo: 'assets/Images/navako.webp', orangeLogo: 'assets/Images/navako O.webp'},
    {id: 'c10', logo: 'assets/Images/negah.webp', orangeLogo: 'assets/Images/negah-O.webp'},
    {id: 'c11', logo: 'assets/Images/kpec.webp', orangeLogo: 'assets/Images/kpec O.webp'},
    {id: 'c12', logo: 'assets/Images/armaghan.webp', orangeLogo: 'assets/Images/armaghan O.webp'},
    {id: 'c13', logo: 'assets/Images/torna.webp', orangeLogo: 'assets/Images/torna O.webp'},
    {id: 'c14', logo: 'assets/Images/telecom.webp', orangeLogo: 'assets/Images/telecom O.webp'},
    {id: 'c15', logo: 'assets/Images/hamoon.webp', orangeLogo: 'assets/Images/hamoon O.webp'},
    {id: 'c16', logo: 'assets/Images/ava parsi.webp', orangeLogo: 'assets/Images/ava parsi O.webp'},
    {id: 'c17', logo: 'assets/Images/andishe negar.webp', orangeLogo: 'assets/Images/andishe negar O.webp'},
]

const supabase = createClient
('https://wbkeahghzxpcrxdbmdge.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6India2VhaGdoenhwY3J4ZGJtZGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5OTU3MDQsImV4cCI6MjAyMTU3MTcwNH0.g0VDd1nt_JwDOKjItT6pWdtLjLqm9zs5k1toXLCHo5I');


const newsFragment = $.createDocumentFragment();

let news = [];

const removeFilter = () => {
    container.style.filter = 'none';
}

const preventRightClick = () => {
    const images = $.querySelectorAll('img');
    const videos = $.querySelectorAll('video')
    images.forEach(img => {
        img.addEventListener('contextmenu', event => {
            event.preventDefault()
        })
    })

    videos.forEach(video => {
        video.addEventListener('contextmenu', event => {
            event.preventDefault()
        })
    })
}

const setBoxesAnimation = () => {
    textBoxes.forEach(box => {
        box.classList.add('swipe-in-out-right')
    })
}

const showMainTexts = () => {
    setTimeout(() => {
        mainText.style.opacity = 1;
        mainDescript.style.opacity = 1;
    }, 1250);
}

const setLines = () => {
    const aboutTarget = $.querySelector(`#about-content .section-title .underline`);
    if ($.documentElement.scrollTop >= 200) {
        aboutTarget.classList.remove('exit-underline')
        aboutTarget.classList.add('show-underline');
    }else {
        aboutTarget.classList.remove('show-underline');
        aboutTarget.classList.add('exit-underline')
    }

    const serviceTarget = $.querySelector(`#service-content .section-title .underline`);

    if ($.documentElement.scrollTop >= 1300) {
        serviceTarget.classList.remove('exit-underline')
        serviceTarget.classList.add('show-underline');
        serviceTarget.classList.add('width-100')
    }else {
        serviceTarget.classList.remove('show-underline');
        serviceTarget.classList.add('exit-underline')
        serviceTarget.classList.remove('width-100')
    }

    const serviceRight = $.querySelectorAll(`#service-content .service-info .rightline`);
    const serviceLeft = $.querySelectorAll(`#service-content .service-info .leftline`);

    if ($.documentElement.scrollTop >= 1700) {
        serviceRight[0].classList.remove('exit-rightline');
        serviceRight[0].classList.add('show-rightline');
        serviceRight[0].classList.add('height-100')
    }else {
        serviceRight[0].classList.remove('show-rightline');
        serviceRight[0].classList.add('exit-rightline');
        serviceRight[0].classList.remove('height-100')
    }

    if ($.documentElement.scrollTop >= 2100) {
        serviceRight[1].classList.remove('exit-rightline');
        serviceRight[1].classList.add('show-rightline');
        serviceRight[1].classList.add('height-100')
    }else {
        serviceRight[1].classList.remove('show-rightline');
        serviceRight[1].classList.add('exit-rightline');
        serviceRight[1].classList.add('height-100')
    }

    if ($.documentElement.scrollTop >= 1900) {
        serviceLeft[0].classList.remove('exit-leftline');
        serviceLeft[0].classList.add('show-leftline');
        serviceLeft[0].classList.add('height-100')
    }else {
        serviceLeft[0].classList.remove('show-leftline');
        serviceLeft[0].classList.add('exit-leftline');
        serviceLeft[0].classList.remove('height-100')
    }
}

const showCompanyLogo = company => {
    const index = company.id;

    const logoImg = $.querySelector(`#${index} img`);

    companyLogos.some(logo => {
        if (index == logo.id) {
            logoImg.setAttribute('src', logo.logo);
            return true;
        }
    })
}

const showOrangeCompanyLogo = company => {
    const index = company.id;

    const logoImg = $.querySelector(`#${index} img`);

    companyLogos.some(logo => {
        if (index == logo.id) {
            logoImg.setAttribute('src', logo.orangeLogo);
            return true;
        }
    })
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

const generateNews = (newsData, fragment) => {
    newsData.forEach((news, index) => {
        const newsContainer = $.createElement('div');
        newsContainer.classList.add('news');
        if (index === 0 || index === 2) {
            newsContainer.dataset.aos = 'fade-right';
        }else if (index === 1 || index === 3) {
            newsContainer.dataset.aos = 'fade-left';
        }

        const link = $.createElement('a');
        link.href = news.link;
        link.ariaLabel = 'اخبار بانکی و اقتصادی';

        const img = $.createElement('img');
        img.setAttribute('src', news.Image);
        img.alt = 'اخبار بانکی و اقتصادی';

        link.append(img);

        const newsDetails = $.createElement('div');
        newsDetails.classList.add('news-details');

        const title = $.createElement('h3');
        title.innerHTML = news.title;

        const description = $.createElement('p');
        description.innerHTML = news.content;

        newsDetails.append(title, description);
        newsContainer.append(link, newsDetails);

        fragment.append(newsContainer);

    })
}

window.addEventListener('load', () => {
    getNewsData();
    removeFilter();
    preventRightClick()
    setBoxesAnimation();
    showMainTexts();
    setLines();
})

window.addEventListener('scroll', () => {
    setLines();
})

companies.forEach(company => {
    company.addEventListener('mouseenter', event => {
        showCompanyLogo(event.target)
    })

    company.addEventListener('mouseleave', event => {
        showOrangeCompanyLogo(event.target)
    })
})