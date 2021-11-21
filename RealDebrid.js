// ==UserScript==
// @name           Real-Debrid
// @author         Me
// @include        http://*
// @connect-src    real-debrid.com
// @namespace      https://api.real-debrid.com/rest/1.0/hosts/regex
// ==/UserScript==
'use strict';

var re = RegExp('\\b(' + [
'dropapk\\.to/',
'(rapidgator\\.net|rg\\.to)/file',
'mega\\.co\\.nz/#!',
'userscloud\\.com/[a-z0-9]+',
'nitroflare\\.com/view',
'oboom\\.com/.+\\.',
'sendspace\\.com/file',
'share-online\\.biz/dl/',
'turbobit\\.net/.+html',
'tusfiles\\.net/[a-z0-9]+$',
'ul\\.to/',
'uploaded\\.(to|net)/file',
'uploadrocket.net/[a-z0-9]+',
'uptobox\\.com/[a-z0-9]+',
'zippyshare\\.com/'
].join('|') + ')', 'i');

var input=document.createElement("input");
input.type="button";
input.value="GreaseMonkey Button";
input.onclick = showAlert;
document.body.appendChild(input); 
 
function showAlert()
{
    alert("Hello World");

var els = document.getElementsByTagName("*");
for(var i = 0, l = els.length; i < l; i++) {
  var el = els[i];
  el.innerHTML = el.innerHTML.replace(/rapid/gi, 'cranie');
}

