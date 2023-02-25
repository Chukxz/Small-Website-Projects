var settings = document.getElementById("settings"); //Refers to the div element with id settings
var body = document.getElementById('body'); //Refers to the div element with id body
var section = document.getElementById("overall"); //Refers to the section element with id section
var settings = document.getElementById("settings");
var content = document.getElementById('content');
var set = document.getElementById('set');
var select = document.getElementById("select");
var light = document.getElementById("light");
var dark = document.getElementById("dark");
var div = document.getElementById("divone");
var divs = document.getElementById('divtwo');
var footer = document.getElementById("footerone");
var p1 = document.getElementById("p1");
var colorsliders = document.getElementById("colorsliders");
var opacityslider = document.getElementById("opacityslider");
var range1 = document.getElementById('range1');
var label1 = document.getElementById('label1');
var range2 = document.getElementById('range2');
var label2 = document.getElementById('label2');
var range3 = document.getElementById('range3');
var label3 = document.getElementById('label3');
var label4 = document.getElementById('label4');
var range4 = document.getElementById('range4');
label1.innerHTML = range1.value;
label2.innerHTML = range2.value;
label3.innerHTML = range3.value;
label4.innerHTML = range4.value;


window.onload = function() {

    range1.oninput = function() {
        label1.innerHTML = this.value;
        return label1.innerHTML;
    }

    range2.oninput = function() {
        label2.innerHTML = this.value;
        return label2.innerHTML;
    }

    range3.oninput = function() {
        label3.innerHTML = this.value;
        return label3.innerHTML;
    }

    range4.oninput = function() {
        label4.innerHTML = this.value;
        return label4.innerHTML;

    }

    colorsliders.oninput = function() {
        body.style.backgroundColor = `rgb(${label1.innerHTML},${label2.innerHTML},${label3.innerHTML})`
    }

    opacityslider.oninput = function() {
        body.style.opacity = `${(label4.innerHTML/100)}`;
    }


    light.onclick = function() {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        div.style.backgroundColor = "black";
        divs.style.backgroundColor = "black";
        footer.style.backgroundColor = "black";
        p1.style.color = "grey";
        light.style.backgroundColor = "black";
        light.style.color = "white";
        dark.style.backgroundColor = "white";
        dark.style.color = "black";
        light.style.opacity = "1";
        dark.style.opacity = "0.2";
    }





    dark.onclick = function() {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        div.style.backgroundColor = "grey";
        divs.style.backgroundColor = "grey";
        footer.style.backgroundColor = "grey";
        p1.style.color = "white";
        light.style.backgroundColor = "white";
        light.style.color = "black";
        dark.style.backgroundColor = "black";
        dark.style.color = "white";
        light.style.opacity = "0.2";
        dark.style.opacity = "1";
    }



}


var i = 0;
document.addEventListener('click', () => {
    i++;
    console.log("Click : " + i);
})