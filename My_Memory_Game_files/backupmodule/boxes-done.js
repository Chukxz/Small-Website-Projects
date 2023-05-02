import { num, boxList, boxList2, boxList3, uniList, boxcolor, boxcolor2, boxcolor3, verList, horList, padTopp, padBott, specH, specW } from './Memory game.js'

var bgColor;
var newdiv;
var newdiv2;
var newdiv3;

class BoxDraw {
    box1(content, divcolor, left, top, width, padTop, padBot) {
        //the transparent uppermost layer of boxes that is responsible for adjusting opacity and animations on completion of game among others
        var cont = document.createTextNode(content);
        newdiv = document.createElement('div');
        newdiv.style.marginTop = `${((window.innerHeight/10))+top+2}px`;
        newdiv.style.marginLeft = `${((window.innerWidth)/20)+left+2}px`;
        newdiv.style.backgroundColor = divcolor;
        newdiv.style.display = 'block';
        newdiv.style.textAlign = 'center';
        newdiv.style.paddingTop = padTop;
        newdiv.style.paddingBottom = padBot;
        newdiv.style.position = 'absolute';
        newdiv.color = bgColor;
        newdiv.style.zIndex = '9';
        newdiv.style.width = `${width - 1}px`;
        //newdiv.style.height = `${height - 1}px`;
        newdiv.style.opacity = 1;
        newdiv.appendChild(cont);
        newdiv.style.opacity = 0;
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


    box3(content, divcolor3, left, top, width, height) { //the last layer ob boxes that responds to user input to change the particular boxcolor, is involved in most of the game display logic and displays the puzzle content
        var cont = document.createTextNode(content);
        newdiv3 = document.createElement('div');
        newdiv3.style.marginTop = `${((window.innerHeight/10))+top+2}px`;
        newdiv3.style.marginLeft = `${((window.innerWidth)/20)+left+2}px`;
        newdiv3.style.backgroundColor = divcolor3;
        newdiv3.style.color = 'blue';
        newdiv3.style.display = 'flex';
        newdiv3.style.justifyContent = 'center';
        newdiv3.style.alignItems = 'center';
        newdiv3.style.position = 'absolute';
        newdiv3.style.zIndex = '5';
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

    drawBoxes() { //Draw the boxes
        for (let y = 0; y < num; y++) {
            for (let x = 0; x < num; x++) {
                //console.log([num * y + x])
                boxList[boxList.length] = this.box1(uniList[num * y + x], boxcolor, verList[x], horList[y], verList[x + 1] - verList[x], padTopp, padBott)
                boxList2[boxList.length] = this.box2(boxcolor2, verList[x], horList[y], specW, specH)
                boxList3[boxList.length] = this.box3(uniList[num * y + x], boxcolor3, verList[x], horList[y], verList[x + 1] - verList[x], horList[y + 1] - horList[y])
            }
        }
    }
}

let box = new BoxDraw

export { box, boxList2 }