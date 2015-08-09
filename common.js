// Copyright 2015 Liuzheng@gmail.

console.log('dafasfdasdfsafas');
var elems = document.getElementsByClassName('g');

for (var i = 0; i != elems.length; ++i) {
    //elems[i].style.display = "none";
    var cite = elems[i].getElementsByClassName('_Rm')[0].innerText;
    //cite = cite.replace('<b>','');
    //cite = cite.replace('</b>','');
    var url = cite.match(/^(http[s]?:\/\/)?([^/ ]+)\W\w*/)[2];
    //if(url.match('com')){
    //  elems[i].style.display = "none";
    //}
    createLink(elems[i], url);
    BlockLink(elems[i],url);

}
function createLink(element, link) {
    var blockLink = document.createElement('a');
    blockLink.innerText = "Block:" + link;
    blockLink.href = 'javascript:;';  // Do nothing, no refresh.
    blockLink.addEventListener(
        'click', function () {
            BlockClick(element, link)
        }, false);
    element.appendChild(blockLink)

}
function BlockLink(element , link){
chrome.extension.sendMessage({block: link}, function (response) {
        if (response.status) {
            element.style.display = "none";
        }
    });

}
function BlockClick(element, link) {
    console.log(link);
    chrome.extension.sendMessage({link: link}, function (response) {
        if (response.status) {
            element.style.display = "none";
        }
    });

}