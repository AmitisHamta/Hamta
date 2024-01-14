"use strict"

const $ = document;
const template = $.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" 
integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<link rel="stylesheet" href="assets/components/requestForm/form.css">
<div id="request-container">
            <form id="request-form">
                <div id="form-title">
                    <img src="assets/Images/HamtaLogo.png" alt="" id="form-logo">
                    <h1 id="request-title">درخواست محصول</h1>
                </div>
                <div id="request-inputs">
                    <div class="inputs">
                        <div class="form-floating">
                            <input type="text" class="input form-control" id="name" placeholder="نام">
                            <label for="name">نام</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" class="input form-control" id="lastname" placeholder="نام خانوادگی">
                            <label for="lastname">نام خانوادگی</label>
                        </div>
                    </div>
                    <div class="inputs">
                        <div class="form-floating">
                            <input type="text" placeholder="شماره تلفن" class="input form-control" id="phone">
                            <label for="phone">شماره تلفن</label>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" id="drop-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                محصول
                            </button>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item">کش لس</a></li>
                              <li><a class="dropdown-item">کارتخوان</a></li>
                              <li><a class="dropdown-item">خودپرداز</a></li>
                              <li><a class="dropdown-item">ملزومات بانکی</a></li>
                              <li><a class="dropdown-item">صندوق فروشگاهی</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="checkBoxes">
                        <div class="form-check form-check-reverse">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="agency">
                            <label class="form-check-label" for="agency" id="agency-label">
                                درخواست نمایندگی
                            </label>
                        </div>
                        <div class="form-check form-check-reverse">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="pos-customer">
                            <label class="form-check-label" for="pos-customer" id="pos-customer-label">
                            </label>
                        </div>
                    </div>
                </div>
                <button id="request-btn">ثبت درخواست</button>
                <small class="msg"></small>
            </form>
        </div>
`

class Form extends HTMLElement {
    constructor () {
        super();

        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback () {
        const productBtn = this.shadowRoot.querySelector('#drop-btn');
        const items = this.shadowRoot.querySelectorAll('.dropdown-item');
        const submitBtn = this.shadowRoot.getElementById('request-btn');

        productBtn.addEventListener('click', () => {
            this.showMenu();
        })

        items.forEach(item => {
            item.addEventListener('click', () => {
                this.chooseItem(item);
            })
        })

        submitBtn.addEventListener('click', event => {
            event.preventDefault();
            this.checkInfo();
        })

        window.addEventListener('DOMContentLoaded', () => {
            this.checkPage()
        })
    }

    showMenu () {
        const menu = this.shadowRoot.querySelector('.dropdown-menu');

        menu.classList.toggle('show');
    }

    hideMenu () {
        const menu = this.shadowRoot.querySelector('.dropdown-menu');

        menu.classList.remove('show');
    }

    chooseItem (item) {
        const productBtn = this.shadowRoot.querySelector('#drop-btn');
        
        productBtn.textContent = item.textContent;
        this.hideMenu();
    }

    checkInfo () {
        const inputs = this.shadowRoot.querySelectorAll('.input');
        const menuBtn = this.shadowRoot.getElementById('drop-btn');
        const phoneInput = this.shadowRoot.getElementById('phone');
        const phoneRegex = /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g;

        inputs.forEach(input => {
            if (!input.value) {
                this.showErrorMsg("* لطفا اطلاعات رو تکمیل کنید")
            }else if (!phoneRegex.test(phoneInput.value)) {
                this.showErrorMsg('* شماره موبایل صحیح نمیباشد');
            }else {
                if (menuBtn.textContent.includes('محصول')){
                    this.showErrorMsg('* لطفا محصول مورد نظر را انتخاب نمایید')
                }else {
                    this.showSuccessMsg("* به زودی با شما تماس خواهیم گرفت")
                }

                if (menuBtn.textContent.includes('خدمت')){
                    this.showErrorMsg('* لطفا خدمات مورد نظر را انتخاب نمایید')
                }else {
                    if (menuBtn.textContent.includes('شتابی') || menuBtn.textContent.includes('شاپرکی')) {
                        const agencyCheckbox = this.shadowRoot.getElementById('agency');
                        const posCustomerCheckbox = this.shadowRoot.getElementById('pos-customer');

                        if (agencyCheckbox.checked || posCustomerCheckbox.checked) {
                            this.showSuccessMsg("* به زودی با شما تماس خواهیم گرفت")
                        }else {
                            this.showErrorMsg('* لطفا خدمت درخواستی خود را انتخاب نمایید')
                        }
                    }
                }
            }
        })
    }

    showErrorMsg (message) {
        const msg = this.shadowRoot.querySelector('small');
        msg.textContent = message;
        msg.classList.remove('success');
        msg.classList.add('error');

        setTimeout(() => {
            msg.classList.remove('error');
        }, 5000);
    }

    showSuccessMsg (message) {
        const msg = this.shadowRoot.querySelector('small');
        msg.classList.remove('error');
        msg.classList.add('success');
        msg.textContent = message;

        setTimeout(() => {
            msg.classList.remove('success');
        }, 5000);
    }

    checkPage () {
        if (location.href.includes('service')) {
            const productBtn = this.shadowRoot.querySelector('#drop-btn');
            const formTitle = this.shadowRoot.querySelector('#request-title');
            const list = this.shadowRoot.querySelector('.dropdown-menu');

            productBtn.textContent = 'خدمت';
            formTitle.textContent = 'درخواست خدمات';
            list.innerHTML = '';
            list.insertAdjacentHTML(`beforeend`, `
                <li><a class="dropdown-item">خدمات شتابی</a></li>
                <li><a class="dropdown-item">خدمات شاپرکی</a></li>
                <li><a class="dropdown-item">پشتیبانی</a></li>
                <li><a class="dropdown-item">تعمیرات</a></li>
                <li><a class="dropdown-item">گارانتی</a></li>
            `);

            const items = this.shadowRoot.querySelectorAll('.dropdown-item');

            items.forEach(item => {
                item.addEventListener('click', () => {
                    this.chooseItem(item);
                    this.checkService()
                })
            })
        }
    }

    checkService () {
        const productBtn = this.shadowRoot.querySelector('#drop-btn');
        const checkBoxes = this.shadowRoot.querySelector('.checkBoxes');
        const posCustomerLabel = this.shadowRoot.getElementById('pos-customer-label');

        if (productBtn.textContent.includes('شتابی')) {
            checkBoxes.classList.add('display-flex');
            posCustomerLabel.textContent = 'درخواست به عنوان متقاضی'
        }else if (productBtn.textContent.includes('شاپرکی')) {
            checkBoxes.classList.add('display-flex');
            posCustomerLabel.textContent = 'فعالسازی POS'
        }else {
            checkBoxes.classList.remove('display-flex');
        }
    }
}

export {Form};