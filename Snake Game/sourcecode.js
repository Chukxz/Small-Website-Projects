//variable bank

const canvas = document.getElementById("game");

const ctx = canvas.getContext("2d");

const button = document.getElementById("button");


let speed = 7;
let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
let headX = Math.floor(Math.random() * tileCount);
let headY = Math.floor(Math.random() * tileCount);
const snakeParts = [];
let tailLength = 2;

let appleX = Math.floor(Math.random() * tileCount);
let appleY = Math.floor(Math.random() * tileCount);

let xvelocity = 0;
let yvelocity = 0;

let score = 0;

const gulpSound = new Audio("mygulpsound.mp3");

class SnakeParts {
    constructor(xposition, yposition) {
        this.x = xposition;
        this.y = yposition;
    }
}


//our gameloop

//requestAnimationFrame
//setInterval xtimes per a second
//setTimeOut 

function drawGame() {

    changeSnakePosition();

    let result = isGameOver();

    if (result) {
        return;
    }

    clearScreen();

    checkAppleCollision();
    drawApple();
    drawSnake();

    drawScore();

    if (score > 0) {
        speed = 7 + (score / 10);
    }


    setTimeout(drawGame, 1000 / speed);
}

function isGameOver() {
    let gameOver = false;

    if (yvelocity === 0 && xvelocity === 0) {
        return false;
    }

    //walls
    if (headX < 0) {
        gameOver = true;
    } else if (headX === tileCount) {
        gameOver = true;
    } else if (headY < 0) {
        gameOver = true;
    } else if (headY === tileCount) {
        gameOver = true;
    }

    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        if (part.x === headX && part.y === headY) {
            gameOver = true;
            break;
        }
    }

    if (gameOver) {
        ctx.fillStyle = "white";
        ctx.font = "54px verdana";

        //some custom text gradients
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.3", "blue");
        gradient.addColorStop("0.45", "cyan");
        gradient.addColorStop("0.55", "green");
        gradient.addColorStop("0.7", "yellow");
        gradient.addColorStop("1.0", "red");
        //fill with gradient
        ctx.fillStyle = gradient;


        ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
    }

    return gameOver;
}

function drawScore() {
    ctx.fillStyle = 'white';
    ctx.font = '10px verdana';
    ctx.fillText("Score " + score, canvas.width - 50, 10);
}

function clearScreen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}

function drawSnake() {

    ctx.fillStyle = 'green';
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }

    snakeParts.push(new SnakeParts(headX, headY)); //put an item at the end of the list next to the head
    while (snakeParts.length > tailLength) {
        snakeParts.shift(); //remove the furthest item from the snade parts if we have more than our tail size
    }

    ctx.fillStyle = "orange";
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function changeSnakePosition() {
    headX = headX + xvelocity;
    headY = headY + yvelocity;
}

function drawApple() {
    ctx.fillStyle = "red";
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}


function checkAppleCollision() {
    if (appleX === headX && appleY === headY) {
        let goodPosition = true;
        let newAppleX = Math.floor(Math.random() * tileCount);
        let newAppleY = Math.floor(Math.random() * tileCount);
        for (let i = 0; i < snakeParts.length; i++) {
            let partX = snakeParts[i].x;
            let partY = snakeParts[i].y;
            if (newAppleX === partX && newAppleY === partY) {
                goodPosition = false;
                break;
            } else {
                goodPosition = true;
            }
        }
        if (goodPosition) {
            appleX = newAppleX;
            appleY = newAppleY;
            tailLength++;
            score++;
            gulpSound.play();
            return;
        } else {
            checkAppleCollision();
        }

    }
}

document.body.addEventListener("keydown", keyDown);

// document.body.addEventListener("touchstart", touchStart);

function keyDown(event) {
    //up
    if (event.keyCode == 38) {
        if (yvelocity == 1)
            return;
        yvelocity = -1;
        xvelocity = 0;
    }

    //down
    if (event.keyCode == 40) {
        if (yvelocity == -1)
            return;
        yvelocity = 1;
        xvelocity = 0;
    }

    //left
    if (event.keyCode == 37) {
        if (xvelocity == 1)
            return;
        yvelocity = 0;
        xvelocity = -1;
    }

    //right
    if (event.keyCode == 39) {
        if (xvelocity == -1)
            return;
        yvelocity = 0;
        xvelocity = 1;
    }
}

// function touchStart(event) {
//     //up
//     if (event.keyCode == 38) {
//         if (yvelocity == 1)
//             return;
//         yvelocity = -1;
//         xvelocity = 0;
//     }

//     //down
//     if (event.keyCode == 40) {
//         if (yvelocity == -1)
//             return;
//         yvelocity = 1;
//         xvelocity = 0;
//     }

//     //left
//     if (event.keyCode == 37) {
//         if (xvelocity == 1)
//             return;
//         yvelocity = 0;
//         xvelocity = -1;
//     }

//     //right
//     if (event.keyCode == 39) {
//         if (xvelocity == -1)
//             return;
//         yvelocity = 0;
//         xvelocity = 1;
//     }
// }

drawGame();

//refreshing the page
button.onclick = function() {
    window.location.reload();
}