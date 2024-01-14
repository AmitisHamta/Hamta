"use strict"

const $ = document;
const template = $.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
<link rel="stylesheet" href="assets/components/footer/footer.css">
<footer id="footer">
            <div class="wave-bg">
                <img src="assets/Images/wave-haikei (3).svg" alt="">
            </div>
            <div id="footer-content">
                <h1>
                    شرکت آمیتیس همتا
                </h1>
                <hr>
                <div id="footer-info">
                    <div class="footer-list footer-description">
                        <p>
                            عموم افراد حاضر در این شرکت از میان فعالان حوزه پرداخت های الکترونیکی بویژه در زمینه POS و ATM 
                            و ... و تعدادی از مدیران،کارشناسان و صاحب نظران شاغل و بازنشسته در حوزه های مالی و بانکی می باشند.
                        </p>
                        <p>
                            <i class="bi bi-geo-alt-fill"></i>
                            آدرس: خیابان میزاری شیرازی، کوچه شهدا، پلاک 23، طبقه پنجم، واحد 11
                        </p>
                        <div id="social-btns-list">
                            <button class="social-btns">
                                <a href="index.html" target="_blank" title="Website">
                                    <i class="bi bi-globe2"></i>
                                </a>
                            </button>
                            <button class="social-btns">
                                <a href="mailto:info@hamtasb.com" target="_blank" title="Email">
                                    <i class="bi bi-envelope"></i>
                                </a>
                            </button>
                            <button class="social-btns">
                                <a href="tel:+9802158702" target="_blank" title="Phone">
                                    <i class="bi bi-telephone-fill"></i>
                                </a>
                            </button>
                            <button class="social-btns">
                                <a href="https://www.instagram.com/hamta.psp" target="_blank" title="Instagram">
                                    <i class="bi bi-instagram"></i>
                                </a>
                            </button>
                            <button class="social-btns">
                                <a href="https://maps.app.goo.gl/SnUcEP8mfzfehgKDA" target="_blank" title="Location">
                                    <i class="bi bi-geo-alt-fill"></i>
                                </a>
                            </button>
                        </div>
                    </div>
                    <div id="footer-lists">
                        <div class="footer-list">
                            <h3>منابع</h3>
                            <ul>
                                <li>
                                    <a href="index.html">صفحه اصلی</a>
                                </li>
                                <li>
                                    <a href="about.html">درباره ما</a>
                                </li>
                                <li>
                                    <a href="service.html">خدمات</a>
                                </li>
                                <li>
                                    <a href="products.html">محصولات</a>
                                </li>
                                <li>
                                    <a href="contact.html">ارتباط با ما</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-list">
                            <h3>ارتباط با ما</h3>
                            <ul>
                                <li>
                                    <a href="">
                                        سایت
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+9802158702" target="_blank">
                                        تلفن
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@hamtasb.com" target="_blank">
                                        ایمیل
                                    </a>
                                </li>
                                <li>
                                    <a href="https://maps.app.goo.gl/SnUcEP8mfzfehgKDA" target="_blank">
                                        آدرس
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/hamta.psp" target="_blank">
                                        اینیستاگرام
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr>
                <div id="footer-copyright">
                    <p>
                        <i class="bi bi-c-circle"></i>
                        تمامی حقوق برای <span>شرکت آمیتیس همتا</span> محفوظ میباشد
                    </p>
                    <p>
                        <span>Amitis Hamta</span> | Electronic and smart payment, since 2000
                    </p>
                </div>
            </div>
        </footer>
`

class Footer extends HTMLElement {
    constructor () {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback () {
        window.addEventListener('DOMContentLoaded', () => {
            this.checkPage()
        })
    }

    checkPage () {
        if (location.href.includes('products')) {
            const waveBg = this.shadowRoot.querySelector('.wave-bg');
            waveBg.style.display = 'none';
        }
    }
}

export {Footer};