var cube = document.getElementById("box");
txt = document.getElementById("hoveringtext");
var num = 0;
var state = 0;


document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 32:
            state++;
            if (state % 2 == 0) {
                cube.style.animationPlayState = "running";
                txt.innerHTML = 'Click on box or spacebar to pause!';
            } else if (state % 2 == 1) {
                cube.style.animationPlayState = "paused";
                txt.innerHTML = 'Click on box or spacebar to play!';
            }
            break;

        case 37:
            cube.style = "--dir:1";
            if (num < 0) {
                cube.style.animationDuration = `calc(var(--speed)*${-1*num})`;
            } else if (num > 0) {
                cube.style.animationDuration = `calc(var(--speed)/${num})`;
            } else if (num = 0) {
                cube.style.animationDuration = `calc(var(--speed)*${num})`;
            }
            break;

        case 39:
            cube.style = "--dir:-1";
            if (num < 0) {
                cube.style.animationDuration = `calc(var(--speed)*${-1*num})`;
            } else if (num > 0) {
                cube.style.animationDuration = `calc(var(--speed)/${num})`;
            } else if (num = 0) {
                cube.style.animationDuration = `calc(var(--speed)*${num})`;
            }
            break;

        case 38:
            num++;
            if (num < 0) {
                cube.style.animationDuration = `calc(var(--speed)*${-1*num})`;
            } else if (num > 0) {
                cube.style.animationDuration = `calc(var(--speed)/${num})`;
            } else if (num = 0) {
                cube.style.animationDuration = `calc(var(--speed)*${num})`;
            }
            break;

        case 40:
            num--;
            if (num < 0) {
                cube.style.animationDuration = `calc(var(--speed)*${-1*num})`;
            } else if (num > 0) {
                cube.style.animationDuration = `calc(var(--speed)/${num})`;
            } else if (num = 0) {
                cube.style.animationDuration = `calc(var(--speed)*${num})`;
            }
            break;

    }
})

var up = document.querySelector("#u");

up.onmousedown = function() {
    num++;
    if (num < 0) {
        cube.style.animationDuration = `calc(var(--speed)*${-1*num})`;
    } else if (num > 0) {
        cube.style.animationDuration = `calc(var(--speed)/${num})`;
    } else if (num = 0) {
        cube.style.animationDuration = `calc(var(--speed)*${num})`;
    }

}
up.ontouchstart = function() {
    num++;
    if (num < 0) {
        cube.style.animationDuration = `calc(var(--speed)*${-1*num})`;
    } else if (num > 0) {
        cube.style.animationDuration = `calc(var(--speed)/${num})`;
    } else if (num = 0) {
        cube.style.animationDuration = `calc(var(--speed)*${num})`;
    }

}

var down = document.querySelector("#d");

down.onmousedown = function() {
    num--;
    if (num < 0) {
        cube.style.animationDuration = `calc(var(--speed)*${-1*num})`;
    } else if (num > 0) {
        cube.style.animationDuration = `calc(var(--speed)/${num})`;
    } else if (num = 0) {
        cube.style.animationDuration = `calc(var(--speed)*${num})`;
    }

}

down.ontouchstart = function() {
    num--;
    if (num < 0) {
        cube.style.animationDuration = `calc(var(--speed)*${-1*num})`;
    } else if (num > 0) {
        cube.style.animationDuration = `calc(var(--speed)/${num})`;
    } else if (num = 0) {
        cube.style.animationDuration = `calc(var(--speed)*${num})`;
    }

}

var left = document.querySelector("#l");

left.onmousedown = function() {
    cube.style = "--dir:1";
    if (num < 0) {
        cube.style.animationDuration = `calc(var(--speed)*${-1*num})`;
    } else if (num > 0) {
        cube.style.animationDuration = `calc(var(--speed)/${num})`;
    } else if (num = 0) {
        cube.style.animationDuration = `calc(var(--speed)*${num})`;
    }
}

left.ontouchstart = function() {
    cube.style = "--dir:1";
    if (num < 0) {
        cube.style.animationDuration = `calc(var(--speed)*${-1*num})`;
    } else if (num > 0) {
        cube.style.animationDuration = `calc(var(--speed)/${num})`;
    } else if (num = 0) {
        cube.style.animationDuration = `calc(var(--speed)*${num})`;
    }
}

var right = document.querySelector("#r");

right.onmousedown = function() {
    cube.style = "--dir:-1";
    if (num < 0) {
        cube.style.animationDuration = `calc(var(--speed)*${-1*num})`;
    } else if (num > 0) {
        cube.style.animationDuration = `calc(var(--speed)/${num})`;
    } else if (num = 0) {
        cube.style.animationDuration = `calc(var(--speed)*${num})`;
    }
}

right.ontouchstart = function() {
    cube.style = "--dir:-1";
    if (num < 0) {
        cube.style.animationDuration = `calc(var(--speed)*${-1*num})`;
    } else if (num > 0) {
        cube.style.animationDuration = `calc(var(--speed)/${num})`;
    } else if (num = 0) {
        cube.style.animationDuration = `calc(var(--speed)*${num})`;
    }
}

cube.onclick = function() {
    state++;
    if (state % 2 == 0) {
        cube.style.animationPlayState = "running";
        txt.innerHTML = 'Click on box or spacebar to pause!';
    } else if (state % 2 == 1) {
        cube.style.animationPlayState = "paused";
        txt.innerHTML = 'Click on box or spacebar to play!';

    }
}