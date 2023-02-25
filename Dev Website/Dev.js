var html = document.getElementById('html');
var body = document.getElementById('body');


//Object.assign
let person = {
    name: 'Jack',
    age: 18,
    sex: 'male'
}

let newPerson = Object.assign({}, person, { name: 'James' });
console.log(newPerson);
console.log(newPerson.name);
console.log(person.name);

let student = {
    name: 'Bob',
    age: 20,
    xp: '2'
}

let newStudent = Object.assign({}, person, student);
console.log(newStudent);

const obj1 = {
    a: 0,
    b: 2,
    c: 4
}

const obj2 = Object.assign({ c: 5, d: 6 }, obj1);
console.log(obj2);
console.log(obj2.c, obj2.d);

//Array Destructuring
let arr = ['1', '2', '3'];
let [one, two, three] = arr;
console.log(arr);
console.log(one);
console.log(two);
console.log(three);

//Array Destructuring
var arra = ['6', '7', '8', '9'];
var [six, seven, eight, nine] = arra;
console.log(six);
console.log(seven);
console.log(eight);
console.log(nine);

//Object Destructuring
let obj = { h: 100, s: true }
let { h, s } = obj;
console.log(h);
console.log(s);

//Object Destructuring
var objs = { hw: 200, sw: false };
var { hw: newhw, sw: newsw } = objs;
console.log(newhw);
console.log(newsw);

//Object Destructuring and setting of default values
var objed = { id: 32, name: "Sololearn" };
var { id = 898 /*Mind you, this ain't gonna show 'cause it's not the default value*/ , age = 30 + " " + "Thirty" } = objed;
console.log(id);
console.log(age);

//Object Destructuring
let i, j;
({ i, j } = { i: "Hello", j: "Chuks" });
console.log(i + " " + j);

//Object Destructuring
let { k, l } = { k: 'Hi', l: 'Emeka' };
console.log(k + " " + l);

function a() {
    return [1];
}


function add(u, v) {
    var summation = u + v;
    console.log(summation);
}

add(32, 22);

const avd = (x, y) => {
    var sums = x + y;
    console.log(sums);
}

avd(72, 61);

var array = [2, 3, 4, 5];
array.forEach(function(el) {
    console.log(el * 2);
})


const arrays = [6, 7, 8, 9, 0];
arrays.forEach(v => {
    console.log(v * 2);
})


const ava = (f, g = 32, h = 89, i = 23, j = 238) => {
    return f + g + h + i + j;
}

console.log(ava(43));



//Let's see how ES6 improves readability of code
function containsAll(arr) { //Mind you this is the old method of passing a variable number of arguments to a function before ES6 introduced rest
    for (let k = 1; k < arguments.length; k++) {
        let num = arguments[k];
        if (arr.indexOf(num) === -1) {
            return false
        }
    }
    return true
}

let z = [2, 4, 6, 7];
console.log(containsAll(z, 2, 4, 7));
console.log(containsAll(z, 6, 4, 9));

//But ES6 introduces a more readable syntax for doing this through the rest parameter

function containedAll(arrs, ...nums) {
    for (let num of nums) {
        if (arrs.indexOf(num) === -1) {
            return false
        }
    }
    return true
}

let p = [2, 4, 6, 7];
console.log(containedAll(p, 2, 4, 7));
console.log(containedAll(p, 6, 4, 9));

/*
function magic(...memes) {
    let sums = 0;
    memes.filter(n => n % 2 == 0).map(el => sum += el);
    return sums;
}

console.log(magic(1, 2, 3, 4, 5, 6));*/

//Let's explore spread
//let Spread of function calls
/*
function myFunction(o, p, q, r) {
    console.log(o, p, q, r);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4));

//Now let's do it the ES6 way

const myFunctions = (mk, nk, ok, pk) => {
    console.log(mk, nk, ok, pk);
}

let argss = [1, 2, 3, 4];
myFunctions(...argss, 4)*/





