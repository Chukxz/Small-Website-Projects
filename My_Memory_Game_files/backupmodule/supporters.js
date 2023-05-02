import { calc, timekeep, localtimekeep, complete, evenorodd, boxList } from './Memory game.js'

class Supporters {


    timekeep = 0;
    localtimekeep = 0;

    constructor(timing) {
        this.timing = timing;
    }
    update() {
        //console.log(Styles())

        if (complete == evenorodd) {
            for (let a = 0; a < Math.pow(num, 2); a++) {
                boxList[a].style.opacity = 1;
                boxList[a].style.color = `${this.Styles()}`;
                boxList[a].style.fontWeight = 'bold';
                //boxList[a].style.backgroundColor = `${bStyles()}`;
            }
        }

        setInterval(this.update, this.timing)
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
                boxList[c].style.paddingTop = `${percup}px`
                boxList[c].style.paddingBottom = `${percdown}px`

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
                boxList[c].style.paddingTop = `${percup}px`
                boxList[c].style.paddingBottom = `${percdown}px`

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
                boxList[c].style.paddingTop = `${percup}px`
                boxList[c].style.paddingBottom = `${percdown}px`

            }
        }
        if (localtimekeep > 248 && localtimekeep <= 299) {}
        if (complete == evenorodd) {
            localtimekeep++
            timekeep++;
        }

        setInterval(this.translate, this.timing)
    }


    change(signals, identify) {
        //hide and expose the content in box3
        var runs = 0
        var oppruns = runcount
        var id = setInterval(run, 1000)

        function run() {

            if (runs < runcount) {
                runs++
                oppruns--
                if (signals == runcount) {
                    if (genRand == 0) {
                        boxList2[identify].style.width = `${(runs*((specW-1)/runcount))}px`
                    }
                    if (genRand == 1) {
                        boxList2[identify].style.height = `${(runs*((specH-1)/runcount))}px`
                    }
                }
                if (signals != runcount) {
                    if (genRand == 0) {
                        boxList2[identify].style.width = `${(oppruns*((specW-1)/runcount))}px`
                    }
                    if (genRand == 1) {
                        boxList2[identify].style.height = `${(oppruns*((specH-1)/runcount))}px`
                    }
                }

                Wstore = boxList2[identify].style.width
                Hstore = boxList2[identify].style.height
                requestAnimationFrame(run)
            } else {
                runs = 0;
                clearInterval(id)
            }
        }
        requestAnimationFrame(run)
    }



    Styles() {
        var style = window.getComputedStyle(body, null);
        var color = style.getPropertyValue("background-color");
        return color
    }

    bStyles() {
        var bstyle = window.getComputedStyle(body, null);
        var bcolor = bstyle.getPropertyValue("background-color");
        var ran = Math.floor(Math.random() * 3)
        var boxList1bgColor = [];
        boxList1bgColor.splice(0, boxList1bgColor.length)
        boxList1bgColor[boxList1bgColor.length] = bcolor.replace('rgb', '').replace('(', '').replace(')', '').split(',')
        if (ran === 0) {
            boxList1bgColor
        }
        if (ran === 1) {
            boxList1bgColor[0].sort((a, b) => a - b)
        }
        if (ran === 2) {
            boxList1bgColor[0].sort((a, b) => b - a)
        }
        boxList1bgColor[0].splice(0, 0, 'start')
        boxList1bgColor[0].splice(4, 4, 'end')
        var str = boxList1bgColor[0].toString().replace('start,', 'rgb(').replace(',end', ')')
        return str
    }


}


let supporters = new Supporters

export { supporters }