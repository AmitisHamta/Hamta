"use strict"
const $ = document;

const template = $.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="assets/components/loader/loader.css">`

class Loader extends HTMLElement {
    constructor () {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export {Loader};