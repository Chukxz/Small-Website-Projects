window.onload = function() {


    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d'); //note that ctx symbolizes our context here.
    console.log(ctx);

    let right = document.getElementById('right');
    let left = document.getElementById('left');
    let up = document.getElementById('up');
    let down = document.getElementById('down');


    x = 250;
    y = 150;
    var t = Date.now();
    let speed = 300;
    let dir = 0;


    up.onmousedown = function() { dir = 4; }
    down.onmousedown = function() { dir = 3; }
    left.onmousedown = function() { dir = 2; }
    right.onmousedown = function() { dir = 1; }


    up.ontouchstart = function() { dir = 4; }
    down.ontouchstart = function() { dir = 3; }
    left.ontouchstart = function() { dir = 2; }
    right.ontouchstart = function() { dir = 1; }


    up.onmouseup = function() { dir = 0; }
    down.onmouseup = function() { dir = 0; }
    left.onmouseup = function() { dir = 0; }
    right.onmouseup = function() { dir = 0; }


    up.ontouchend = function() { dir = 0; }
    down.ontouchend = function() { dir = 0; }
    left.ontouchend = function() { dir = 0; }
    right.ontouchend = function() { dir = 0; }

    var coinx = Math.random() * (600 - 50);
    var coiny = Math.random() * (400 - 50);
    var score = 0;



    function draws() {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        /*
        var fps = Math.round(1 / timePassed);
        */

        ctx.clearRect(0, 0, 600, 400);
        /*
                ctx.beginPath();
                ctx.font = "50px Arial";
                ctx.fillStyle = 'red';
                ctx.fillText("Welcome", 200, 90)
        */





        ctx.beginPath();
        ctx.rect(x, y, 100, 100);
        ctx.fillStyle = "red";
        ctx.fill();

        if (dir == 1) {
            if (x + 100 < 600) {
                x += speed * timePassed;
            }
        } else if (dir == 2) {
            if (x > 0) {
                x -= speed * timePassed;
            }
        } else if (dir == 3) {
            if (y + 100 < 400) {
                y += speed * timePassed;
            }
        } else if (dir == 4) {
            if (y > 0) {
                y -= speed * timePassed;
            }
        }


        //our coins

        ctx.beginPath();
        ctx.rect(coinx, coiny, 50, 50);
        ctx.fillStyle = '#e3c228';
        ctx.fill();

        ctx.beginPath();
        ctx.font = '25px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText("Score: " + score, 20, 30);

        if (coinx <= x + 100 && x <= coinx + 50 && coiny <= y + 100 && y <= coiny + 50) {
            score++;
            coinx = Math.random() * (600 - 50);
            coiny = Math.random() * (400 - 50);
        }



        window.requestAnimationFrame(draws);
    }

    draws();


}