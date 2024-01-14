"use strict"

import {Header} from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";
import { Loader } from "../components/loader/loader.js";

window.customElements.define('site-header', Header);
window.customElements.define('site-footer', Footer);
window.customElements.define('site-loader', Loader);

const $ = document;
const certifications = $.querySelectorAll('.certification');
const container = $.getElementById('container');
const selectBtn = $.querySelector('#drop-btn');
const menu = $.querySelector('.dropdown-menu');
const items = $.querySelectorAll('.dropdown-item');
const inputs = $.querySelectorAll('.input');
const submitBtn = $.getElementById('submit-btn');
const msg = $.querySelector('.noti-msg');
const textArea = $.getElementById('msg');
const phoneInput = $.getElementById('phone');

const phoneRegex = /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g;

const removeFilter = () => {
    container.style.filter = 'none';
}

const showMenu = () => {
    menu.classList.toggle('show');
}

const hideMenu = () => {
    menu.classList.remove('show');
}

const chooseItem = item => {
    selectBtn.textContent = item.textContent;
    checkService()
    hideMenu();
}

const checkService = () => {
    const checkBoxes = $.querySelector('.checkBoxes');
    const posCustomerLabel = $.getElementById('pos-customer-label');

    if (selectBtn.textContent.includes('شتابی')) {
        checkBoxes.classList.add('display-flex');
        posCustomerLabel.textContent = 'درخواست به عنوان متقاضی'
    }else if (selectBtn.textContent.includes('شاپرکی')) {
        checkBoxes.classList.add('display-flex');
        posCustomerLabel.textContent = 'فعالسازی POS'
    }else {
        checkBoxes.classList.remove('display-flex');
    }
}

const checkInfo = () => {
    inputs.forEach(input => {
        if (!input.value) {
            showErrorMsg('* لطفا اطلاعات خود را وارد کنید');
        }else if (!phoneRegex.test(phoneInput.value)) {
            showErrorMsg('* شماره موبایل صحیح نمیباشد');
        }else {
            if (selectBtn.textContent.includes('انتخاب')){
                showErrorMsg('* لطفا موضوع مورد نظر را انتخاب نمایید')
            }else if (!textArea.value) {
                showErrorMsg('* پیام خود را تایپ کنید')
            }else {
                if (selectBtn.textContent.includes('شتابی') || selectBtn.textContent.includes('شاپرکی')) {
                    const agencyCheckbox = $.getElementById('agency');
                    const posCustomerCheckbox = $.getElementById('pos-customer');

                    if (agencyCheckbox.checked || posCustomerCheckbox.checked) {
                        showSuccessMsg("* پیام شما با موفقیت ارسال شد")
                    }else {
                        showErrorMsg('* لطفا خدمت درخواستی خود را انتخاب نمایید')
                    }
                }else {
                    showSuccessMsg("* پیام شما با موفقیت ارسال شد")
                }
            }
        }
    })
}

const showErrorMsg = message => {
    msg.textContent = message;
    msg.classList.remove('success');
    msg.classList.add('error');

    setTimeout(() => {
        msg.classList.remove('error');
    }, 5000);
}

const showSuccessMsg = message => {
    msg.classList.remove('error');
    msg.classList.add('success');
    msg.textContent = message;

    setTimeout(() => {
        msg.classList.remove('success');
    }, 5000);
}

window.addEventListener('load', () => {
    removeFilter();
})

selectBtn.addEventListener('click', () => {
    showMenu();
})

items.forEach(item => {
    item.addEventListener('click', () => {
        chooseItem(item);
    })
})

submitBtn.addEventListener('click', event => {
    event.preventDefault();
    checkInfo();
})