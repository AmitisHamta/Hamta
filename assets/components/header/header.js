"use strict"
const $ = document;

const template = $.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="assets/components/header/header.css">
<header id="header" class="animate__animated animate__fadeInDown">
            <nav id="navbar">
                <a id="header-logo" href="index.html">
                    <img src="./assets/Images/HamtaLogo.png" alt="">
                    <!-- <h1 id="header-logo-name">
                        آمیتیس همتا
                    </h1> -->
                </a>
                <div id="nav-list">
                    <button class="nav-btn">
                        <a href="index.html">صفحه اصلی</a>
                        <div class="underline display-none"></div>
                    </button>
                    <button class="nav-btn">
                        <a href="about.html">درباره ما</a>
                        <div class="underline display-none"></div>
                    </button>
                    <button class="nav-btn">
                        <a href="#service">خدمات</a>
                        <div class="underline display-none"></div>
                    </button>
                    <button class="nav-btn" id="products-btn">
                        <a href="products.html">محصولات</a>
                        <div class="underline display-none"></div>
                        <div class="products-dropdown">
                            <div class="list-container">
                                <ul class="products-list">
                                    <li>
                                        <a href="products.html#cashless">کش لس</a>
                                        <div class="underline"></div>
                                    </li>
                                    
                                    <li>
                                        <a href="products.html#pos">کارتخوان</a>
                                        <div class="underline"></div>
                                    </li>
                                    
                                    <li>
                                        <a href="products.html#atm">خودپرداز</a>
                                        <div class="underline"></div>
                                    </li>

                                    <li>
                                        <a href="products.html#essentials">ملزومات بانکی</a>
                                        <div class="underline"></div>
                                    </li>
                                    
                                    <li>
                                        <a href="products.html#cashbox">صندوق فروشگاهی</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="dropdown-box"></div>
                        </div>
                    </button>
                    <button class="nav-btn">
                        <a href="#footer">ارتباط با ما</a>
                        <div class="underline display-none"></div>
                    </button>
                </div>
                <div id="navbar-buttons">
                    <button class="panel-btn bg-blue">
                        <a href="https://plus.hamtabank.com" target="_blank">
                            پنل نمایندگان
                        </a>
                    </button>
                    <button class="panel-btn">
                        <a href="https://plus.hamtabank.com/agent-registration/new" target="_blank">
                            ثبت نام نماینده
                        </a>
                    </button>
                </div>
            </nav>
        </header>
`

class Header extends HTMLElement {
    constructor () {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback () {
        const header = this.shadowRoot.getElementById('header');
        const navBtns = this.shadowRoot.querySelectorAll('.nav-btn');
        const underlines = this.shadowRoot.querySelectorAll('.underline');
        const productsBtn = this.shadowRoot.getElementById('products-btn');
        const productsDropdown = this.shadowRoot.querySelector('.products-dropdown');
        const dropdownBox = this.shadowRoot.querySelector('.dropdown-box');
        const productsList = this.shadowRoot.querySelector('.list-container');

        window.addEventListener('DOMContentLoaded', () => {
            this.resizeHeader(header);
        })

        window.addEventListener('scroll', () => {
            this.resizeHeader(header);
        })

        navBtns.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                this.showUnderline(btn, underlines);
            })
        })
        
        navBtns.forEach(btn => {
            btn.addEventListener('mouseleave', () => {
                this.hideUnderline(btn, underlines);
            })
        })

        productsBtn.addEventListener('mouseenter', () => {
            this.showProductsMenu(productsList, dropdownBox, productsDropdown);
        })
        
        productsBtn.addEventListener('mouseleave', () => {
            this.hideProductsMenu(productsDropdown);
        })
    }

    resizeHeader (header) {
        if ($.documentElement.scrollTop >= 30) {
            header.classList.add('moved');
        }else {
            header.classList.remove('moved');
        }
    }

    showUnderline (btn, underlines) {
        underlines.forEach(underline => {
            if (btn.contains(underline)) {
                underline.classList.remove('display-none');
            }
        })
    }

    hideUnderline (btn, underlines){
        underlines.forEach(underline => {
            if (btn.contains(underline)) {
                underline.classList.add('exit-underline');
                setTimeout(() => {
                    underline.classList.add('display-none')
                }, 350)
            }
        })
    }

    showProductsMenu (productsList, dropdownBox, productsDropdown) {
        productsList.classList.remove('display-flex');
        dropdownBox.classList.remove('display-none');
        dropdownBox.classList.add('dropdown');
        productsDropdown.classList.remove('hide-products');
        productsDropdown.classList.add('show-products');
        setTimeout(() => {
            dropdownBox.classList.add('display-none');
        }, 1000);
        setTimeout(() => {
            productsList.classList.add('display-flex')
        }, 500);
    }
    
    hideProductsMenu (productsDropdown) {
        productsDropdown.classList.remove('show-products');
        productsDropdown.classList.add('hide-products');
    }
    
}

export {Header};