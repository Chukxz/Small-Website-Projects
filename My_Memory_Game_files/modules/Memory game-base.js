'use strict'
import { converts } from './js-module-1/exp.js'

var body = document.getElementById('body') //0
var canvas = document.getElementById('canvas1'); //1
var ctx = canvas.getContext('2d'); //2
var para = document.getElementById("para"); //3
var para2 = document.getElementById('para2'); //4
var para3 = document.getElementById('para3'); //5
var pass = document.getElementById('pass'); //6
var root = document.querySelector(':root'); //7
var time = 3000; //8
var color = 'maroon'; //9
const canvWidth = `${1}px`; // 

var lineWidth = 2; //12
var bgColor1 = 'gold'; //13 
var bgColor3 = 'gray' //14

var boxcolor1 = 'white'; //15
var boxcolor2 = 'pink'; //16
var boxcolor3 = 'red'; //17

var arr = []; //18
var identity; //19
var hold = 'hold'



//content, divcolor, divcolor2, divcolor3, top, left, width, height, padTopp, padBott, padTop, padBot


var List = [body, canvas, ctx, para, para2, para3, pass, //0 - 6
        root, time, color, canvWidth, //7 - 10
        hold, lineWidth, bgColor1, bgColor3, //11 - 14
        boxcolor1, boxcolor2, boxcolor3, //15 - 17
        arr, identity //18 - 21

    ]
    // console.log(List)

// export { List }

class BaseList {
    constructor(time) {
        this.times = time
    }
    showtime() {
        return `It is ${time}s, `
    }
}


// import { base } from './js-module-1/subbase.js'
// base.showtimer();

export { BaseList, List }