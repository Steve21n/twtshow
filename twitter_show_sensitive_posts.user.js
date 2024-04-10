// ==UserScript==
// u/nameTwitter NSFW auto show
// u/namespace Violentmonkey Scripts
// u/matchhttps://twitter.com/*
// u/grantnone
// u/version1.0
// u/author-
// u/description 4/5/2024, 5:19:45 PM
// ==/UserScript==
(()=>{
'use strict';
setInterval(()=>{
Array.from(document.querySelectorAll('div[role="button"]')).filter(el => el.textContent.includes('Show')).forEach(el=>el.click());
},100)
})()