var scores = [32, 51, 78, 70, 52, 87, 78, 82, 22, 72, 98, 32, 53, 43, 76, 65, 25, 65, 25, 76, 79, 72, 67, 62, 65, 82, 15, 54, 87, 82];


console.log(`The number of items in this array are ${scores.length}`);


var count1 = 0;
for (let score1 of scores) {
    if (score1 < 70) {
        count1++;
    }
}
console.log(count1);

var count2 = 0;
for (let score2 of scores) {
    if (score2 == 70) {
        count2++;
    }
}
console.log(count2);

var count3 = 0;
for (let score3 of scores) {
    if (score3 > 70) {
        count3++;
    }
}
console.log(count3);

var count4 = 0;
for (let score4 of scores) {
    if (score4 <= 70) {
        count4++;
    }
}
console.log(count4);

var count5 = 0;
for (let score5 of scores) {
    if (score5 >= 70) {
        count5++;
    }
}
console.log(count5);



//Let's look at the Spread and Rest Operators


/*Spread Operator*/


//Add the elements of an existing array into a new array

var previousArray = ['first', 'second', 'third', 'fourth']; //previously existing array
/*var newArray = ['fifth', 'sixth', 'seventh'] -------------------- new array*/

var newArray = [...previousArray, 'fifth', 'sixth', 'seventh'];
console.log(newArray); //output to the console


var firstarray = ['Zero', 'Un', "Deux", "Trois", "Quatre", 'Cinq'];
var secondarray = [...firstarray, 'Six', 'Sept', 'Oct', ];
console.log(secondarray);



//pass elements of an array as arguments to a function

function addingSomeNumbers(num1, num2, num3, num4 /*these are the arguments of the function*/ ) {
    console.log(num1 + num2 + num3 + num4); //Adding the numbers and outputing the result to the console
}

var argumentsArray = [3, 4, 5, 6 /*the numbers we want to be used as the arguments of the above function */ ];
addingSomeNumbers(...argumentsArray); //this passes the numbers as the arguments to the function 'addingSomeNumbers'

function multiplyingSomeNumbers(a, b, c, d, e, f, g, h) {
    console.log(a * b * c * d * e * f * g * h);
}

var multiplyArguments = [89, 42, 76, 54, 19, 28, 70, 63];
multiplyingSomeNumbers(...multiplyArguments);

//copy arrays

var firstArray = [2, 4, 8];
var firstArrayCopy = [...firstArray]; //copys the elements of the previous array to this array and is like firstArrayCopy.slice()
firstArrayCopy.push(5, 9); //adds more elements to firstArrayCopy and returns the new length of the array
console.log(firstArray);
console.log(firstArrayCopy);


let onearray = [2.48, 22.94, 287.43];
let twoarray = [...onearray];
onearray = [23, 287, 84];
console.log(onearray);
console.log(twoarray);


//concatenate arrays

var arr1 = [33, 38, 93, 84];
var arr2 = [23, 17, 42, 18, 93];
console.log(arr1.concat(arr2) /*using the old method of concatenation*/ ); //outputing the result of the concatenation to the console
arr1 = [...arr1, ...arr2]; //using the new spread method
console.log(arr1); //outputing the result of the concatenation to the console

/*Rest Operator*/

//condense multiple elements into an array

function multiply(multiplier, ...theArgs) {
    return theArgs.map(function(element) {
        return multiplier * element;
    });
}

var result = multiply(3, 6, 7, 8, 9);
console.log(result);




//adding an item at the middle of an array using splice
var exp = ['Ofu', 'Abuo', 'Ato'];
exp.splice(2, 0, 'Ato');
exp.splice(3, 1, "Ano");
console.log(exp);

var expEin = ['Ookan', 'Meji', 'Meta', "Merin", "Marun", "Mefa", 'Mesan', 'Mewan']
expEin.splice(6, 0, 'Meje', 'Mejo');
console.log(expEin);


//copying using splice
var exp2 = [];
exp2.splice(0, 0, ...exp);
console.log(exp2);

