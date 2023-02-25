//variable bank
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");


//setting our game size

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


//our paddle

class Paddle {
    constructor(gamewidth, gameheight) {
        this.gamewidth = gamewidth;
        this.gameheight = gameheight;
        this.width = 150;
        this.height = 20;


        this.maxSpeed = 7;
        this.speed = 0;

        this.position = {
            x: gamewidth / 2 - this.width / 2,
            y: gameheight - this.height - 10
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    draw(ctx) {
        ctx.fillStyle = "#0ff";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        this.position.x += this.speed;



        if (this.position.x < 0) this.position.x = 0;

        if (this.position.x + this.width > this.gamewidth) {
            this.position.x = this.gamewidth - this.width;
        };
    }

}

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
class Ball {

    constructor(gamewidth, gameheight) {
        this.image = document.getElementById("myimg");

        this.gamewidth = gamewidth;
        this.gameheight = gameheight;

        this.position = {
            x: 10,
            y: 10
        }

        this.speed = {
            x: 4,
            y: 2
        }

        this.size = 16;

    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);

    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.x + this.size > this.gamewidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        if (this.position.y + this.size > this.gameheight || this.position.y < 0) {
            this.speed.y = -this.speed.y;
        };


    }

}

let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);


//taking in our keyboard inputs and moving the paddle

class InputHandler {
    constructor(paddle) {
        document.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case 37:
                    paddle.moveLeft()

                    break;

                case 39:
                    paddle.moveRight();
                    break;
            }
        });
    }
}


//stopping the paddle

document.addEventListener('keyup', (event) => {
    let pos = paddle.width;
    switch (event.keyCode) {
        case 37:
            if (paddle.speed < 0) paddle.stop();
            break;

        case 39:
            if (paddle.speed > 0) paddle.stop();
            break;
    }

});







new InputHandler(paddle);


//our game loop

let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    paddle.update(deltaTime);
    paddle.draw(ctx);
    ball.update(deltaTime);
    ball.draw(ctx);



    requestAnimationFrame(gameLoop);

}


requestAnimationFrame(gameLoop);