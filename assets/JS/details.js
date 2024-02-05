"use strict"

import {Header} from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";
import { Loader } from "../components/loader/loader.js";

window.customElements.define('site-header', Header);
window.customElements.define('site-footer', Footer);
window.customElements.define('site-loader', Loader);

const $ = document;
const container = $.getElementById('container');
const contentContainer = $.getElementById('content-container')
const mainTexts = $.querySelectorAll('.maintext-container');

const contentFragment = $.createDocumentFragment();

const featureImgs = [
   "assets/Images/k9Feature1.webp",
   "assets/Images/k9Feature2.webp",
   "assets/Images/k9Feature3.webp",
   "assets/Images/k9Feature4.webp",
   "assets/Images/k9Feature5.webp",
   "assets/Images/k9Feature6.webp",
   "assets/Images/k9Feature7.webp",
   "assets/Images/k9Feature8.webp",
]

const featureDescripts = [
    'ارتباط نزدیک به فیلد',
    'کارت های مغناطیسی',
    'بارکد',
    'کارت های هوشمند',
    'محافظ صفحه شیشه',
    'کیف دستگاه',
    'انواع پایه های شارژ',
    'قاب سیلیکونی',
]

const removeFilter = () => {
    container.style.filter = 'none';
}

const showMainTexts = () => {
    mainTexts.forEach(text => {
        text.classList.add('opacity-1', 'slide-in-blurred-right');
    })
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

// const renderPageContent = () => {
//     contentContainer.innerHTML = '';

//     generatePageContent();

//     contentContainer.append(contentFragment);

//     renderPageInfo()
// }

// const generatePageContent = () => {
//     const mainSection = $.createElement('div');
//         mainSection.id = 'main-section';

//         const bgContainer = $.createElement('div');
//         bgContainer.classList.add('bg-container')

//         const bg = $.createElement('img');
//         bg.setAttribute('src', "assets/Images/k9Banner.webp");
//         bg.alt = 'کش لس'

//         bgContainer.append(bg)

//         const mainContent = $.createElement('div');
//         mainContent.id = 'main-content';

//         const mainTextContainer1 = $.createElement('div');
//         mainTextContainer1.classList.add('maintext-container');

//         const mainText = $.createElement('h1');
//         mainText.id = 'main-text';

//         const category = $.createElement('span');
//         const model = $.createElement('span');
//         category.id = 'category';
//         model.id = 'model'
//         category.textContent = 'کش لس';
//         model.textContent = 'K9';
//         mainText.innerHTML = `دستگاه`;
//         mainText.append(category, model)

//         const rightline = $.createElement('div');
//         rightline.classList.add('rightline');

//         mainTextContainer1.append(mainText, rightline);

//         const mainTextContainer2 = $.createElement('div');
//         mainTextContainer2.classList.add('maintext-container');
//         const mainDescript = $.createElement('p');
//         mainDescript.id = 'main-descript';
//         mainDescript.textContent = 'تمام نیازهای پرداخت در یک دستگاه را برآورده میکند';
//         const spanRightline = $.createElement('span');
//         spanRightline.classList.add('rightline');

//         mainTextContainer2.append(mainDescript, spanRightline);
//         mainContent.append(mainTextContainer1, mainTextContainer2);
//         mainSection.append(bgContainer, mainContent);

//         const waveBg = $.createElement('div');
//         waveBg.classList.add('wave-bg', 'wave');
//         waveBg.style.position = 'realtive';
//         waveBg.style.zIndex = 1;
//         waveBg.style.marginTop = '-14vh';

//         const wave = $.createElement('img');
//         wave.setAttribute('src', "assets/Images/details-wave.svg");
//         wave.alt = 'شرکت آمیتیس همتا';
        
//         waveBg.append(wave);

//         const outlineBg = $.createElement('div');
//         outlineBg.classList.add('wave-bg', 'outline');
//         outlineBg.style.position = 'realtive';
//         outlineBg.style.zIndex = 1;
//         outlineBg.style.marginTop = '-14vh';

//         const outline = $.createElement('img');
//         outline.setAttribute('src', "assets/Images/details-wave3.svg");
//         outline.alt = 'شرکت آمیتیس همتا';
        
//         outlineBg.append(outline);

//         const featuresSection1 = $.createElement('div');
//         featuresSection1.classList.add('features-section');
//         featuresSection1.style.marginTop = '-8px';

//         const bgContainer2 = $.createElement('div');
//         bgContainer2.classList.add('.bg-container');
//         bgContainer2.id = 'featureImg1';
//         bgContainer2.style.width = '30%';
//         bgContainer2.style.right = '15%';
//         bgContainer2.style.height = '147%';

//         const bg2 = $.createElement('img');
//         bg2.setAttribute('src', "assets/Images/k9Page2.webp");
//         bg2.alt = 'کش لس';
//         bg2.style.zIndex = 1;
//         bg2.style.position = 'realtive';

//         bgContainer2.append(bg2);

//         const featuresContainer1 = $.createElement('div');
//         featuresContainer1.classList.add('features-container');

//         const featuresTitle1 = $.createElement('h1');
//         featuresTitle1.classList.add('features-title');
//         featuresTitle1.innerHTML = 'یک دستگاه،<br> با تمام سناریوهای پرداخت';

//         const features = $.createElement('div');
//         features.classList.add('features');

//         for(let i = 0; i < 4; i++) {
//             const feature = $.createElement('div');
//             feature.classList.add('feature');

//             const featureImg = $.createElement('img');
//             featureImg.setAttribute('src', featureImgs[i]);

//             const featureDescript = $.createElement('p');
//             featureDescript.textContent = featureDescripts[i];

//             feature.append(featureImg, featureDescript);
//             features.append(feature);
//         }

//         featuresContainer1.append(featuresTitle1, features);
//         featuresSection1.append(bgContainer2, featuresContainer1)

//         const outlineBg2 = $.createElement('div');
//         outlineBg2.classList.add('wave-bg', 'outline');
//         outlineBg2.style.position = 'realtive';
//         outlineBg2.style.zIndex = 3;
//         outlineBg2.style.transform = 'rotate(180deg)';
//         outlineBg2.style.marginTop = '-1vh';

//         const outline2 = $.createElement('img');
//         outline2.setAttribute('src', "assets/Images/details-wave3.svg");
//         outline2.alt = 'شرکت آمیتیس همتا';
        
//         outlineBg2.append(outline2);

//         const waveBg2 = $.createElement('div');
//         waveBg2.classList.add('wave-bg', 'wave');
//         waveBg2.style.position = 'realtive';
//         waveBg2.style.zIndex = 3;
//         waveBg2.style.marginTop = '-2vh';

//         const wave2 = $.createElement('img');
//         wave2.setAttribute('src', "assets/Images/details-wave2.svg");
//         wave2.alt = 'شرکت آمیتیس همتا';
        
//         waveBg2.append(wave2);

//         contentFragment.append(mainSection, waveBg, outlineBg, featuresSection1, outlineBg2, waveBg2)
// }

// const renderPageInfo = () => {
//     const bgs = $.querySelectorAll('.bg-container img');
//     bgs.forEach((bg, index) => {
//         if (index === 0) {
//             bg.setAttribute('src', "assets/Images/k9Banner.webp");
//         }else if (index === 1) {
//             bg.setAttribute('src', "assets/Images/k9Page2.webp");

//         }else if (index === 2) {
//             bg.setAttribute('src', "assets/Images/k9Info.webp");
            
//         } else {
//             bg.setAttribute('src', "assets/Images/k9Page3.webp");
//         }
//     })

//     const model = $.getElementById('model');
//     const category = $.getElementById('category');
//     console.log(category);

//     category.textContent = 'کش لس';
//     model.textContent = 'K9';

//     const mainDescript = $.getElementById('main-descript');
//     mainDescript.textContent = 'تمام نیازهای پرداخت در یک دستگاه را برآورده میکند';

//     const featuresTitle = $.querySelectorAll('.features-title');
//     featuresTitle[0].innerHTML = 'یک دستگاه،<br> با تمام سناریوهای پرداخت';
//     featuresTitle[1].textContent = 'لوازم جانبی فراوان';

//     const featuresImg = $.querySelectorAll('.feature img');
//     featuresImg.forEach((img, index) => {
//         index === 0 ? img.setAttribute('src', "assets/Images/k9Feature1.webp") : 
//         index === 1 ? img.setAttribute('src', "assets/Images/k9Feature2.webp") : 
//         index === 2 ? img.setAttribute('src', "assets/Images/k9Feature3.webp") :
//         index === 3 ? img.setAttribute('src', "assets/Images/k9Feature4.webp") :
//         index === 4 ? img.setAttribute('src', "assets/Images/k9Feature5.webp") :
//         index === 5 ? img.setAttribute('src', "assets/Images/k9Feature6.webp") :
//         index === 6 ? img.setAttribute('src', "assets/Images/k9Feature7.webp") :
//         index === 7 ? img.setAttribute('src', "assets/Images/k9Feature8.webp") : false;
//     });

//     const featuresTitles = $.querySelectorAll('.feature p');
//     featuresTitles.forEach((title, index) => {
//         index === 0 ? title.textContent = 'ارتباط نزدیک به فیلد' : 
//         index === 1 ? title.textContent = 'کارت های مغناطیسی' : 
//         index === 2 ? title.textContent = 'بارکد':
//         index === 3 ? title.textContent = 'کارت های هوشمند' :
//         index === 4 ? title.textContent = 'محافظ صفحه شیشه' :
//         index === 5 ? title.textContent = 'کیف دستگاه' :
//         index === 6 ? title.textContent = 'انواع پایه های شارژ' :
//         index === 7 ? title.textContent = 'قاب سیلیکونی' : false;
//     });

//     const infoTitles = $.querySelectorAll('.info-details h1');
//     infoTitles.forEach((title, index) => {
//         index === 0 ? title.textContent = 'سرعت بالا، چاپگر حرارتی' : 
//         index === 1 ? title.textContent = 'طراحی دو سیمکارت' : 
//         index === 2 ? title.textContent = 'طراحی باتری مجزا': false;
//     })

//     const infoDescripts = $.querySelectorAll('.info-details p');
//     infoDescripts.forEach((descript, index) => {
//         index === 0 ? descript.innerHTML = `چاپگر حرارتی سیکو 58 میلی‌متری/40 میلی‌متری، از تشخیص وضعیت چاپگر پشتیبانی می‌کند. <br> سرعت چاپ تا 18 خط در ثانیه` : 
//         index === 1 ? descript.innerHTML = `پشتیبانی از تمامی پروتکل های ارتباطی: <br> پشتیبانی از 2G/3G/4G، WIFI، بلوتوث، اترنت، GPS` : 
//         index === 2 ? descript.innerHTML = `باتری قابل جابجایی کاربران را برای تعویض باتری راحت تر می کند و استقامت را افزایش می دهد. <br> 13 روز آماده به کار فوق العاده طولانی <br> 1000+ تراکنش  با یک بار شارژ کامل`: false;

//         const rightline = $.createElement('div');
//         rightline.classList.add('rightline');
//         descript.append(rightline)
//     })

//     const technoTitles = $.querySelectorAll('.techno-details h3');
//     technoTitles.forEach((title, index) => {
//         index === 0 ? title.textContent = 'طراحی دوربین دوگانه': 
//         index === 1 ? title.textContent = 'سیستم Android OS' : 
//         index === 2 ? title.textContent = 'نمایشگر 5.5 HD': 
//         index === 3 ? title.textContent = 'عملکرد بالا' : false;
//     })

//     const tecnoDescripts = $.querySelectorAll('.techno-details p');
//     tecnoDescripts.forEach((descript, index) => {
//         index === 0 ? descript.innerHTML = `توانایی اسکن عالی `: 
//         index === 1 ? descript.innerHTML = `Android OS 5.1/8.1/10` : 
//         index === 2 ? descript.innerHTML = `صفحه نمایش تاچ، پشتیبانی از حرکات تمام صفحه`:
//         index === 3 ? descript.innerHTML = `طراحی ارگونومیک، <br> راحت برای در دست گرفتن، پرسرعت برای کار.</p>` : false;

//         const rightline = $.createElement('div');
//         rightline.classList.add('rightline');
//         descript.append(rightline)
//     })
// }

window.addEventListener('load', () => {
    // renderPageContent();
    removeFilter();
    showMainTexts();
    preventRightClick()
})