var expZwei = [];
expZwei.splice(0, 0, ...expEin);
console.log(expZwei);


/*We have been considering spread in array literals now lets consider spread in object literals

const objone = { foo: bar, x: 42 };
const objtwo = { foo: baz, y: 5 };
const clonedObj = {...objone };
const mergedObj = {...objone, ...objtwo };


console.log(objone);
console.log(objtwo);
console.log(clonedObj);

//complete the function
function Add(...numbers) {
    let addition = 0;
    for (let x of numbers) {
        addition += x;
    }
    return addition;
}

console.log(Add(1, 2, 3));
console.log(Add(4, 14, 5, 9, 14));
console.log(Add(2, 36));*/


//This is a class declaration and it is different from a function declaration
class Rectangle {
    constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        //the prototype method below
    get area() {
        return this.calcArea()
    };
    calcArea() {
        return this.height * this.width
    };
    //the protoype method above
}

const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3);

console.log(square);
console.log(poster);
console.log(square.area); //calling the prototype method
console.log(poster.area); // calling the prototype method


class Ellipse {
    constructor(verticalRadius, horizontalRadius) {
        this.rX = verticalRadius;
        this.rY = horizontalRadius;
    };
    get areaValue() {
        return this.areaCalc();
    }
    areaCalc() {
        return this.rX * this.rY;
    }
}

var firstEllipse = new Ellipse(23, 89);
var secondEllipse = new Ellipse(74, 61);
console.log(firstEllipse);
console.log(secondEllipse);
console.log(firstEllipse.rX);
console.log(secondEllipse.rY);
console.log(firstEllipse.areaValue);
console.log(secondEllipse.areaValue);

//Let's use the static method
class Points {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        console.log(dx);
        console.log(dy);
        return Math.hypot(dx, dy)
    }
}

const p2 = new Points(7, 2);
const p3 = new Points(3, 8);
console.log(Points.distance(p2, p3));

//Another function like the one above to find the distance between two points

class DAB {
    constructor(verticalAxis, horizontalAxis) {
        this.x = verticalAxis;
        this.y = horizontalAxis;
    }

    static distances(s, t) {
        const distanceX = s.x - t.x;
        const distanceY = s.y - t.y;
        console.log(distanceX);
        console.log(distanceY);
        return Math.hypot(distanceX, distanceY);
    }
}

const p4 = new DAB(32, 87);
const p5 = new DAB(74, 13);
console.log(DAB.distances(p4, p5));



var onesy = class firsttree {
    constructor(height, flowerColor) {
        this.firstproperty = height;
        this.secondproperty = flowerColor;
    }
}

let exampleone = new onesy(300 + ' ' + 'metres', 'blue');
console.log(exampleone);
console.log(exampleone.firstproperty);
console.log(exampleone.secondproperty);

var twoosy = class {
    constructor(color, font, altfont) {
        this.ein = color;
        this.zwei = font;
        this.drei = altfont;
    }
}

var exampletwo = new twoosy('red', 'cursive', 'fantasy')

console.log(exampletwo);
console.log(exampletwo.drei);


class Point {
    constructor(a, b) {
        this.x = a;
        this.y = b;
    }
    getX() { return this.x; }
    getY() { return this.y; }
}


// https://www.sololearn.com/Profile/10042983/?ref=app
/*How it all works.
class Point {
    constructor(x, y) {
        // 7 or 3 , 2 or 8
        this.x = x; // 7 or 3
        this.y = y; // 2 or 8
    }

    static distance(a, b) {
        // p1 , p2 
        const dx = a.x - b.x;
        // 7 - 3 = 4
        const dy = a.y - b.y;
        // 2 - 8 = -6
        return Math.hypot(dx, dy);
        // √(4)² + (-6)² = √52 = 7.21110255...
    }
}

const p1 = new Point(7, 2);
const p2 = new Point(3, 8);

console.log(Point.distance(p1, p2));*/ // 
// https://www.sololearn.com/Profile/10042983/?ref=app
/*
  
  
   |     (3,8)=(x1,y1)
 8 |      .
   |      |\
   |      | \
   |      |  \
   |      |   \  √(x2-x1)² + (y2-y1)²
   |   -6 |    \
   |      |     \
   |      |      \
 2 |      |_______\.(7,2)=(x2,y2)                                         Nice, isn't it?                        
   |          4
___|________________________ x
  0|      3        7
   |
   |
   |
   |
   |
   |
   |
       
       
    
  
simply,
  
  |\
a | \ c = hypotenuse
  |__\
    b
  
a² + b² = c²
√a² + b² = c
  
  
// https://www.sololearn.com/Profile/10042983/?ref=app
*/


