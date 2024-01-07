"use strict"

import {Header} from "../components/header/header.js";
import { Footer } from "../components/footer/footer.js";

window.customElements.define('site-header', Header);
window.customElements.define('site-footer', Footer);

const $ = document;
const certifications = $.querySelectorAll('.certification');


certifications.forEach(certificate => {
    certificate.addEventListener('contextmenu', event => {
        event.preventDefault();
    })
})