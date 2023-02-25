//Calling the functions in window.onload to make sure the HTML is loaded.
const abc = "hi";
document.write(abc);
window.onload = function() {

    let posX = 0,
        posY = 0;
    let cntnr = document.getElementById('containers');
    let box = document.getElementById('boxes');
    let sizeW = cntnr.offsetWidth - box.offsetWidth;
    let sizeH = cntnr.offsetHeight - box.offsetHeight;

    setInterval(moves, 10);

    function moves() {
        if (posX >= 0 && posX < sizeW && posY <= 0) {
            posX += 1;
            box.style.background = 'red';
        } else if (posX >= sizeW && posY < sizeH && posY >= 0) {
            posY += 1;
            box.style.background = 'black';
        } else if (posX > 0 && posX <= sizeW && posY >= sizeH) {
            posX -= 1;
            box.style.background = 'blue';
        } else if (posX <= 0 && posY <= sizeH && posY > 0) {
            posY -= 1;
            box.style.background = 'yellow';
        }
        box.style.left = posX + 'px';
        box.style.top = posY + 'px';

    }

    var oos = 0;
    var right = true;
    //our box element
    var boxes = document.getElementById('box');
    setInterval(move, 10);

    function move() {
        if (oos >= 400)
            right = false;
        else if (oos <= 0)
            right = true;
        if (!right) {
            oos -= 1;
            boxes.style.left = oos + 'px';
            boxes.style.backgroundColor = 'darkgrey';
        } else {
            oos += 1;
            boxes.style.left = oos + 'px';
            boxes.style.backgroundColor = "grey";
        }
    }

    var h = document.createElement("p");
    //Create text for the paragraph
    var k = document.createTextNode("We created a new text");
    //Add text to paragraph
    h.appendChild(k);
    var z = document.getElementById("div");
    //Adding the paragraph to the div
    z.appendChild(h);
    //We want to remove the paragraph with id"p2"
    var q = document.getElementById("div");
    var n = document.getElementById("p2");
    q.removeChild(n);
    //We want to remove an the paragraph with id"p3" using the parentNode property
    var y = document.getElementById("p3");
    y.parentNode.removeChild(y);
    //We want to replace "p5" with Alright.
    var rep = document.createElement("p");
    var res = document.createTextNode("Alright.");
    rep.appendChild(res);
    var ret = document.getElementById("div");
    var reu = document.getElementById("p5");
    ret.replaceChild(rep, reu);

    var hes = document.getElementById("containers");
    hes.addEventListener("click", okay, true);
    ret.addEventListener("click", thats, true);

    function thats() {
        alert("No Problem right?");
    }

    function okay() {
        alert("Issokay");
    }
}

function test() {
    var x = document.getElementById('txt');
    var n = x.innerHTML;
    x.innerHTML = n / 2;
}


var images = [
    "slider 1.jpg",
    "slider 2.jpg",
    "slider 3.webp"
];
var num = 0;

function next() {
    var slider = document.getElementById("slider");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}

function validate() {
    var n1 = getElementById("nums1");
    var n2 = getElementById("nums2");
    if (n1.value != "" && n2.value != "") {
        if (n1.value == n2.value) {
            return true;
        }
    }
    alert("The values should be equal and not blank");
    return false;
}

//Get all p attributes
var G = document.getElementsByTagName("p");
for (c = 0; c < G.length; c++) {
    G[c].style.backgroundColor = "#33EA73";
    G[c].style.color = "red";
};
//Get the element with the ID "p"
var ID = document.getElementById("p");
ID.innerHTML = "Well I bet it does look great.";
//Get the elements with p as class names and makes an array with them
var CLASS = document.getElementsByClassName("p");
for (a = 0; a < CLASS.length; a++) {
    CLASS[a].innerHTML = "okay";
};
//Get the element with "e" as class name and select the first array as there is only one element with "e" as class name
var one = document.getElementsByClassName("e");
one[0].innerHTML = "Fine.";
//select child nodes of the element div with id "div"
var elem = document.getElementById("div");
var node = elem.childNodes;
for (b = 0; b < node.length; b++) {
    node[b].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, placeat. Repudiandae maxime temporibus sed natus, vero pariatur nemo laboriosam numquam saepe, illum voluptates, a similique enim vitae voluptate officiis illo!"
};
// make an array with the headers
var myArray = document.getElementsByTagName("h1");
// one variable to be displayed in the headers, and one for counting the array index (x)
var myNumber = 0;
var x = 0; //variable that counts the array index

