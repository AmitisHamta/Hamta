"use strict"

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

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
                    <img src="assets/Images/HamtaLogo.png" alt="شرکت آمیتیس همتا" id="form-logo">
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
                            <button class="btn btn-secondary dropdown-toggle" id="drop-btn" type="button" data-bs-toggle="dropdown" data-type="products" aria-expanded="false">
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
        this.inputs = this.shadowRoot.querySelectorAll('.input');
        this.menuBtn = this.shadowRoot.querySelector('#drop-btn');
        const items = this.shadowRoot.querySelectorAll('.dropdown-item');
        const form = this.shadowRoot.getElementById('request-form');
        this.agencyCheckbox = this.shadowRoot.getElementById('agency');
        this.posCustomerCheckbox = this.shadowRoot.getElementById('pos-customer');

        this.supabase = createClient
        ('https://wbkeahghzxpcrxdbmdge.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6India2VhaGdoenhwY3J4ZGJtZGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5OTU3MDQsImV4cCI6MjAyMTU3MTcwNH0.g0VDd1nt_JwDOKjItT6pWdtLjLqm9zs5k1toXLCHo5I');

        this.menuBtn.addEventListener('click', () => {
            this.showMenu();
        })

        items.forEach(item => {
            item.addEventListener('click', () => {
                this.chooseItem(item);
            })
        })

        form.addEventListener('submit', event => {
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
        this.menuBtn.textContent = item.textContent;
        this.hideMenu();
    }

    checkPage () {
        if (location.href.includes('service')) {
            const formTitle = this.shadowRoot.querySelector('#request-title');
            const list = this.shadowRoot.querySelector('.dropdown-menu');

            this.menuBtn.textContent = 'خدمت';
            this.menuBtn.dataset.type = 'service';
            
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
        const checkBoxes = this.shadowRoot.querySelector('.checkBoxes');
        const posCustomerLabel = this.shadowRoot.getElementById('pos-customer-label');

        if (this.menuBtn.textContent.includes('شتابی')) {
            checkBoxes.classList.add('display-flex');
            posCustomerLabel.textContent = 'درخواست به عنوان متقاضی'
        }else if (this.menuBtn.textContent.includes('شاپرکی')) {
            checkBoxes.classList.add('display-flex');
            posCustomerLabel.textContent = 'فعالسازی POS'
        }else {
            checkBoxes.classList.remove('display-flex');
        }
    }

    checkInfo () {
        const phoneInput = this.shadowRoot.getElementById('phone');
        const phoneRegex = /^(?:(?:\+|00)98|0)?9\d{9}$/;
        let isEmpty = false;

        this.inputs.forEach(input => {
            if (!input.value) {
                this.showErrorMsg("* لطفا اطلاعات رو تکمیل کنید");
                isEmpty = true;
                return false
            }
        })

        if (!isEmpty) {
            if (!phoneRegex.test(phoneInput.value)) {
                this.showErrorMsg('* شماره موبایل صحیح نمیباشد');
            }else if (this.menuBtn.dataset.type === 'products'){
                if (this.menuBtn.textContent.includes('محصول')){
                    this.showErrorMsg('* لطفا محصول مورد نظر را انتخاب نمایید');
                }else {
                    this.showSuccessMsg("* به زودی با شما تماس خواهیم گرفت");
                    this.submitProductRequest();
                }
            }else { 
                if (this.menuBtn.textContent.includes('خدمت')){
                    this.showErrorMsg('* لطفا خدمات مورد نظر را انتخاب نمایید')
                }else if (this.menuBtn.textContent.includes('شتابی') || this.menuBtn.textContent.includes('شاپرکی')) {
                    
                    if (this.agencyCheckbox.checked || this.posCustomerCheckbox.checked) {
                        this.submitServiceRequest();
                    }else {
                        this.showErrorMsg('* لطفا خدمت درخواستی خود را انتخاب نمایید')
                    }
                }else {
                    this.submitServiceRequest();
                }
            }
        }
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

    resetInputs () {
        this.inputs.forEach(input => {
            input.textContent = '';
        })
    }

    checkServiceType () {
        let serviceType = null;

        if (this.agencyCheckbox || this.posCustomerCheckbox) {
            if (this.agencyCheckbox.checked) {
                const typeLabel = this.shadowRoot.getElementById('agency-label');
                serviceType = typeLabel.textContent;
            }else if (this.posCustomerCheckbox.checked) {
                const typeLabel = this.shadowRoot.getElementById('pos-customer-label');
                serviceType = typeLabel.textContent;
            }
        }

        return serviceType;
    }

    async submitServiceRequest () {
        const serviceType = this.checkServiceType();

        const { data, error } = await this.supabase
        .from('service-request')
        .insert({
            name: this.inputs[0].value,
            lastname: this.inputs[1].value,
            number: this.inputs[2].value,
            service: this.menuBtn.textContent,
            type: serviceType
        })

        if (error) {
            this.showErrorMsg('* لطفا دوباره تلاش کنید');
        }else {
            this.showSuccessMsg('* اطلاعات شما با موفقیت ثبت شد');
            this.resetInputs();
        }
    }

    submitProductRequest () {}
}

export {Form};