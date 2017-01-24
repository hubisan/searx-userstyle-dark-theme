// ==UserScript==
// @name        searx dark theme
// @namespace   hubisan
// @description dark theme for searx (for theme oscar > Logicodev)
// @version     1.0
// @grant       GM_addStyle
// @match       *://searx.me/*
// @match       *://searx.de/*
// @match       *://searx.ch/*
// @match       *://searx.info/*
// ==/UserScript==
GM_addStyle("\
body{\
overflow-y:scroll!important;\
color:#ccc!important;\
background:blacknone!important;\
line-height:150%!important;\
}\
");
