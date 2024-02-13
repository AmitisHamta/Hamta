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
const inputs = $.querySelectorAll('.input');
const menuBtn = $.querySelector('#drop-btn');
const bankMenuBtn = $.querySelector('#bank-drop-btn');
const items = $.querySelectorAll('#drop-btn ~ .dropdown-menu .dropdown-item');
const banks = $.querySelectorAll('#bank-drop-btn ~ .dropdown-menu .dropdown-item');
const form = $.getElementById('request-form');

const supabase = createClient
('https://wbkeahghzxpcrxdbmdge.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6India2VhaGdoenhwY3J4ZGJtZGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5OTU3MDQsImV4cCI6MjAyMTU3MTcwNH0.g0VDd1nt_JwDOKjItT6pWdtLjLqm9zs5k1toXLCHo5I')

const phoneRegex = /^(?:(?:\+|00)98|0)?9\d{9}$/;

const removeFilter = () => {
    container.style.filter = 'none';
}

const showMenu = menuId => {
    const menu = $.querySelector(`#${menuId} ~ .dropdown-menu`);

    menu.classList.toggle('show');
}

const hideMenu = menuId => {
    const menu = $.querySelector(`#${menuId} ~ .dropdown-menu`);

    menu.classList.remove('show');
}

const chooseItem = (item, menu) => {
    menu.textContent = item.textContent;
    hideMenu(menu.id);
}

const checkInfo = () => {
    const phoneInput = $.getElementById('phone');
    const phoneRegex = /^(?:(?:\+|00)98|0)?9\d{9}$/;
    let isEmpty = false;

    inputs.forEach(input => {
        if (!input.value) {
            showErrorMsg("* لطفا اطلاعات رو تکمیل کنید");
            isEmpty = true;
            return false
        }
    })

    if (!isEmpty) {
        if (!phoneRegex.test(phoneInput.value)) {
            showErrorMsg('* شماره موبایل صحیح نمیباشد');
        }else if (menuBtn.textContent.includes('محصول')){
            showErrorMsg('* لطفا محصول مورد نظر را انتخاب نمایید');
        }else if (bankMenuBtn.textContent.includes('انتخاب')){
            showErrorMsg('* لطفا بانک مورد نظر را انتخاب نمایید');
        }else {
            submitRequest();
        }
    }
}

async function submitRequest () {

    const { data, error } = await supabase
    .from('cashless')
    .insert({
        name: inputs[0].value,
        lastname: inputs[1].value,
        phone: inputs[2].value,
        telephone: inputs[3].value,
        product: menuBtn.textContent,
        bank: bankMenuBtn.textContent
    })

    if (error) {
        showErrorMsg('لطفا دوباره تلاش کنید');
    }else {
        showSuccessMsg('اطلاعات شما با موفقیت ثبت شد، به زودی با شما تماس میگیریم *');
        resetInputs();
    }

}

const showErrorMsg = message => {
    const msg = $.querySelector('small');
    msg.textContent = message;
    msg.classList.remove('success');
    msg.classList.add('error');

    setTimeout(() => {
        msg.classList.remove('error');
    }, 5000);
}

const showSuccessMsg = message => {
    const msg = $.querySelector('small');
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
    menuBtn.textContent = 'محصول';
    bankMenuBtn.textContent = 'انتخاب بانک';
}

window.addEventListener('load', () => {
    removeFilter()
})

menuBtn.addEventListener('click', () => {
    showMenu(menuBtn.id);
})

bankMenuBtn.addEventListener('click', () => {
    showMenu(bankMenuBtn.id);
})

items.forEach(item => {
    item.addEventListener('click', () => {
        chooseItem(item, menuBtn);
    })
})

banks.forEach(item => {
    item.addEventListener('click', () => {
        chooseItem(item, bankMenuBtn);
    })
})

form.addEventListener('submit', event => {
    event.preventDefault();
    checkInfo();
})