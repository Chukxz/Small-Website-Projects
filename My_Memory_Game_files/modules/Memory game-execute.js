import { List } from './Memory game-base.js';
import { Animate } from './js-module-1/animate-bg.js'
import { Drawcanvas } from './js-module-1/draw-canvas.js'
import { drawlines } from './js-module-1/draw-lines.js'
import { Drawboxes } from './js-module-1/draw-boxes.js'
import { converts } from "./js-module-1/exp.js";

window.onload = function() {

    var body = document.querySelector("body")
    var root = document.querySelector(':root') //7
    var para = document.getElementById('para')
    var para2 = document.getElementById('para2')
    var para3 = document.getElementById('para3')
    var overalls = `${window.innerWidth}px`
    var overall = document.getElementById('overall')
    var allpara = document.getElementById('allpara')
    root.style.setProperty("--overalls", overalls)
    overall.style.marginTop = `${window.innerHeight - (window.innerHeight/10)}px`
    var pass = document.getElementById('pass')
    var passes = document.getElementById('passes')
    pass.style.left = `${window.innerWidth/10}px`
    passes.style.right = `${window.innerWidth/10}px`
    var passchild = document.getElementById('passchild')

    allpara.style.display = 'none'

    let Anim = new Animate(List[7], List[8], `${List[8]}ms`)
    Anim.set()
    Anim.start()
    Anim.end()


    var arrX = 0;
    var arrY = 0;
    var xclick;
    var yclick;
    var xres;
    var yres;
    var identity = 0
    var evenorodd;
    var calc;
    var padTopp;
    var padBott;
    var specW;
    var specH;
    var timekeep = 0;
    var localtimekeep = 0;
    var canvas = List[1]
    var ctx = List[2]
    var permOne = []
    var permTwo = []
    var indexOne = []
    var indexTwo = []
    var pairOne = []
    var pairTwo = []
    var localrunlength = 1000;
    var genRand;
    var signal = 0;
    var complete = 0;
    var count;
    var clearList = [];
    count = 0
    var runcount = 25;
    var runlength = 1000;
    var calc;
    var padTopp;
    var padBott;
    var specW;
    var specH;
    var randn;
    var id1;
    var id2;
    var first;
    var second;
    var specRand = Math.round(Math.random())
    var verheight;
    var verheightsize;
    var siz;
    var hei;
    var boxList1 = [];
    var boxList2 = [];
    var boxList3 = [];
    var conv1;
    var conv2;

    const contStr = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'
    var str = '';
    var contSrc = [];
    var contList1 = [];
    var contList2 = [];
    var uniList = [];

    if (!localStorage.level) {
        var level = 1
        localStorage.level = converts.convert(level)
    }
    var level = converts.toNum(localStorage.level)

    var num = Math.ceil(1 + Math.cbrt((0.2 * (2 * Math.pow(level, 2)))));
    localStorage.num = converts.convert(num);
    num = converts.toNum(localStorage.num);

    var p = (Math.pow(num, 2)) //20
    var bisectStrNum = Math.ceil(p / contStr.length);

    class RandomContent {

        rand() {

            //console.log(contStr.length)
            for (let i = 1; i <= bisectStrNum; i++) {
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

        modify() {
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
            return uniList
        }
        display() {
            return uniList
        }
    }

    if (!localStorage.cont) {
        var randcont = new RandomContent()
        randcont.rand()
        randcont.modify()
        let contn = randcont.display()
        localStorage.cont = converts.convert(contn)
    }

    Drawcanvas.drawCanvas(List[1], List[10], List[9])

    drawlines.drawLines(num, List[2], List[1], List[9], List[12])

    var verList = drawlines.showVerList()
    var horList = drawlines.showHorlist()

    if (!localStorage.comp) {
        localStorage.comp = converts.convert(complete)
        complete = converts.toNum(localStorage.comp)
    } else {
        complete = converts.toNum(localStorage.comp)
    }

    function stats() {
        passchild.style.color = `${Styles()}`;
        requestAnimationFrame(stats)
    }

    function covinit() {
        // console.log("I'm ")
        if (num % 2 !== 0) {
            var a = converts.toArrayasNum(localStorage.PermOne)
            var b = converts.toArrayasNum(localStorage.PermTwo)
            var c = a.concat(b)

            var v = setInterval(clears, 500)
            var u = 0

            function clears() {
                if (u < 1) { u++ } else {
                    // console.log('so ')
                    for (let x = 0; x < Math.pow(num, 2); x++) {
                        if (c.indexOf(x) == -1) {
                            supporters.change(0, x, specRand)
                        }
                    }
                    clearInterval(v)
                }
            }

            var initid = setInterval(init, 800)
            var t = 0;

        } else {
            var initid = setInterval(init, 500)
            var t = 0;
        }

        function init() {
            if (t < 1) { t++ } else {
                // console.log('happy')
                requestAnimationFrame(supporters.update)
                requestAnimationFrame(supporters.translate)
                clearInterval(initid)
            }
        }
    }


    if (num % 2 == 0) {
        evenorodd = Math.ceil((Math.pow(num, 2) / 2))
    } else {
        evenorodd = Math.ceil((Math.pow(num, 2) / 2)) - 1
    }

    // console.log(evenorodd)

    if (complete === evenorodd) {
        pass.style.fontWeight = 'bold'
        pass.style.fontSize = '1em'
        pass.style.opacity = '1'
        requestAnimationFrame(stats)
        covinit()

        pass.onclick = function() {
            pass.style.backgroundColor = 'green'
            level++
            localStorage.level = converts.convert(level)
            localStorage.removeItem('PermOne')
            localStorage.removeItem('PermTwo')
            localStorage.removeItem('cont')
            localStorage.removeItem('comp')

            function assign() {
                window.location.assign(window.location.href)
            }
            setTimeout(assign, 500)
        }
    }



    verheight = window.getComputedStyle(para, null);
    verheightsize = verheight.getPropertyValue('font-size');
    siz = verheightsize.split('px')
    hei = (horList[1] - horList[0]) - 1
    calc = (hei - siz[0]) / 2;

    // console.log(calc)

    padTopp = `${calc-1}px`;
    padBott = `${calc-1}px`;
    // console.log(padTopp, padBott)


    specW = verList[1] - verList[0]
    specH = horList[1] - horList[0]


    boxList1 = [];
    boxList2 = [];
    boxList3 = [];

    var cont = converts.toArrayasStr(localStorage.cont)

    console.log(cont)

    console.log(`level = ${level}, num = ` + num)

    let drawboxes = new Drawboxes()

    function drawBoxes() { //Draw the boxes
        for (let y = 0; y < num; y++) {
            for (let x = 0; x < num; x++) {
                //console.log([num * y + x])
                boxList1[boxList1.length] = drawboxes.box1(cont[num * y + x], List[15], verList[x], horList[y], verList[x + 1] - verList[x], padTopp, padBott)
                boxList2[boxList2.length] = drawboxes.box2(List[16], verList[x], horList[y], specW, specH)
                boxList3[boxList3.length] = drawboxes.box3(cont[num * y + x], List[17], verList[x], horList[y], verList[x + 1] - verList[x], horList[y + 1] - horList[y])
            }
        }
    }
    drawBoxes()

    function localchange(localsignals, localidentify, localrandnum) {

        var localruns = 0
        var localid = setInterval(localrun, localrunlength)

        function localrun() {

            if (localruns < runcount) {
                localruns++
                if (localsignals == runcount) {
                    if (localrandnum == 0) {
                        boxList2[localidentify].style.width = `${(localruns*((specW-1)/runcount))}px`
                    }
                    if (localrandnum == 1) {
                        boxList2[localidentify].style.height = `${(localruns*((specH-1)/runcount))}px`
                    }
                }
                requestAnimationFrame(localrun)
            } else {
                localruns = 0;
                clearInterval(localid)
            }
        }
        requestAnimationFrame(localrun)
    }

    class Interactive {

        OddClick() { //handles the clicks for the odd counts
            //console.log('odd')
            indexOne[indexOne.length] = identity
            pairOne[pairOne.length] = boxList3[identity].innerHTML;
            boxList3[identity].style.backgroundColor = 'green';
            signal = 0
            supporters.change(signal, identity, genRand)
        }

        evenClickBase() { //handles the clicks for the even counts. Is general.
            // console.log('even')
            indexTwo[indexTwo.length] = identity
            pairTwo[pairTwo.length] = boxList3[identity].innerHTML;
            boxList3[indexOne[0]].style.backgroundColor = 'red'
            boxList3[indexTwo[0]].style.backgroundColor = 'red'
        }

        sameValueDifferentIndex() { //handles the click for the odd - even count pairs that have the same value or innerHTML but different index numbers in the boxList3. Is more specific than the evenClickBase function.
            // They both have the same value but not the same index
            permOne[permOne.length] = indexOne[0];
            permTwo[permTwo.length] = indexTwo[0];
            localStorage.PermOne = converts.convert(permOne);
            localStorage.PermTwo = converts.convert(permTwo);
            permOne = converts.toArrayasNum(localStorage.PermOne);
            permTwo = converts.toArrayasNum(localStorage.PermTwo);
            boxList3[indexOne[0]].style.backgroundColor = 'yellow';
            boxList3[indexTwo[0]].style.backgroundColor = 'yellow';
            complete++
            localStorage.comp = converts.convert(complete)
            complete = converts.toNum(localStorage.comp)
        }


        sameValueSameIndex() { //handles the click for the odd - even count pairs that have the same value or innerHTML and the same index number in the boxList3. Is more specific than the evenClickBase function.
            //Same block selected two times
            boxList3[indexTwo[0]].style.backgroundColor = 'red'
        }

        clearPreviousTemporaryCache() {
            //clears the values of the temporary lists after each click events
            if (indexOne[0] != indexTwo[0]) {
                if (permOne.indexOf(indexOne[0]) == -1 && permTwo.indexOf(indexTwo[0]) == -1) {
                    clearList = [genRand, indexOne[0], indexTwo[0]]
                    randn = clearList[0]
                    id1 = clearList[1]
                    id2 = clearList[2]

                    function clears() {
                        localchange(runcount, id1, randn)
                        localchange(runcount, id2, randn)
                    }

                    setTimeout(clears, 750)

                }
            }
            // console.log(clearList)
            pairOne.splice(0, pairOne.length)
            pairTwo.splice(0, pairTwo.length)
            indexOne.splice(0, indexOne.length)
            indexTwo.splice(0, indexTwo.length)
            clearList.splice(0, clearList.length)
        }
    }

    let interact = new Interactive

    function click1(e) {
        xclick = e || event.clientX;
        yclick = e || event.clientX;
        xclick.preventDefault()
        yclick.preventDefault()
            //console.log(xclick, yclick)
        const rect = canvas.getBoundingClientRect()
        arrX = Math.abs(Math.round(xclick - rect.left.toFixed()))
        arrY = Math.abs(Math.round(yclick - rect.top.toFixed()))
            // console.log(arrX, arrY, xclick, yclick)

        // console.log(arrX, arrY)

        for (let i = 0; i <= num; i++) {
            if (arrX < verList[i]) {
                xres = i - 1
                break;
            }
        }
        for (let i = 0; i <= num; i++) {
            if (arrY < horList[i]) {
                yres = i - 1
                break;
            }
        }
        // console.log(identity)
        return identity = (1 + (num * yres) + xres) - 1;
    }

    function Styles() {
        var style = window.getComputedStyle(body, null);
        var color = style.getPropertyValue("background-color");
        return color
    }

    // Disabled, enable to implement changing colors for the boxes
    // function bStyles() {
    //     var bstyle = window.getComputedStyle(body, null);
    //     var bcolor = bstyle.getPropertyValue("background-color");
    //     var ran = Math.floor(Math.random() * 3)
    //     var boxList1bgColor = [];
    //     boxList1bgColor.splice(0, boxList1bgColor.length)
    //     boxList1bgColor[boxList1bgColor.length] = bcolor.replace('rgb', '').replace('(', '').replace(')', '').split(',')
    //     if (ran === 0) {
    //         boxList1bgColor
    //     }
    //     if (ran === 1) {
    //         boxList1bgColor[0].sort((a, b) => a - b)
    //     }
    //     if (ran === 2) {
    //         boxList1bgColor[0].sort((a, b) => b - a)
    //     }
    //     boxList1bgColor[0].splice(0, 0, 'start')
    //     boxList1bgColor[0].splice(4, 4, 'end')
    //     var str = boxList1bgColor[0].toString().replace('start,', 'rgb(').replace(',end', ')')
    //     return str
    // }


    class Supporters {
        update() {
            //console.log(Styles())
            for (let a = 0; a < Math.pow(num, 2); a++) {
                boxList1[a].style.opacity = '1';
                boxList1[a].style.color = `${Styles()}`;
                boxList1[a].style.fontWeight = 'bold';
            }
            requestAnimationFrame(supporters.update)
        }


        translate() {
            var step;
            var newc = calc - 1
            var cycle1;
            var percup;
            var percdown;
            if (timekeep % 300 == 0) {
                localtimekeep = 0
            }
            if (localtimekeep > 0 && localtimekeep <= 50) {}
            var angle;
            var ang;
            var sin;
            var approx;
            if (localtimekeep > 50 && localtimekeep <= 186) {
                step = 360 / 136
                angle = ((localtimekeep - 50) * step)
                ang = Math.floor(angle * Math.PI / 1.8) / 100
                sin = Math.sin(ang)
                approx = Math.floor(sin * 100) / 100
                for (let c = 0; c < Math.pow(num, 2); c++) {
                    cycle1 = (newc / 100) * 80
                    percup = Math.floor(newc - (Math.floor((cycle1 * approx) * 100) / 100))
                    percdown = Math.floor(newc + (Math.floor((cycle1 * approx) * 100) / 100))
                    boxList1[c].style.paddingTop = `${percup}px`
                    boxList1[c].style.paddingBottom = `${percdown}px`
                }
            }
            if (localtimekeep > 186 && localtimekeep <= 232) {
                step = 360 / 46
                angle = ((localtimekeep - 186) * step)
                ang = Math.floor(angle * Math.PI / 1.8) / 100
                sin = Math.sin(ang)
                approx = Math.floor(sin * 100) / 100
                for (let c = 0; c < Math.pow(num, 2); c++) {
                    cycle1 = (newc / 100) * 40
                    percup = Math.floor(newc - (Math.floor((cycle1 * approx) * 100) / 100))
                    percdown = Math.floor(newc + (Math.floor((cycle1 * approx) * 100) / 100))
                    boxList1[c].style.paddingTop = `${percup}px`
                    boxList1[c].style.paddingBottom = `${percdown}px`

                }
            }
            if (localtimekeep > 232 && localtimekeep <= 248) {
                step = 360 / 16
                angle = ((localtimekeep - 232) * step)
                ang = Math.floor(angle * Math.PI / 1.8) / 100
                sin = Math.sin(ang)
                approx = Math.floor(sin * 100) / 100
                for (let c = 0; c < Math.pow(num, 2); c++) {
                    cycle1 = (newc / 100) * 15
                    percup = Math.floor(newc - (Math.floor((cycle1 * approx) * 100) / 100))
                    percdown = Math.floor(newc + (Math.floor((cycle1 * approx) * 100) / 100))
                    boxList1[c].style.paddingTop = `${percup}px`
                    boxList1[c].style.paddingBottom = `${percdown}px`

                }
            }
            if (localtimekeep > 248 && localtimekeep <= 299) {}
            localtimekeep++
            timekeep++;
            requestAnimationFrame(supporters.translate)
        }


        change(signals, identify, randnum) {
            //hide and expose the content in box3
            var runs = 0
            var oppruns = runcount
            var id = setInterval(run, runlength)

            function run() {

                if (runs < runcount) {
                    runs++
                    oppruns--
                    if (signals == runcount) {
                        if (randnum == 0) {
                            boxList2[identify].style.width = `${(runs*((specW-1)/runcount))}px`
                        }
                        if (randnum == 1) {
                            boxList2[identify].style.height = `${(runs*((specH-1)/runcount))}px`
                        }
                    }
                    if (signals != runcount) {
                        if (randnum == 0) {
                            boxList2[identify].style.width = `${(oppruns*((specW-1)/runcount))}px`
                        }
                        if (randnum == 1) {
                            boxList2[identify].style.height = `${(oppruns*((specH-1)/runcount))}px`
                        }
                    }

                    requestAnimationFrame(run)
                } else {
                    runs = 0;
                    clearInterval(id)
                }
            }
            requestAnimationFrame(run)
        }
    }

    let supporters = new Supporters()

    if (localStorage.PermOne && localStorage.PermTwo) {
        first = converts.toArrayasNum(localStorage.PermOne)
        second = converts.toArrayasNum(localStorage.PermTwo)
        for (let x of first) {
            boxList3[x].style.backgroundColor = 'yellow'
            supporters.change(0, x, specRand)
        }
        for (let x of second) {
            boxList3[x].style.backgroundColor = 'yellow'
            supporters.change(0, x, specRand)
        }
    }

    function click2() { //handles all click events in conjunction with functions show and click2 but is local to the render function
        // console.log(boxList2[identity])
        // console.log(boxList2)
        //gets = window.getComputedStyle(boxList2[identity], null)
        //mtop = gets.getPropertyValue('margin-top')
        //mleft = gets.getPropertyValue('margin-left')
        //strtop = mtop.replace('px', '')
        //strleft = mleft.replace('px', '')
        //finaltop = (Number(strtop) + Number(boxList2[identity].style.height.replace('px', ''))) / runcount
        //finalleft = (Number(strleft) + Number(boxList2[identity].style.width.replace('px', ''))) / runcount
        // console.log(specH, specW)

        if (localStorage.PermOne && localStorage.PermTwo) {
            conv1 = converts.toArrayasNum(localStorage.PermOne)
            conv2 = converts.toArrayasNum(localStorage.PermTwo)
        } else {
            conv1 = permOne
            conv2 = permTwo
        }

        if (conv1.indexOf(identity) == -1 && conv2.indexOf(identity) == -1) {
            count++
            count
            // console.log('Not in permOne and permTwo lists')
            if (count % 2 !== 0) {
                pairOne[pairOne.length] = boxList3[identity].innerHTML;
                boxList3[identity].style.backgroundColor = 'green';
                genRand = Math.floor(Math.random() * 2)
                interact.OddClick()
            } else {
                interact.evenClickBase()
                if (!(indexOne[0] === indexTwo[0])) {
                    signal = 0
                    supporters.change(signal, identity, genRand)
                }
                if (pairOne[0] === pairTwo[0] && indexOne[0] !== indexTwo[0]) {
                    interact.sameValueDifferentIndex()
                    if (complete === evenorodd) {
                        pass.style.fontWeight = 'bold'
                        pass.style.opacity = '1';
                        pass.style.fontSize = '1em'
                        requestAnimationFrame(stats)
                        covinit()

                        pass.onclick = function() {
                            pass.style.backgroundColor = 'green'
                            level++
                            localStorage.level = converts.convert(level)
                            localStorage.removeItem('PermOne')
                            localStorage.removeItem('PermTwo')
                            localStorage.removeItem('cont')
                            localStorage.removeItem('comp')

                            function assign() {
                                window.location.assign(window.location.href)
                            }
                            setTimeout(assign, 500)
                        }
                    }
                } else if (indexOne[0] === indexTwo[0]) {
                    interact.sameValueSameIndex()
                    signal = runcount
                    supporters.change(signal, identity, genRand)
                } else {
                    // console.log('else occured refer to line \'604\' in \'Memory game_execute.js\'')
                }
                interact.clearPreviousTemporaryCache()
                if (genRand == 0) {
                    genRand++
                }
                if (genRand = 1) {
                    genRand--
                }
            }
        }
    }
    // console.log(localStorage)

    function allclick() {
        click1()
        click2()
    }

    canvas.onclick = function() { allclick() }

    passes.onclick = function() {
        passes.style.backgrounColor = 'green'
        localStorage.clear()
        window.location.assign(window.location.href)
    }

    window.onresize = function() {
        para3.innerHTML = ''
        para2.innerHTML = ''
        para.innerHTML = ''
        ctx.clearRect(0, 0, window.innerWidth - (window.innerWidth / 10), window.innerHeight - (window.innerHeight / 3))

        Drawcanvas.drawCanvas(List[1], List[10], List[9])

        drawlines.drawLines(num, List[2], List[1], List[9], List[12])

        var verList = drawlines.showVerList()
        var horList = drawlines.showHorlist()

        verheight = window.getComputedStyle(para, null);
        verheightsize = verheight.getPropertyValue('font-size');
        siz = verheightsize.split('px')
        hei = (horList[1] - horList[0]) - 1
        calc = (hei - siz[0]) / 2;
        padTopp = `${calc-1}px`;
        padBott = `${calc-1}px`;

        specW = verList[1] - verList[0]
        specH = horList[1] - horList[0]

        padTopp = `${calc-1}px`;
        padBott = `${calc-1}px`;

        specW = verList[1] - verList[0]
        specH = horList[1] - horList[0]


        boxList1 = [];
        boxList2 = [];
        boxList3 = [];

        let drawboxes = new Drawboxes()

        function drawBoxes() { //Draw the boxes
            for (let y = 0; y < num; y++) {
                for (let x = 0; x < num; x++) {
                    //console.log([num * y + x])
                    boxList1[boxList1.length] = drawboxes.box1(cont[num * y + x], List[15], verList[x], horList[y], verList[x + 1] - verList[x], padTopp, padBott)
                    boxList2[boxList2.length] = drawboxes.box2(List[16], verList[x], horList[y], specW, specH)
                    boxList3[boxList3.length] = drawboxes.box3(cont[num * y + x], List[17], verList[x], horList[y], verList[x + 1] - verList[x], horList[y + 1] - horList[y])
                }
            }
        }
        drawBoxes()

        if (localStorage.PermOne && localStorage.PermTwo) {
            first = converts.toArrayasNum(localStorage.PermOne)
            second = converts.toArrayasNum(localStorage.PermTwo)
            for (let x of first) {
                boxList3[x].style.backgroundColor = 'yellow'
                supporters.change(0, x, specRand)
            }
            for (let x of second) {
                boxList3[x].style.backgroundColor = 'yellow'
                supporters.change(0, x, specRand)
            }
        }

        if (count % 2 != 0) {
            boxList3[identity].style.backgroundColor = 'green'
            supporters.change(0, identity, genRand)
                // console.log(genRand, boxList2[identity])
        }

        canvas.onclick = function() { allclick() }

        if (complete === evenorodd) {
            pass.style.fontWeight = 'bold'
            pass.style.opacity = 1
            pass.style.fontSize = '1em'

            pass.onclick = function() {
                pass.style.backgroundColor = 'green'
                level++
                localStorage.level = converts.convert(level)
                localStorage.removeItem('PermOne')
                localStorage.removeItem('PermTwo')
                localStorage.removeItem('cont')
                localStorage.removeItem('comp')

                function assign() {
                    window.location.assign(window.location.href)
                }
                setTimeout(assign, 500)
            }
        }

        passes.onclick = function() {
            passes.style.backgrounColor = 'green'
            localStorage.clear()
            window.location.assign(window.location.href)
        }

        root.style.setProperty("--overalls", overalls)
        overall.style.marginTop = `${window.innerHeight - (window.innerHeight/10)}px`
        overall.style.width = `${window.innerWidth}px`

        pass.style.left = `${window.innerWidth/10}px`
        passes.style.right = `${window.innerWidth/10}px`


        // console.log(localStorage)
    }
}

// const add = (function() {
//         let counter = 0;
//         return function() {
//             counter++;
//             return counter;
//         }
//     })
//     ();