function divideSomeNumbers(Divisor, ...theDividends) {
    return theDividends.map(function(process) {
        return process / Divisor;
    });
}

var Quotient = divideSomeNumbers(120, 2, 3, 4, 5);
console.log(Quotient);


class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
        console.log(this.name + ' barks');
    }
}

let d = new Dog('Rex');
d.bark();
const f = new Dog('Jones');
f.bark();


//Inheritance in ES6

class Animal {
    constructor(name) {
        this.name = name;
    }


    speak() { console.log(this.name + ' make some noises. ') };
}

let animal = new Animal('Animals usually');
animal.speak();

class Dogs extends Animal {
    speak() { console.log(this.name + ' barks. ') };
}

let dog = new Dogs('Dion');
dog.speak();


class Cats extends Animal {
    speak() {
        super.speak(); //Let's include super which will call  this.name + ' make some noises' (or the parents speak method), therefore giving us an output of 'The Cats usually make some noises' in the console.
        console.log(this.name + " meow.")
    };
}

let cat = new Cats("The Cats usually");
cat.speak();









function whatIsIt() {
    let v = 34;
    if (true) {
        let v = 28;
        console.log(v);
    }
    console.log(v);
}

whatIsIt();

const anim = ["badger", "beaver", "baboon"];

//let's add (*-*) to each
anim[Symbol.iterator] = function() {
    let i = 0;
    let anim = this;
    return {
        next: function() {
            if (i >= anim.length) {
                return { done: true };
            } else {
                const value = anim[i] + ' (*-*)' //the '(*-*)' to be added to each;
                i++;
                return { value, done: false };
            }
        }
    };
};


//This for loop is not affected by the symbol iterator
for (i = 0; i < anim.length; i++) {
    console.log(anim[i]); //badger, beaver, baboon
}

//this for of loop is affected by the symbol iterator as it calls it
for (const i of anim) {
    console.log(i); //badger (*-*), beaver (*-*), baboon (*-*)
}

//another way to output the anim array to the console but it itself isn't affected by the symbol iterator just like the for loop but unlike the for of loop
anim.forEach(v => console.log(v));

const personHeight = { James: '6.2 ft', John: '5.11 ft', Jude: '6.5 ft' };

for (const key of Object.values(personHeight)) {
    console.log(key);
}

for (const key in personHeight) {
    console.log(key)
};


class Exams {
    constructor(x) {
        this.sc = x;
    }

    static average(a, b, c) {
        return Math.round((a.sc + b.sc + c.sc) / 3); //(74+80+68)/3=74 
    }
}

const exam1 = new Exams(74);
const exam2 = new Exams(80);
const exam3 = new Exams(68);

console.log(Exams.average(exam1, exam2, exam3)); //74

/*
function main() {
    var exam1 = parseInt(readLine(), 10);
    var exam2 = parseInt(readLine(), 10);
    var exam3 = parseInt(readLine(), 10);

    console.log(Exam.average(exam1, exam2, exam3));

}
class Exam {
    //your code goes here

    static average(a, b, c) {
        const one = (a + b + c) / 3;
        return Math.round(one);
    }
}

//Nice isn't it?
*/

//ES6 Map and Set


//Let's consider Map first

