import { List } from '../Memory game-base.js'

var newdiv;
var newdiv2;
var newdiv3;
var num = List[11]
var bgColor1 = List[13]
var bgColor3 = List[14]
var para = document.getElementById('para');
var para2 = document.getElementById('para2')
var para3 = document.getElementById('para3')


class Drawboxes {
    box1(content, divcolor1, left, top, width, padTop, padBot) {
        //the transparent uppermost layer of boxes that is responsible for animations on completion of game among others
        var cont = document.createTextNode(content);
        newdiv = document.createElement('div');
        newdiv.style.marginTop = `${((window.innerHeight/10))+top+2}px`;
        newdiv.style.marginLeft = `${((window.innerWidth)/20)+left+2}px`;
        newdiv.style.backgroundColor = divcolor1;
        newdiv.style.display = 'block';
        newdiv.style.textAlign = 'center';
        newdiv.style.paddingTop = padTop;
        newdiv.style.paddingBottom = padBot;
        newdiv.style.position = 'absolute';
        newdiv.style.color = bgColor1;
        newdiv.style.zIndex = '9';
        newdiv.style.width = `${width - 1}px`;
        //newdiv.style.height = `${height - 1}px`;
        //newdiv.style.opacity = 1;
        newdiv.style.opacity = 0;
        newdiv.appendChild(cont);
        //newdiv.style.fontSize = `${(width -1)/5}px`

        para.appendChild(newdiv)
        const node = para.getElementsByTagName('div'); //HTMLCollection
        //or node = para.querySelectorAll('div');//NodeList
        if ((para.childElementCount)) {
            for (let i = 0; i <= (para.childElementCount - (Math.pow(num, 2) + 1)); i++) {
                node[i].style.display = 'none';
            }
        }

        return newdiv
    }


    box2(divcolor2, left, top, width, height) { //the middle layer of boxes that keeps the boxes hidden until when clicked.
        newdiv2 = document.createElement('div');
        newdiv2.style.marginTop = `${((window.innerHeight/10))+top+2}px`;
        newdiv2.style.marginLeft = `${((window.innerWidth)/20)+left+2}px`;
        newdiv2.style.backgroundColor = divcolor2;
        newdiv2.style.width = `${width-1}px`;
        newdiv2.style.height = `${height-1}px`;
        newdiv2.style.display = 'flex';
        newdiv2.style.position = 'absolute';
        newdiv2.style.zIndex = '6';
        para2.appendChild(newdiv2)

        const node2 = para2.getElementsByTagName('div');

        if ((para2.childElementCount)) {
            for (let i = 0; i <= (para2.childElementCount - (Math.pow(num, 2) + 1)); i++) {
                node2[i].style.display = 'none';
            }
        }

        return newdiv2
    }


    box3(content, divcolor3, left, top, width, height) { //the last layer of boxes that responds to user input to change the particular boxcolor, is involved in most of the game display logic and displays the puzzle content
        var cont = document.createTextNode(content);
        newdiv3 = document.createElement('div');
        newdiv3.style.marginTop = `${((window.innerHeight/10))+top+2}px`;
        newdiv3.style.marginLeft = `${((window.innerWidth)/20)+left+2}px`;
        newdiv3.style.backgroundColor = divcolor3;
        newdiv3.style.color = bgColor3
        newdiv3.style.display = 'flex';
        newdiv3.style.justifyContent = 'center';
        newdiv3.style.alignItems = 'center';
        newdiv3.style.position = 'absolute';
        newdiv3.style.zIndex = '3';
        newdiv3.style.width = `${width - 1}px`;
        newdiv3.style.height = `${height - 1}px`;
        newdiv3.appendChild(cont);
        para3.appendChild(newdiv3)

        const node3 = para3.getElementsByTagName('div');

        if ((para3.childElementCount)) {
            for (let i = 0; i <= (para3.childElementCount - (Math.pow(num, 2) + 1)); i++) {
                node3[i].style.display = 'none';
            }
        }
        return newdiv3
    }
}

export { Drawboxes }