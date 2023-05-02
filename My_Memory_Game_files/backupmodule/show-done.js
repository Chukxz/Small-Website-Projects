import { canvas } from "./Memory game";

canvas.onclick = function show(event) { //When a box is clicked, this function passes the x and y values to the first and second indexes of the  array 'arr' respectively 
    //works in conjunction with functions click1 and click2 to handle all click events
    arr.splice(0, arr.length);
    var xclick = event.clientX;
    var yclick = event.clientY;
    //console.log(xclick, yclick)
    return arr = [Math.abs(Math.round(xclick - (window.innerWidth / 20))), Math.abs(Math.round(yclick - (window.innerHeight / 10)))]
}