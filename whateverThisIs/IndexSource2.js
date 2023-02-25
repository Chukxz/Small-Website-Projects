var body = document.getElementById("body");
var scene = document.getElementById("scenario");
var cube = document.getElementById('cube');
var sphere = document.getElementById("ball");
var ballShadow = document.getElementById("ballShadow")
var state = 0;
txt = document.getElementById("hoveringtext");

document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 32:
            state++;
            if (state % 2 == 0) {
                scene.style.animationPlayState = "running";
                cube.style.animationPlayState = "running";
                sphere.style.animationPlayState = "running";
                ballShadow.style.animationPlayState = "running";
                txt.innerHTML = 'Click on scene or spacebar to pause!';
            } else if (state % 2 == 1) {
                scene.style.animationPlayState = "paused";
                cube.style.animationPlayState = "paused";
                sphere.style.animationPlayState = "paused";
                ballShadow.style.animationPlayState = "paused";
                txt.innerHTML = 'Click on scene or spacebar to play!';
            }
            break;

        case 37:
            scene.style = "--dir:360deg";
            break;

        case 39:
            scene.style = "--dir:-360deg"
            break;
    }
})


var left = document.querySelector("#l");

left.onmousedown = function() {
    scene.style = "--dir:360deg";
}

left.ontouchstart = function() {
    scene.style = "--dir:360deg";
}

var right = document.querySelector("#r");

right.onmousedown = function() {
    scene.style = "--dir:-360deg";
}

right.ontouchstart = function() {
    scene.style = "--dir:-360deg";

}

scene.onclick = function() {
    state++;
    if (state % 2 == 0) {
        scene.style.animationPlayState = "running";
        cube.style.animationPlayState = "running";
        sphere.style.animationPlayState = "running";
        ballShadow.style.animationPlayState = "running";
        txt.innerHTML = 'Click on scene or spacebar to pause!';
    } else if (state % 2 == 1) {
        scene.style.animationPlayState = "paused";
        cube.style.animationPlayState = "paused";
        sphere.style.animationPlayState = "paused";
        ballShadow.style.animationPlayState = "paused";
        txt.innerHTML = 'Click on scene or spacebar to play!';

    }
}