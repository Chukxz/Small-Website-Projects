window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");



    //drawing our canvas

    function drawCanvas() {
        var W = (window.innerWidth);
        var H = (window.innerHeight);

        canvas.width = W;
        canvas.height = H;
    }


    class Char {
        constructor(width, height) {
            this.charwidth = width;
            this.charheight = height;

            this.position = {
                x: 20,
                y: (canvas.height / 3) * 2
            }

            this.speed = {
                x: 5,
                y: 2
            }
        }


        drawChar() {
            ctx.arc(this.position.x, this.position.y, canvas.width / 50, 0, 2 * Math.PI, false);
            ctx.fillStyle = "brown";
            ctx.fill();
        }


    }

    let char = new Char(10, 10);

    let blocks = [];


    let lastTime = 0;

    function draw(timeStamp) {
        let deltaTime = timeStamp - lastTime;
        deltaTime = lastTime;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCanvas();
        char.drawChar();

        requestAnimationFrame(draw);

    }

    requestAnimationFrame(draw);


}