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
const selectBtn = $.querySelector('#drop-btn');
const menu = $.querySelector('.dropdown-menu');
const items = $.querySelectorAll('.dropdown-item');
const inputs = $.querySelectorAll('.input');
const submitBtn = $.getElementById('submit-btn');
const msg = $.querySelector('.noti-msg');
const textArea = $.getElementById('msg');
const phoneInput = $.getElementById('phone');

const phoneRegex = /^(?:(?:\+|00)98|0)?9\d{9}$/;

const supabase = createClient
('https://wbkeahghzxpcrxdbmdge.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6India2VhaGdoenhwY3J4ZGJtZGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5OTU3MDQsImV4cCI6MjAyMTU3MTcwNH0.g0VDd1nt_JwDOKjItT6pWdtLjLqm9zs5k1toXLCHo5I');


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

    let isEmpty = false;

    inputs.forEach(input => {
        if (!input.value) {
            if (!input.value) {
                showErrorMsg('* لطفا اطلاعات خود را وارد کنید');
                isEmpty = true;
                return false;
            }
        }
    })
    
    if (!isEmpty) {
        if (!phoneRegex.test(phoneInput.value)) {
            showErrorMsg('* شماره موبایل صحیح نمیباشد');
        }else {
            if (selectBtn.textContent.includes('انتخاب')){
                showErrorMsg('* لطفا موضوع مورد نظر را انتخاب نمایید')
            }else if (!textArea.value) {
                showErrorMsg('* پیام خود را تایپ کنید')
            }else if (selectBtn.textContent.includes('شتابی') || selectBtn.textContent.includes('شاپرکی')) {
                const agencyCheckbox = $.getElementById('agency');
                const posCustomerCheckbox = $.getElementById('pos-customer');

                if (agencyCheckbox.checked || posCustomerCheckbox.checked) {
                    submitData();
                }else {
                    showErrorMsg('* لطفا خدمت درخواستی خود را انتخاب نمایید')
                }
            }else {
                submitData();
            }
        }
    }
}

async function submitData () {
    const { data, error } = await supabase
        .from('contacts-info')
        .insert({
            name: inputs[0].value,
            lastname: inputs[1].value,
            number: inputs[2].value,
            topic: selectBtn.textContent,
            message: textArea.value
        })

        if (error) {
            showErrorMsg('* لطفا دوباره تلاش کنید');
        }else {
            showSuccessMsg("* پیام شما با موفقیت ارسال شد")
            resetInputs();
        }
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

const resetInputs = () => {
    inputs.forEach(input => {
        input.value = '';
    })

    textArea.value = '';
    selectBtn.textContent = 'موضوع';
    checkService();
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