//Welcome to my Javascript

//First Canvas

//variable bank
function firstCanvas() {
    let canvas = document.getElementById("canvas")
    let ctx = canvas.getContext('2d')
    let divOne = document.getElementById("divOne")
    let body = document.getElementById("body")


    //Drawing  the clock canvas
    function drawClock() {

        //clearing screeen and setting canvas dimensions
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        W = 0.9 * window.innerWidth;
        H = 0.8 * window.innerHeight;
        canvas.style.marginTop = `${0.1*H}px`;
        canvas.width = W;
        canvas.height = H;
        ctx.translate(canvas.width / 2, canvas.height / 2)
        var radius = 0.45 * radiusComp()

        drawFace(ctx, radius);
        drawNumbers(ctx, radius);
        drawTime(ctx, radius);
    }

    //comparing the width and height of the canvas to pass the smallest of them as the radius of the clock
    function radiusComp() {
        if (canvas.height >= canvas.width) {
            return canvas.width;
        } else {
            return canvas.height;
        }
    }


    //Drawing the face of the clock
    function drawFace(ctx, radius) {

        //Drawing the white area
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI, false);
        ctx.strokeStyle = 'black';
        ctx.strokeStyle = ""
        ctx.lineWidth = '3';
        ctx.stroke();
        ctx.fillStyle = 'azure';
        ctx.fill();

        //Drawing the edge of the white area
        grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
        grad.addColorStop(0, '#333');
        grad.addColorStop(0.5, '#ddd');
        grad.addColorStop(1, '#333')
        ctx.strokeStyle = grad;
        ctx.lineWidth = radius * 0.1;
        ctx.stroke();
        /*ctx.fillStyle = grad;
        ctx.fill();*/

        //Drawing the dot at the center of the clock
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI, false);
        ctx.fillStyle = "#333";
        ctx.fill();

    }

    //Drawing the numbers to be displayed on the clock from 1 to 12
    function drawNumbers(ctx, radius) {
        //declaring the variable ang and num
        var ang;
        var num;
        //additional code for the numbers to make them appear inside the clock
        ctx.font = radius * 0.12 + "px arial"
        ctx.textBaseAlign = "middle";
        ctx.textAlign = 'center';
        //main code for the numbers
        for (num = 1; num < 13; num++) {
            //setting the num
            ang = num * Math.PI / 6;
            //rotating the num by the specified angle clockwise to align it radially with the circumference of the circle according to the hour value
            ctx.rotate(ang)
                //translating the number to the right of the circle by the specified value 'radius * 0.85'
            ctx.translate(0, -radius * 0.85)
                //rotating the num to its original position after it has been translated to ensure it appears upright
            ctx.rotate(-ang)
                //Converting the integer value of the num to a string value and drawing it from the center of the circle
            ctx.fillText(num.toString(), 0, 0)
                //reversing the immediately previous 'ctx.rotate(-ang)' in order to make the next number draw properly
            ctx.rotate(ang)
                //reversing the second previous 'ctx.translate(...,...) to ensure correct rendering of the next number
            ctx.translate(0, radius * 0.85)
                //reversing the third previous 'ctx.rotate(-ang) to ensure the correct drawing of the next number in the for loop
            ctx.rotate(-ang)
        }
    }

    //Getting the time
    function drawTime(ctx, radius) {
        var time = new Date();
        var HH = time.getHours();
        var MM = time.getMinutes();
        var SS = time.getSeconds();

        //Setting the Hour value (HH) and passing it into the called function of 'drawHand'
        HH = HH % 12;
        HH = (HH * Math.PI / 6) + (MM * Math.PI / (6 * 60)) + (SS * Math.PI / (6 * 3600))
        drawHand(ctx, HH, radius * 0.5, radius * 0.07)

        //Setting the Minute value (MM) and passing it into the called function of 'drawHand'
        MM = (MM * Math.PI / 30) + (SS * Math.PI / 30 * 60);
        drawHand(ctx, MM, radius * 0.8, radius * 0.05)

        //Setting the Second value (SS) and passing it into the called function of 'drawHand'
        SS = (SS * Math.PI / 30);
        drawHand(ctx, SS, radius * 0.9, radius * 0.02)

    }

    //Defining the 'drawHand' function
    function drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = "black"
        ctx.lineCap = 'round';
        ctx.moveTo(0, 0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }

    //Setting an event listener for resizing of the body size
    body.onresize = function() {
            console.clear();
            console.log((0.45 * radiusComp()) + 'px is the radius of this clock ')
        }
        //Outputting the stated value to the console
    console.log((0.45 * radiusComp()) + 'px is the radius of this clock ')


    //Calling the 'drawClock' function every 1000 milliseconds, i.e every 1 second.
    setInterval(drawClock, 1000)
}

firstCanvas();




//Second Canvas
function secondCanvas() {
    let myGamePiece;

    function startGame() {
        myGameArea.start();
        myGamePiece = new component(30, 30, 'cyan', 10, 120);
    }

    var myGameArea = {
        canvas: document.createElement('canvas'),
        start: function() {
            this.canvas.width = 480;
            this.canvas.height = 270;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[2]);
            this.interval = setInterval(updateGameArea, 20);
        },
        clear: function() {
            this.context.clearRect(0, 0, canvas.width, canvas.height)
        }
    }

    function component(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.update = function() {
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    function updateGameArea() {
        myGameArea.clear();
        myGamePiece.x += 1;
        myGamePiece.update();
    }

    startGame();

}
secondCanvas();