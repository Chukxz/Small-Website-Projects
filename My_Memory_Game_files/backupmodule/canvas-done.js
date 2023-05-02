import { canvas, canvWidth, color } from './Memory game.js'

function drawCanvas() { //Draw the Canvas
    canvas.style.borderStyle = 'solid';
    canvas.style.borderWidth = canvWidth;
    canvas.style.borderColor = color;
    canvas.style.marginTop = `${(window.innerHeight/10)}px`;
    canvas.style.marginLeft = `${(window.innerWidth)/20}px`;
    var width = window.innerWidth - (window.innerWidth / 10);
    var height = window.innerHeight - (window.innerHeight / 5);
    canvas.style.marginRight = `${(window.innerWidth)/20}px`;
    canvas.width = width;
    canvas.height = height;
}

export { drawCanvas }