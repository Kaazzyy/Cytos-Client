// ==UserScript==
// @name         KazzyNiggaXXXtentacion
// @version      6.9
// @description  We into cytos babys
// @author       Kazzy
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cytos.io
// @match        *://cytos.io/*
// @run-at       document-end
// ==/UserScript==

(async a=>{"use strict";async function b(){for(let b of["vendor.js","main.js"])await fetch(`${a}/js/${b}?v=${Math.random()}`).then(a=>a.text()).then(b=>{let a=document.createElement("script");a.type="text/javascript",a.textContent=b,document.head.appendChild(a)})}document.open(),await fetch(`${a}/index.html`).then(a=>a.text()).then(a=>document.write(a)),document.close(),b()})("https://raw.githubusercontent.com/Kaazzyy/Cytos-Client/main")