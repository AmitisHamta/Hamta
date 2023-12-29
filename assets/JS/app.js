"use strict"

const $ = document;
const header = $.getElementById('header');
const navBtns = $.querySelectorAll('.nav-btn');
const underlines = $.querySelectorAll('.underline');
const mainText = $.getElementById('main-text');
const mainDescript = $.getElementById('main-descript');
const textBoxes = $.querySelectorAll('.text-box')

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

const setBoxesAnimation = () => {
    textBoxes.forEach(box => {
        box.classList.add('swipe-in-out-right')
    })
}

const showMainTexts = () => {
    setTimeout(() => {
        mainText.style.opacity = 1;
        mainDescript.style.opacity = 1;
    }, 1500);
}

window.addEventListener('load', () => {
    setBoxesAnimation();
    showMainTexts();
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