let mapone = new Map([
    ['k1', 'v1'],
    ['k2', 'v2'] //mapone.size=2
]);
mapone.set('k3', 'v3'); //now mapone.size=3
console.log(mapone.delete('k8')); //false as 'k8' does not exist
console.log(mapone.get('k3'));
console.log(mapone.has('k1'));
console.log(mapone);
console.log(mapone.size); //3


for (let kv of mapone.keys()) console.log(kv[0] + " : " + kv[1]);

for (let vk of mapone.values()) console.log(vk[0] + ' : ' + vk[1]);


for (let ent of mapone.entries()) console.log(ent[0] + ' : ' + ent[1]);
for (let ent of mapone.entries()) console.log(ent[1] + ' : ' + ent[0]);
mapone.clear();
console.log(mapone);


//Now let's consider Set

let setone = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1])
    //1 occurs twice
    //2 occurs twice
    //4 occurs twice
    //9 occurs twice
    //59 occurs once
    //therefore the total number of unique values is 5
console.log(setone.size); //thus 'setone.size' is 5
setone.add(92).delete(2);
console.log(setone.has(4));
console.log(setone.size);
console.log(setone);
for (let v of setone.values()) console.log(v);
setone.clear();
console.log(setone);



//Now let's do something crazy

body.onclick = function() {
    document.write('initializing our set of arrays: ');
    let arr1 = [1];
    let arr2 = [2];
    let set = new Set([arr1, arr2]);
    document.write(set.size); // 2
    for (i of set.values()) {
        document.write(' ' + i); // 1 2
    }

    document.write('<br/>changing arrays so now they are identical: ');
    arr2[0] = 1;
    document.write(arr1.toString()); // 1
    document.write(' ' + arr2.toString()); // now also 1

    document.write('<br/>testing the size and contents of our set after change: ');
    document.write(set.size); // still 2
    for (i of set.values()) {
        document.write(' ' + i); // now 1 1
    }

    document.write('<br/>trying to add a new array [1]: ');
    set.add([1]);
    document.write(set.size); // now 3
    for (i of set.values()) {
        document.write(' ' + i); // now 1 1 1
    }

    document.write('<br/>trying to add arr1 to the set again: ');
    set.add(arr1);
    document.write(set.size); // still 3
    for (i of set.values()) {
        document.write(' ' + i); // still 1 1 1
    }

    document.write('<br/><br/><br/>Refresh page to return to previous')
}


let employees = new Map([
    ["Richard", "Developer"],
    ["Maria", "SEO Specialist"],
    ["Tom", "Product Manager"],
    ["David", "Accountant"],
    ["Sophia", "HR Manager"]
]);

//add the new pair to the map
employees.set("Bob", "Developer");
for (var employee of employees.entries()) {
    //your code for the output
    console.log(employee[0] + " : " + employee[1]);
}


