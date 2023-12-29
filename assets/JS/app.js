"use strict"

const $ = document;
const header = $.getElementById('header');
const navBtns = $.querySelectorAll('.nav-btn');
const underlines = $.querySelectorAll('.underline');

const setHeaderAnimation = () => {
    setTimeout(() => {
        header.classList.add('slide-in-blurred-top');
    }, 1000);

    // if ($.readyState === 'complete') {
    //     header.classList.add('slide-in-blurred-top');
    // }
}

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

window.addEventListener('DOMContentLoaded', () => {
    setHeaderAnimation();
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