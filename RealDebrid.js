// ==UserScript==
// @name           Real-Debrid
// @author         Me
// @include        *
//       https://api.real-debrid.com/rest/1.0/hosts/regex
// ==/UserScript==
'use strict';

var regex = RegExp('\\b(' + [
'dropapk\\.to/',
'https...(rapidgator\\.net|rg\\.to)/file',
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
'zippyshare\\.com/',
'http...audiobookbay\\.nl/download',
'magnet:\?xt=urn:[a-z0-9]{20,50}'
].join('|') + ')', 'i');

var prepend = "shortcuts\://run-shortcut?name=RealDebridDynamic&input=" ;

var links,thisLink;
links = document.evaluate("//a[@href]",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);

for (var i=0;i<links.snapshotLength;i++) {
    var thisLink = links.snapshotItem(i);

  thisLink.href = thisLink.href.replace(regex,
                                      prepend + '$1');

}