// the function that steps through the headers and increases the numbers, one at a time
function count() {

    //starting with zero in the first header
    myArray[x].innerHTML = myNumber;

    // step to next header, and increase the number by one
    x++;
    myNumber++;

    // after all headers (indexes) have been stepped through, start over with the first header
    if (x == myArray.length) {
        x = 0;
    }
}; // end of function

// call the function every 1 second (This is the part which Nikita Shamardak refers to in the comments, and it now looks the way it should!)
setInterval(count, 1000);

function show() {
    alert("You just clicked it right?");
}

let named = "David";
let msg = "Welcome " + named + "!";
document.write(msg);
//template literals
let names = "Shawn";
let msgs = `Welcome ${names}!`;
document.write(msgs);

var input1 = prompt("Please enter first number");
var input2 = prompt("Please enter second number");
var result = `${(input1 + input2) > 100 ? "The sum of these numbers is greater than 100" : "The sum of these numbers is less than 100"}`;
document.write(result + "<br />");

for (let ch of "Sololearn") {
    document.write(ch);
}

let doo = { a: 1, b: 2, c: 3 }
for (let ids in doo) {
    document.write(ids);
}

let lisdf = ["e", "g", "g"]
for (let dsde of lisdf) {
    document.write(dsde);
}

let wall = {
    length: 34,
    width: 8,
    height: 345,
    add() {
        this.height += 3;
    }
};
wall.add();
document.write(wall.length + "<br />");
document.write(wall.width + "<br />");
document.write(wall.height + "<br />");

let color = "blue";
let shape = "sphere";
let object = {
    color,
    shape
};
document.write(object.color + "  " + object.shape + "<br />");
/*We are creating this object using the Object Literal (or Initializer) syntax.
var person = {
    name: "James",
    age: 32
};
var person1 = person.name;
var person2 = person['age'];
document.write(person1 + person2 + "<br />");
document.write("Number of letters (including the characters and spaces if any), in name submitted= " + person.name.length + "<br />");
var courses = ["HTML", "CSS", "JS"];
var len = courses.length;
for (i = 0; i < len; i++) {
    alert(courses[i]);
}
document.write("No. of courses= " + i + "<br />");

//We now want to create an object using the Object Constructor syntax.
function people(name, age, favColor) {
    this.name = name;
    this.age = age;
    this.favColor = favColor;
    this.yearOfBirth = bornYear;
}

function bornYear() {
    return 2022 - this.age;
}
var p1 = new people("John", 42, "green");
var p2 = new people("Amy", 21, "red");
document.write(p1.name + " " + p1.age + " " + p1.yearOfBirth() + "<br />"); //Outputs the name and age of p1 with the year of birth and forces a line break.
document.write(p2.name + " " + p2.age + " " + p2.yearOfBirth() + "<br />"); //Outputs the name and age of p2 with the year of birth and also forces a line break.
function whatever(identity, color) {
    this.identity = identity;
    this.color = color;
    this.changeIdentity = function(newIdentity) {
        this.identity = newIdentity;
    }
}
var t = new whatever("David", "black");
t.changeIdentity("blue");
document.write(t.identity + "<br />");

function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function(method) {
        this.method = this.name + ": " + this.number;
    }
}
var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();
document.write(a.method + "<br />");
document.write(b.method + "<br />");
// We are using the Array Constructor syntax to create these arrays.
var what = new Array("Array", "Array 2", "Array 3");
var what1 = what[2]; //Array 3
what[0] = "Array 1"; // Changes the first element from Array to Array 1
var can = new Array(2);
can[0] = "can 1";
can[1] = "can 2";
var should = new Array();
should[0] = "what is it";
should[1] = "what was it";
//We are using the Array Literal syntax here, as in right about now.
var literal = ["First array", "Second array", "Third Array"];
//Associative Arrays
var associative = []; //Javascript will convert the array to an object.
associative["associate name"] = "Geoffrey";
associative["associate age"] = 58;
var combination = literal.concat(associative);
document.write(combination.length);
document.write(Math.PI + "<br />");
document.write(Math.E + "<br />");
document.write(Math.ceil(Math.random() * 10));*/

//ES6 Objects
var car = {
    speed: 40,
    accelerate() {
        this.speed += 25;
    }
}

car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
console.log(car.speed);

var e = 0;
var t = {
    ['foo' + ++e]: e,
    ['foo' + ++e]: e,
    ['foo' + ++e]: e
};
console.log(t);
console.log(t.foo1);
console.log(t.foo2);
console.log(t.foo3);

var param = 'size';
var config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
}
console.log(config.mobileSize);