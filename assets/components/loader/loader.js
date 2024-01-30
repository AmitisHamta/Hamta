"use strict"

const $ = document;

const template = $.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="assets/components/loader/loader.css">
<div class="loader-container">
    <div class="loader">
    <img src="assets/Images/Pre-comp 1_5.gif" alt="">
    </div>
</div>
`

class Loader extends HTMLElement {
    constructor () {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback () {
        let loaderContainer = this.shadowRoot.querySelector('.loader-container');

        window.addEventListener('load', () => {
            loaderContainer.classList.add('hidden');

            loaderContainer.addEventListener('animationend', () => {
                loaderContainer.classList.add('remove')
            })
        })
    }
}

export {Loader};