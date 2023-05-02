'use strict';

//Variable Bank

var body = document.getElementById('body')
var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
var para = document.getElementById("para");
var para2 = document.getElementById('para2');
var para3 = document.getElementById('para3');
var pass = document.getElementById('pass')
var root = document.querySelector(':root');
var time = 3000;
var color = 'black';
var times = `${time}ms`
var num = 2;
var count = 0;
const verList = [];
const horList = [];
const contStr = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'
var str = '';
var contSrc = [];
var contList1 = [];
var contList2 = [];
var uniList = [];
const canvWidth = `${1}px`;
var p = (Math.pow(num, 2))
var x = Math.ceil(p / contStr.length);
const boxList = [];
const boxList2 = [];
const boxList3 = [];
const pairOne = [];
const pairTwo = [];
const permOne = [];
const permTwo = [];
const indexOne = [];
const indexTwo = [];
const countList = [];
var localCount = 0;
var controlCount = 0;
var arr = [];
var identity;
var boxcolor = 'white';
var boxcolor2 = 'pink';
var boxcolor3 = 'red';
var completed = 0;
var complete = 0;
var evenorodd;
var style;
var timekeep;
var localtimekeep;
var padTopp;
var padBott;
var specW;
var specH;
var gets;
var mtop;
var mleft;
var strtop;
var strleft;
var finaltop;
var finalleft;
var runcount = 25;
var genRand;
var signal;
var store;
var runs;
var changes;
var oppruns;
var Wstore = 'unset';
var Hstore = 'unset';
var track = 0
var Wlist = []
var Hlist = []
var identList = []
var firstnum;
var calc;

import { box } from './boxes-done.js'

import { line } from './lines.js'

import { drawCanvas } from './canvas-done.js'

import { supporters } from "./supporters.js"

import { interact } from './interactive.js'


//Function 3 -- Third
function render() {

    drawCanvas()

    //console.log(canvas.width, window.innerWidth, canvas.height, window.innerHeight)
    line.drawLines()

    if (num % 2 == 0) {
        evenorodd = Math.ceil((Math.pow(num, 2) / 2))
    } else {
        evenorodd = Math.ceil((Math.pow(num, 2) / 2)) - 1
    }

    var verheight = window.getComputedStyle(para, null);
    var verheightsize = verheight.getPropertyValue('font-size');
    var siz = verheightsize.split('px')
    var hei = (horList[1] - horList[0]) - 1
    calc = (hei - siz[0]) / 2;

    console.log(calc)

    padTopp = `${calc-1}px`;
    padBott = `${calc-1}px`;

    specW = verList[1] - verList[0]
    specH = horList[1] - horList[0]



    box.drawBoxes()
    supporters.translate()
    supporters.update()
    interact.click1();

}
interact.click2();

console.log(complete)

supporters.Styles()






function rand() {

    //console.log(contStr.length)
    for (let i = 1; i <= x; i++) {
        str += contStr
        str += ','
    }

    contSrc = str.split(',');
    contSrc.pop();
    //The Fisher Yates Method
    for (let i = contSrc.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = contSrc[i];
        contSrc[i] = contSrc[j];
        contSrc[j] = k
    }
    contList1 = contSrc;
    return contList1
}
rand()

//Another example of the Fisher Yates Method
/* var i = contSrc.length,
    k, temp;
while (--i > 0) {
    k = Math.floor(Math.random() * (i + 1))
    temp = contSrc[k];
    contSrc[k] = contSrc[i];
    contSrc[i] = temp;
}*/
//console.log(contSrc);


/*
function f() {
    let r = Math.random();
    if (Math.sign(r - 0.5) > 0) {
        console.log('i')
    } else { console.log('j') }
}
    
for (let u = 0; u < 100; u++) {
    f();
}
*/

function modify() {
    if (num % 2 == 0) {
        contList1.splice(0, (contSrc.length) - (Math.floor(0.5 * p)))
    } else {
        contList1.splice(0, (contSrc.length - 1) - (Math.floor(0.5 * p)))

    }

    contList2 = contList1;
    uniList = contList1.concat(contList2);

    //The Fisher Yates Method
    for (let i = uniList.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = uniList[i];
        uniList[i] = uniList[j];
        uniList[j] = k;
    }
}
modify()

window.onload = function() {
    render()


    window.onresize = function() {
        //newdiv.style.display = 'none'
        // newdiv2.style.display = 'none'
        // newdiv3.style.display = 'none'
        //     //console.clear();
        render()
    }

}




/*
async function content() {
    function list() {
        var x = 2;
        if (x) { return x }
    }
    
    
    var t = num * num * 4;
    var id = setTimeout(list, t);
    
    let promise = new Promise(
        function(resolve, reject) {
            setTimeout(function() {
                resolve('Successful');
            }, 1000);
            setTimeout(function() {
                reject('Not successful');
            }, 1000);
        }
    )
    var x = await promise;
    console.log(x)
}
    
    
content().then(
    function() {
        drawCanvas();
    },
    function() {}
)*/

//console.log(document.implementation

export { count, firstnum, identity, identList, indexOne, indexTwo, pairOne, pairTwo, track, signal, runcount, genRand, permOne, permTwo, evenorodd, timekeep, localtimekeep, complete, calc, root, time, times, canvas, ctx, color, horList, verList, num, canvWidth, boxList, boxList2, boxList3, uniList, boxcolor, boxcolor2, boxcolor3, padBott, padTopp, specH, specW }