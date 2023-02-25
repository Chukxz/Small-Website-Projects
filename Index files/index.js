window.onload = function() {
    //Variable bank

    let cs = document.getElementById("cs1");
    const ctx = cs.getContext("2d");


    //sets the some basic background properties for our game
    function basic() {
        let W = window.innerWidth;
        let H = window.innerHeight;
        cs.width = W / 1.04;
        cs.height = H / 1.2;
        cs.style.color = "black";
    }


    //the left group of triangles
    function leftTri() {
        let divisors = window.innerWidth / ((1 / (Math.log(window.innerWidth))) * Math.pow(2, 6));
        for (num = 0; num <= 10; num++) {
            ctx.beginPath();
            ctx.moveTo((0), (num * ((cs.height - cs.height / 3) / 10)));
            ctx.lineTo((cs.width / divisors), ((cs.height - cs.height / 3) / 20) + (num * ((cs.height - cs.height / 3) / 10)));
            ctx.lineTo((0), ((cs.height - cs.height / 3) / 10) + (num * ((cs.height - cs.height / 3) / 10)));
            ctx.closePath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "red";
            ctx.stroke();
            ctx.fillStyle = "blue";
            ctx.fill();

        }
    }


    //the right group of triangles
    function rightTri() {

        let divisor = window.innerWidth / ((1 / (Math.log(window.innerWidth))) * (Math.pow(2, 6)));
        for (nums = 0; nums <= 10; nums++) {
            ctx.beginPath();
            ctx.moveTo((cs.width), (nums * ((cs.height - cs.height / 3) / 10)));
            ctx.lineTo((cs.width - (cs.width / divisor)), ((cs.height - cs.height / 3) / 20) + (nums * ((cs.height - cs.height / 3) / 10)));
            ctx.lineTo((cs.width), ((cs.height - cs.height / 3) / 10) + (nums * ((cs.height - cs.height / 3) / 10)));
            ctx.closePath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "red";
            ctx.stroke();
            ctx.fillStyle = "blue";
            ctx.fill();
        }
    }


    class ball {
        constructor(ballwidth, ballheight) {
            this.width = ballwidth;
            this.height = ballheight;
            this.position = {
                x: this.width / 50,
                y: this.height / 50
            }

            this.radius = {
                r: Math.abs(Math.max(this.width, this.height) / 100)
            }

            this.speed = {
                a: 1,
                b: 2,
                c: 4
            }
        }

        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, this.radius.r, 0, 2 * Math.PI, false);
            ctx.fillStyle = "yellow";
            ctx.fill();
        };

        update(_deltaTime) {
            if (this.position.y <= (4 * this.radius.r) + cs.height - (cs.height / 3)) {
                this.position.y += this.speed.b;
            }
        }
    }

    let Ball = new ball(window.innerWidth, window.innerHeight);


    let lastTime = 0;

    function gameLoop(timeStamp) {
        let deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;


        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        basic(deltaTime);
        leftTri(deltaTime);
        rightTri(deltaTime);
        Ball.draw(ctx);
        Ball.update(deltaTime);


        requestAnimationFrame(gameLoop);
    }

    requestAnimationFrame(gameLoop);

    gameLoop();

}