//Lol, a simple example of the "pyramid of doom"
setTimeout(function() {
    console.log("Work 1");
    setTimeout(function() {
        console.log("Work 2");
        setTimeout(function() {
            console.log("Work 3");
            setTimeout(function() {
                console.log("End");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
console.log("Start");


function* idMaker() {
    let index = 0;
    while (index < 5)
        yield index++;
}

var gen = idMaker();
console.log(gen.next().value);




const premium = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
    [Symbol.iterator]: function*() {
        for (let index of premium) {
            yield `${index}`;
        }
    }
};

// Uncomment steps 2. to 5. one at a time and see the result

const allPremium = [...my_obj] // 1. Spread the object into [0, 1, 4, a, 9, c, 16]
    .map(i => parseInt(i, 10)) // 2. Parse to decimal int (10 means base 10) -> [0, 1, 4, NaN, 9, NaN, 16]
    .map(Math.sqrt) // 3. Apply square root to all -> [0, 1, 2, NaN, 3, NaN, 4]        
    .filter((i) => i < 5) // 4. Filter to keep only numbers that's smaller than 5 -> [0, 1, 2, 3, 4]   
    .reduce((i, d) => i + d) // 5. Add all numbers in the current array -> 10
;
//I have uncommented steps 2. to 5.

console.log(allPremium);


//Let's consider modules in JavaScript

//lib/math.js
/*
export let sum = (x, y) => { return x + y; }
export let pi = 3.14;

//app.js
import * as math from "lib/math"
console.log(`2p = + ${math.sum(math.pi, math.pi)}`)
*/ //We're not gonna use this code as some browsers don't support modules



/*
function foo() {

    return new Promise((
        resolve,
        reject
    ) => {

        let result = getSomeResult();

        if (result)

            resolve('Success');

        else

            reject('Something went wrong');

    });

}
*/



/*
//let's convert some functions to arrow functions

function sum(a, b) {
    return a + b;
}

//converting 'sum' to an arrow function
let sumArrow = (a, b) => {
    return a + b;
}

//further simplifying(as we only have one line of code)

let sumsArrow = (a, b) => a + b; //'a+b' is assumed to be returned just like 'sumsArrow' is assumed to be a function





function isPositive(number) {
    return number >= 0;
}

//converting to arrow function
let isPositiveArrow = (number) => {
    return number >= 0;
}

//further simplifying

let arePositivesArrow = (number) => number >= 0;





function randomNumber() {
    return Math.random;
}

//converting to arrow functions

let randomNumberArrow = () => {
    return Math.random;
}

//further simplifying

let randomNumbersArrow = () => Math.random;



document.addEventListener('click', function() {
    console.log('Click');
});



//converting to arrow function

document.addEventListener('click', () => {
    console.log('Click');
})



//simplyfying

document.addEventListener('click', () => console.log("Click"));
*/






let promise = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve("Success")
    } else {
        reject("Failed")
    }
})


promise.then((message) => {
    console.log("This is in the then " + message);
}).catch((message) => {
    console.log("This is in the catch " + message);
})


//Javascript Async

function asyncFunc(work) {
    return new Promise(function(resolve, reject) {
        if (work === "")
            reject(Error("Nothing"));
        setTimeout(function() {
            resolve(work);
        }, 4000);
    })
}

asyncFunc(" Work 1") // Task 1
    .then(function(result) {
        console.log(result);
        return asyncFunc("Work 2"); // Task 2
    }, function(error) {
        console.log(error);
    })
    .then(function(result) {
        console.log(result);
    }, function(error) {
        console.log(error);
    });
console.log('End');

//Array Element finding

//Before ES6
console.log([4, 5, 1, 2, 0].filter(function(x) {
    return x > 3;
})[0]);

//With ES6
console.log([4, 5, 1, 2, 0].find(x => x = 3));

//index of the above item
console.log([4, 5, 1, 2, 0].findIndex(x => x = 3));


//Repeating Strings

//Before ES6
console.log(Array(2 + 1).join('fu')); //Lol 'fufu'

//With ES6
console.log("fu".repeat(2)); //Haha 'fufu'



//Searching Strings

//Before ES6
"SoloLearn".indexOf("Solo") === 0; //true
"SoloLearn".indexOf("Solo") === (4 - "Solo".length); //true
"SoloLearn".indexOf("loLe") !== -1; //true
"SoloLearn".indexOf("olo", 1) !== -1; //true
"SoloLearn".indexOf("olo", 2) !== -1; //false

//With ES6

"SoloLearn".startsWith("Solo", 0); //true
"SoloLearn".endsWith("Solo", 4); //true
"SoloLearn".includes("loLe"); //true
"SoloLearn".includes("olo", 1); //true
"SoloLearn".includes("olo", 2); //false


const squares = num => num * num;
console.log(squares(6) + 6);


class Add {
    constructor(...words) {
            this.words = words;
        }
        //your code goes here
    print() {
        let sign = '$';
        for (let items of this.words) {
            sign += items + "$";
        }
        console.log(sign);
    }
}

var w = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var x = new Add("this", "is", "awesome");
var y = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
w.print();
x.print();
y.print();


function random_password_generate(max, min) {
    var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
    var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
    var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    return randPassword;
}

console.log(randPassword);