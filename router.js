var menuLists = document.querySelectorAll('#menuList > div.col'),
    contBoxes = document.querySelectorAll('div.cont-box');
for (var i = 0; i < menuLists.length; i++) {
    var menuLink = menuLists[i] ? menuLists[i].querySelector('h4 > a') : null,
        contTarget = contBoxes[i] ? contBoxes[i].querySelector('.section-title') : null;
    if (menuLink && contTarget) {        
        if (getHrefStr(menuLink) === contTarget.id) {
            var subMenuLinks = menuLists[i].querySelectorAll('ol a'),
                subContBoxes = contBoxes[i].querySelectorAll('div.inner');
            for (var j = 0; j < subMenuLinks.length; j++) {
                var subContTarget = subContBoxes[j] ? subContBoxes[j].querySelector('h4') : null;
                if (subContTarget) {
                    var type = menuLink.parentNode.parentNode.className.replace('col ', '');
                    subMenuLinks[j].href = '#' + type + '_' + j;  // 二级目录 href
                    subContTarget.setAttribute('data-idx', (j + 1));  // 二级内容标题序号
                    subContTarget.id = getHrefStr(subMenuLinks[j]);  // 二级内容标题 id
                }
            }    
        }
    }
}

function getHrefStr(elm) {
    return elm.getAttribute('href').replace('#', '');
}

function getInnerText(elm) {
    return elm.innerText ? elm.innerText : elm.textContent;
}