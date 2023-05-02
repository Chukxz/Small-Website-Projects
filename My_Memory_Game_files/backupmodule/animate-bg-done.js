import { root, time, times } from './Memory game.js'

root.style.setProperty("--time", times);

class Animate {
    constructor(timing) {
        this.time = timing;
    }


    start() { //sets the random start color
        let A = Math.round(Math.random() * 256);
        let B = Math.round(Math.random() * 256);
        let C = Math.round(Math.random() * 256);
        var starts = `rgb(${A},${B},${C})`;
        root.style.setProperty("--start", starts)
        setTimeout(this.start, this.timing)
    }

    end() { //sets the random end color
        let X = Math.round(Math.random() * 256);
        let Y = Math.round(Math.random() * 256);
        let Z = Math.round(Math.random() * 256);
        var ends = `rgb(${X},${Y},${Z})`;
        root.style.setProperty("--end", ends)
        setTimeout(this.end, this.timing)
    }
}

let Anim = new Animate(time)

Anim.start()
Anim.end()

export { Anim }