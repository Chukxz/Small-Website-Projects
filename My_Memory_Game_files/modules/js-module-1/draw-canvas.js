class DrawCanvas {

    drawCanvas(canvas, canvWidth, color) {
        canvas.style.borderStyle = 'solid';
        canvas.style.borderWidth = canvWidth;
        canvas.style.borderColor = color;
        canvas.style.marginLeft = `${(window.innerWidth)/20}px`;
        canvas.style.marginTop = `${(window.innerHeight/10)}px`;
        var width = window.innerWidth - (window.innerWidth / 10);
        var height = window.innerHeight - (window.innerHeight / 3);
        canvas.style.marginRight = `${(window.innerWidth)/20}px`;
        canvas.width = width;
        canvas.height = height;
    }
}

let Drawcanvas = new DrawCanvas

export { Drawcanvas }