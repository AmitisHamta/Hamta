"use strict"

const $ = document;
const header = $.getElementById('header');
const navBtns = $.querySelectorAll('.nav-btn');
const underlines = $.querySelectorAll('.underline');
const mainText = $.getElementById('main-text');
const mainDescript = $.getElementById('main-descript')

const resizeHeader = () => {
    if ($.documentElement.scrollTop >= 30) {
        header.classList.add('moved');
    }else {
        header.classList.remove('moved')
    }
}

const showUnderline = btn => {
    underlines.forEach(underline => {
        if (btn.contains(underline)) {
            underline.classList.remove('display-none');
        }
    })
}

const hideUnderline = btn => {
    underlines.forEach(underline => {
        if (btn.contains(underline)) {
            underline.classList.add('exit-underline');
            setTimeout(() => {
                underline.classList.add('display-none')
            }, 350)
        }
    })
}

const showMainTexts = () => {
    setTimeout(() => {
        mainText.style.opacity = 1;
        mainDescript.style.opacity = 1;
    }, 1400);
}

window.addEventListener('load', () => {
    showMainTexts()
})

window.addEventListener('scroll', () => {
    resizeHeader();
})

navBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        showUnderline(btn);
    })
})

navBtns.forEach(btn => {
    btn.addEventListener('mouseleave', () => {
        hideUnderline(btn);
    })
})