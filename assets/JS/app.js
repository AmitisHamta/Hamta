"use strict"

const $ = document;
const header = $.getElementById('header');
const navBtns = $.querySelectorAll('.nav-btn');
const underlines = $.querySelectorAll('.underline');
const mainText = $.getElementById('main-text');
const mainDescript = $.getElementById('main-descript');
const textBoxes = $.querySelectorAll('.text-box');
const productsBtn = $.getElementById('products-btn');
const productsDropdown = $.querySelector('.products-dropdown');
const productsLists = $.querySelectorAll('.products-list li');
const productsHr = $.querySelectorAll('.products-list hr');
const dropdownBox = $.querySelector('.dropdown-box');
const productsList = $.querySelector('.list-container');
const certifications = $.querySelectorAll('.certification img');

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

const setUnderlines = () => {
    const aboutTarget = $.querySelector(`#about-content .section-title .underline`);
    if ($.documentElement.scrollTop >= 200) {
        aboutTarget.classList.remove('exit-underline')
        aboutTarget.classList.add('show-underline');
    }else {
        aboutTarget.classList.remove('show-underline');
        aboutTarget.classList.add('exit-underline')
    }

    const aboutTopLines = $.querySelectorAll(`#about-content .about-info .topline`);
    const aboutUnderLines = $.querySelectorAll(`#about-content .about-info .underline`);
    const aboutLeftLines = $.querySelectorAll(`#about-content .about-info .leftline`);
    const aboutRightLines = $.querySelectorAll(`#about-content .about-info .rightline`);

    if ($.documentElement.scrollTop >= 300) {
        aboutTopLines.forEach(line => {
            line.classList.remove('hide-topline');
            line.classList.add('show-topline');
            line.style.animationDuration = '1s';
            line.classList.add('width-100')
        })
        aboutUnderLines.forEach(line => {
            line.classList.remove('hide-underline');
            line.classList.add('show-underline');
            line.style.animationDuration = '1s';
            line.classList.add('width-100')
        })
        aboutRightLines.forEach(line => {
            line.classList.remove('hide-rightline');
            line.classList.add('show-rightline');
            line.style.animationDuration = '1s';
            line.classList.add('height-100')
        })
        aboutLeftLines.forEach(line => {
            line.classList.remove('hide-leftline');
            line.classList.add('show-leftline');
            line.style.animationDuration = '1s';
            line.classList.add('height-100')
        })
    }else {
        aboutTopLines.forEach(line => {
            line.classList.remove('show-topline');
            line.classList.add('hide-topline');
            line.style.animationDuration = '1s';
            line.classList.remove('width-100')
        })
        aboutUnderLines.forEach(line => {
            line.classList.remove('show-underline');
            line.classList.add('hide-underline');
            line.style.animationDuration = '1s';
            line.classList.remove('width-100')
        })
        aboutRightLines.forEach(line => {
            line.classList.remove('show-rightline');
            line.classList.add('hide-rightline');
            line.style.animationDuration = '1s';
            line.classList.remove('height-100')
        })
        aboutLeftLines.forEach(line => {
            line.classList.remove('show-leftline');
            line.classList.add('hide-leftline');
            line.style.animationDuration = '1s';
            line.classList.remove('height-100')
        })
    }

    const serviceTarget = $.querySelector(`#service-content .section-title .underline`);

    if ($.documentElement.scrollTop >= 1400) {
        serviceTarget.classList.remove('exit-underline')
        serviceTarget.classList.add('show-underline');
        serviceTarget.classList.add('width-100')
    }else {
        serviceTarget.classList.remove('show-underline');
        serviceTarget.classList.add('exit-underline')
        serviceTarget.classList.remove('width-100')
    }

    const serviceRight = $.querySelectorAll(`#service-content .service-info .rightline`);
    const serviceLeft = $.querySelectorAll(`#service-content .service-info .leftline`);

    if ($.documentElement.scrollTop >= 1500) {
        serviceRight[0].classList.remove('exit-rightline');
        serviceRight[0].classList.add('show-rightline');
        serviceRight[0].classList.add('height-100')
    }else {
        serviceRight[0].classList.remove('show-rightline');
        serviceRight[0].classList.add('exit-rightline');
        serviceRight[0].classList.remove('height-100')
    }

    if ($.documentElement.scrollTop >= 1900) {
        serviceRight[1].classList.remove('exit-rightline');
        serviceRight[1].classList.add('show-rightline');
        serviceRight[1].classList.add('height-100')
    }else {
        serviceRight[1].classList.remove('show-rightline');
        serviceRight[1].classList.add('exit-rightline');
        serviceRight[1].classList.add('height-100')
    }

    if ($.documentElement.scrollTop >= 1700) {
        serviceLeft[0].classList.remove('exit-leftline');
        serviceLeft[0].classList.add('show-leftline');
        serviceLeft[0].classList.add('height-100')
    }else {
        serviceLeft[0].classList.remove('show-leftline');
        serviceLeft[0].classList.add('exit-leftline');
        serviceLeft[0].classList.remove('height-100')
    }

    if ($.documentElement.scrollTop >= 2100) {
        serviceLeft[1].classList.remove('exit-leftline');
        serviceLeft[1].classList.add('show-leftline');
        serviceLeft[1].classList.add('height-100')
    }else {
        serviceLeft[1].classList.remove('show-leftline');
        serviceLeft[1].classList.add('exit-leftline');
        serviceLeft[1].classList.remove('height-100')
    }
}

window.addEventListener('load', () => {
    
})

window.addEventListener('DOMContentLoaded', () => {
    resizeHeader();
    setUnderlines();
    setBoxesAnimation();
    showMainTexts();
})

window.addEventListener('scroll', () => {
    resizeHeader();
    setUnderlines();
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

const showProductsMenu = () => {
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

const hideProductsMenu = () => {
    productsDropdown.classList.remove('show-products');
    productsDropdown.classList.add('hide-products');
}

productsBtn.addEventListener('mouseenter', () => {
    showProductsMenu();
})

productsBtn.addEventListener('mouseleave', () => {
    hideProductsMenu();
})

certifications.forEach(certificate => {
    certificate.addEventListener('contextmenu', event => {
        event.preventDefault();
        event.stopPropagation();
        console.log('right clicked');
    })
})