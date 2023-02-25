//Note that the segment and triangle properties have not been fully rectified along with the seg, tri, Seg, Tri and thus they have been hidden from view using CSS codes.


//List of pertainable variables
var body = document.getElementById("body");
var d = document.getElementById("prop1");
var param1 = document.getElementById('param1');
var unit1 = document.getElementById("unit1");
var rate1 = document.getElementById('rate1');
var prop2 = document.getElementById("prop2");
var unit2 = document.getElementById('unit2');
var clicknum1 = document.getElementById("num1");
var clicknum2 = document.getElementById("num2");
var change = document.getElementById("change");
var prop1 = document.getElementById("prop1");
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");
var E = document.getElementById("E");
var Ans = document.getElementById("ans");




//List of functions, variables and more..................
function vol() {
    prop1.innerHTML = "Volume";
}

function sur() {
    prop1.innerHTML = "Surface Area";
}

function cir() {
    prop1.innerHTML = "Circumference";
}

function crs() {
    prop1.innerHTML = "Cross-Sectional Area";
}

function chd() {
    prop1.innerHTML = "Chord";
}

function sec() {
    prop1.innerHTML = "Sector";
}

function seg() {
    prop1.innerHTML = "Segment";
}

function tri() {
    prop1.innerHTML = "Triangle";
}

function arc() {
    prop1.innerHTML = "Arc";
}

function dia() {
    prop1.innerHTML = "Diameter";
}

function ras() {
    prop1.innerHTML = "Radius";
}

function inc() {
    param1.innerHTML = "increasing";
    change.innerHTML = "increasing";
}

function dec() {
    param1.innerHTML = "decreasing";
    change.innerHTML = "decreasing";
}

function CM() {
    unit1.innerHTML = "cm";
}

function IN() {
    unit1.innerHTML = "in.";
}

function M() {
    unit1.innerHTML = "m";
}

function FT() {
    unit1.innerHTML = "ft.";
}

function YD() {
    unit1.innerHTML = "yd.";
}

function MILE() {
    unit1.innerHTML = "mi.";
}

function KM() {
    unit1.innerHTML = "km";
}

function NMILE() {
    unit1.innerHTML = "n mi.";
}

function ms() {
    rate1.innerHTML = "ms"
}

function s() {
    rate1.innerHTML = "s"
}

function Vol() {
    prop2.innerHTML = "Volume";
}

function Sur() {
    prop2.innerHTML = "Surface Area";
}

function Cir() {
    prop2.innerHTML = "Circumference";
}

function Crs() {
    prop2.innerHTML = "Cross-Sectional Area";
}

function Chd() {
    prop2.innerHTML = "Chord";
}

function Sec() {
    prop2.innerHTML = "Sector";
}

function Seg() {
    prop2.innerHTML = "Segment";
}

function Tri() {
    prop2.innerHTML = "Triangle";
}

function Arc() {
    prop2.innerHTML = "Arc";
}

function Dia() {
    prop2.innerHTML = "Diameter";
}

function Ras() {
    prop2.innerHTML = "Radius";
}

function Cm() {
    unit2.innerHTML = "cm";
}

function In() {
    unit2.innerHTML = "in.";
}

function m() {
    unit2.innerHTML = "m";
}

function Ft() {
    unit2.innerHTML = "ft.";
}

function Yd() {
    unit2.innerHTML = "yd.";
}

function Mile() {
    unit2.innerHTML = "mi.";
}

function Km() {
    unit2.innerHTML = "km";
}

function Nmile() {
    unit2.innerHTML = "n mi.";
}

function num1click() {
    alert("You have to click on done to be able to input the value of the rate of change, but it is advisable to first fill out the Property, Parameter, Measurement Unit and Rate before submitting by clicking on done.")
}

function num2click() {
    alert("You have to click on done to be able to input the radius of the sphere, but it is advisable to first fill out the Property, Parameter, Measurement Unit and Rate before submitting by clicking on done.")

}






/*You know this function divclicked really has some really big code under it, lol.*/
function divclicked( /*This space is empty, note!*/ ) /*The function that runs when the done button is pressed down and released.*/ {

    A.innerHTML = prop2.innerHTML; //Returns the name of the particular property which we want to find the rate at which it is increasing/decreasing in our answer.
    B.innerHTML = param1.innerHTML; //Returns the whether the rate of change is increasing or decreasing
    D.innerHTML = rate1.innerHTML; //Returns the rate of change value

    class clicked {
        constructor(value1, value2) {
            this.value1 = value1; //Rate of change value.
            this.value2 = value2; //Radius value.
        }
    };
    var clicks = new clicked(prompt("Number:"), prompt("Radius value:")); //modifies the input of the function.
    /*Rate of change and radius value.*/
    if ((clicks.value1 != "" /*the != symbol represents the logical "NOT"*/ ) && /*this symbol represents the logical "AND"*/ (clicks.value2 != "")) {
        alert("Your rate of change is " + clicks.value1 + " " + unit1.innerHTML + " and your radius value is " + clicks.value2 + " " + unit2.innerHTML);
    } else alert("You didn't input either the value of the rate of change, the radius value or both.");
    /*Input angle given the requirements are met*/
    class clickings {
        constructor(thetaone, thetatwo) {
            this.theta1 = thetaone;
            this.theta2 = thetatwo;
        }
    };
    var clicking = new clickings(prompt("Enter angle in degrees or click cancel to enter value in radians."), prompt("Enter angle in radians")); //modifies the angle value
    if ((clicking.theta1 == "") || (clicking.theta2 == "")) {
        if (clicking.theta1 != "") {
            alert("Your angle value is " + clicking.theta1 + " degrees.");
        } else if (clicking.theta2 != "") {
            alert("Your angle value is " + clicking.theta2 + " radians");
        } else alert("You didn't input any angle value.");
    } else alert("Please enter only one angle unit");
    if (clicking.theta2 != "" && clicking.theta1 == "") {
        var conv1 = clicking.theta2;
        var conv2 = 1;
    }
    if (clicking.theta1 != "" && clicking.theta2 == "") {
        var conv2 = (clicking.theta1 * 2 * Math.Pi) / 360;
        var conv1 = 1;
    };

    /*Note:clicks.value1 calls the result of the rate of change.
      While clicks.value2 calls the result of the radius value.
      conv1 is the value of the angle in degrees.
      While conv2 is the value of the angle in radians.
      But conv1 and conv2 should not be both filled as the value can only be in degrees or radians but not both or none.
      The final angle value is conv1 times conv2(conv1*conv2).
      Because conv2(radians)is = 1, if conv1 is filled and conv2 is an empty string, thus conv1*conv2 =conv1*1 = conv1, that is the value in degrees.
      Also conv1(degrees)is = 1, if conv2 is filled and conv1 is an empty string, thus conv1*conv2 =1*conv2 = conv2, that is the value in radians.
    */


    //The set of functions for prop 2 = Volume. 
    if (prop2.innerHTML == "Volume") {
        if (prop1.innerHTML == "Volume") {
            var result = ((4 * Math.PI * Math.pow(clicks.value2, 2)) / (4 * Math.PI * Math.pow(clicks.value2, 2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Surface Area") {
            var result = ((4 * Math.PI * Math.pow(clicks.value2, 2)) / (8 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Circumference") {
            var result = ((4 * Math.PI * Math.pow(clicks.value2, 2)) / (2 * Math.PI)) * clicks.value1;
        }
        if (prop1.innerHTML == "Cross-Sectional Area") {
            var result = ((4 * Math.PI * Math.pow(clicks.value2, 2)) / (2 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Chord") {
            var result = ((4 * Math.PI * Math.pow(clicks.value2, 2)) / (2 * (Math.sin(0.5 * (conv1 * conv2))))) * clicks.value1;
        }
        if (prop1.innerHTML == "Sector") {
            var result = ((4 * Math.PI * Math.pow(clicks.value2, 2)) / (clicks.value2 * conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Segment") {
            var result = ((4 * Math.PI * Math.pow(clicks.value2, 2)) / ((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2)))) * clicks.value1;
        }
        if (prop1.innerHTML == "Triangle") {
            var result = ((4 * Math.PI * Math.pow(clicks.value2, 2)) / (clicks.value2 * Math.sin(conv1 * conv2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Arc") {
            var result = ((4 * Math.PI * Math.pow(clicks.value2, 2)) / (conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Diameter") {
            var result = ((4 * Math.PI * Math.pow(clicks.value2, 2)) / 2) * clicks.value1;
        }
        if (prop1.innerHTML == "Radius") {
            var result = ((4 * Math.PI * Math.pow(clicks.value2, 2)) / 1) * clicks.value1;
        }
    }

    //The set of functions for prop2 = Surface Area
    if (prop2.innerHTML == "Surface Area") {
        if (prop1.innerHTML == "Volume") {
            var result = ((8 * Math.PI * clicks.value2) / (4 * Math.PI * Math.pow(clicks.value2, 2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Surface Area") {
            var result = ((8 * Math.PI * clicks.value2) / (8 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Circumference") {
            var result = ((8 * Math.PI * clicks.value2) / (2 * Math.PI)) * clicks.value1;
        }
        if (prop1.innerHTML == "Cross-Sectional Area") {
            var result = ((8 * Math.PI * clicks.value2) / (2 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Chord") {
            var result = ((8 * Math.PI * clicks.value2) / (2 * (Math.sin(0.5 * (conv1 * conv2))))) * clicks.value1;
        }
        if (prop1.innerHTML == "Sector") {
            var result = ((8 * Math.PI * clicks.value2) / (clicks.value2 * conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Segment") {
            var result = ((8 * Math.PI * clicks.value2) / ((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2)))) * clicks.value1;
        }
        if (prop1.innerHTML == "Triangle") {
            var result = ((8 * Math.PI * clicks.value2) / (clicks.value2 * Math.sin(conv1 * conv2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Arc") {
            var result = ((8 * Math.PI * clicks.value2) / (conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Diameter") {
            var result = ((8 * Math.PI * clicks.value2) / 2) * clicks.value1;
        }
        if (prop1.innerHTML == "Radius") {
            var result = ((8 * Math.PI * clicks.value2) / 1) * clicks.value1;
        }
    }
    //The set of functions for prop2 = Circumference
    if (prop2.innerHTML == "Circumference") {
        if (prop1.innerHTML == "Volume") {
            var result = ((2 * Math.PI) / (4 * Math.PI * Math.pow(clicks.value2, 2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Surface Area") {
            var result = ((2 * Math.PI) / (8 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Circumference") {
            var result = ((2 * Math.PI) / (2 * Math.PI)) * clicks.value1;
        }
        if (prop1.innerHTML == "Cross-Sectional Area") {
            var result = ((2 * Math.PI) / (2 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Chord") {
            var result = ((2 * Math.PI) / (2 * (Math.sin(0.5 * (conv1 * conv2))))) * clicks.value1;
        }
        if (prop1.innerHTML == "Sector") {
            var result = ((2 * Math.PI) / (clicks.value2 * conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Segment") {
            var result = ((2 * Math.PI) / ((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2)))) * clicks.value1;
        }
        if (prop1.innerHTML == "Triangle") {
            var result = ((2 * Math.PI) / (clicks.value2 * Math.sin(conv1 * conv2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Arc") {
            var result = ((2 * Math.PI) / (conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Diameter") {
            var result = ((2 * Math.PI) / 2) * clicks.value1;
        }
        if (prop1.innerHTML == "Radius") {
            var result = ((2 * Math.PI) / 1) * clicks.value1;
        }
    }
    //The set of functions for prop2 = Cross-Sectional Area
    if (prop2.innerHTML == "Cross-Sectional Area") {
        if (prop1.innerHTML == "Volume") {
            var result = ((2 * Math.PI * clicks.value2) / (4 * Math.PI * Math.pow(clicks.value2, 2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Surface Area") {
            var result = ((2 * Math.PI * clicks.value2) / (8 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Circumference") {
            var result = ((2 * Math.PI * clicks.value2) / (2 * Math.PI)) * clicks.value1;
        }
        if (prop1.innerHTML == "Cross-Sectional Area") {
            var result = ((2 * Math.PI * clicks.value2) / (2 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Chord") {
            var result = ((2 * Math.PI * clicks.value2) / (2 * (Math.sin(0.5 * (conv1 * conv2))))) * clicks.value1;
        }
        if (prop1.innerHTML == "Sector") {
            var result = ((2 * Math.PI * clicks.value2) / (clicks.value2 * conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Segment") {
            var result = ((2 * Math.PI * clicks.value2) / ((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2)))) * clicks.value1;
        }
        if (prop1.innerHTML == "Triangle") {
            var result = ((2 * Math.PI * clicks.value2) / (clicks.value2 * Math.sin(conv1 * conv2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Arc") {
            var result = ((2 * Math.PI * clicks.value2) / (conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Diameter") {
            var result = ((2 * Math.PI * clicks.value2) / 2) * clicks.value1;
        }
        if (prop1.innerHTML == "Radius") {
            var result = (((2 * Math.PI * clicks.value2)) / 1) * clicks.value1;
        }
    }
    //The set of functions for prop2 = Chord
    if (prop2.innerHTML == "Chord") {
        if (prop1.innerHTML == "Volume") {
            var result = ((2 * (Math.sin(0.5 * (conv1 * conv2)))) / (4 * Math.PI * Math.pow(clicks.value2, 2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Surface Area") {
            var result = ((2 * (Math.sin(0.5 * (conv1 * conv2)))) / (8 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Circumference") {
            var result = ((2 * (Math.sin(0.5 * (conv1 * conv2)))) / (2 * Math.PI)) * clicks.value1;
        }
        if (prop1.innerHTML == "Cross-Sectional Area") {
            var result = ((2 * (Math.sin(0.5 * (conv1 * conv2)))) / (2 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Chord") {
            var result = ((2 * (Math.sin(0.5 * (conv1 * conv2)))) / (2 * (Math.sin(0.5 * (conv1 * conv2))))) * clicks.value1;
        }
        if (prop1.innerHTML == "Sector") {
            var result = ((2 * (Math.sin(0.5 * (conv1 * conv2)))) / (clicks.value2 * conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Segment") {
            var result = ((2 * (Math.sin(0.5 * (conv1 * conv2)))) / ((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2)))) * clicks.value1;
        }
        if (prop1.innerHTML == "Triangle") {
            var result = ((2 * (Math.sin(0.5 * (conv1 * conv2)))) / (clicks.value2 * Math.sin(conv1 * conv2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Arc") {
            var result = ((2 * (Math.sin(0.5 * (conv1 * conv2)))) / (conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Diameter") {
            var result = ((2 * (Math.sin(0.5 * (conv1 * conv2)))) / 2) * clicks.value1;
        }
        if (prop1.innerHTML == "Radius") {
            var result = ((2 * (Math.sin(0.5 * (conv1 * conv2)))) / 1) * clicks.value1;
        }
    }
    //The set of functions for prop2 = Sector
    if (prop2.innerHTML == "Sector") {
        if (prop1.innerHTML == "Volume") {
            var result = ((clicks.value2 * conv1 * conv2) / (4 * Math.PI * Math.pow(clicks.value2, 2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Surface Area") {
            var result = ((clicks.value2 * conv1 * conv2) / (8 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Circumference") {
            var resul = ((clicks.value2 * conv1 * conv2) / (2 * Math.PI)) * clicks.value1;
        }
        if (prop1.innerHTML == "Cross-Sectional Area") {
            var rsult = ((clicks.value2 * conv1 * conv2) / (2 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Chord") {
            var result = ((clicks.value2 * conv1 * conv2) / (2 * (Math.sin(0.5 * (conv1 * conv2))))) * clicks.value1;
        }
        if (prop1.innerHTML == "Sector") {
            var result = ((clicks.value2 * conv1 * conv2) / (clicks.value2 * conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Segment") {
            var result = ((clicks.value2 * conv1 * conv2) / ((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2)))) * clicks.value1;
        }
        if (prop1.innerHTML == "Triangle") {
            var result = ((clicks.value2 * conv1 * conv2) / (clicks.value2 * Math.sin(conv1 * conv2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Arc") {
            var result = ((clicks.value2 * conv1 * conv2) / (conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Diameter") {
            var result = ((clicks.value2 * conv1 * conv2) / 2) * clicks.value1;
        }
        if (prop1.innerHTML == "Radius") {
            var result = ((clicks.value2 * conv1 * conv2) / 1) * clicks.value1;
        }
    }
    //The set of functions for prop2 = Segment
    if (prop2.innerHTML == "Segment") {
        if (prop1.innerHTML == "Volume") {
            var result = (((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2))) / (4 * Math.PI * Math.pow(clicks.value2, 2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Surface Area") {
            var result = (((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2))) / (8 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Circumference") {
            var result = (((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2))) / (2 * Math.PI)) * clicks.value1;
        }
        if (prop1.innerHTML == "Cross-Sectional Area") {
            var result = (((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2))) / (2 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Chord") {
            var result = (((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2))) / (2 * (Math.sin(0.5 * (conv1 * conv2))))) * clicks.value1;
        }
        if (prop1.innerHTML == "Sector") {
            var result = (((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2))) / (clicks.value2 * conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Segment") {
            var result = (((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2))) / ((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2)))) * clicks.value1;
        }
        if (prop1.innerHTML == "Triangle") {
            var result = (((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2))) / (clicks.value2 * Math.sin(conv1 * conv2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Arc") {
            var result = (((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2))) / (conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Diameter") {
            var result = (((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2))) / 2) * clicks.value1;
        }
        if (prop1.innerHTML == "Radius") {
            var result = (((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2))) / 1) * clicks.value1;
        }
    }
    //The set of functions for prop2 = Triangle
    if (prop2.innerHTML == "Triangle") {
        if (prop1.innerHTML == "Volume") {
            var result = ((clicks.value2 * Math.sin(conv1 * conv2)) / (4 * Math.PI * Math.pow(clicks.value2, 2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Surface Area") {
            var result = ((clicks.value2 * Math.sin(conv1 * conv2)) / (8 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Circumference") {
            var resul = ((clicks.value2 * Math.sin(conv1 * conv2)) / (2 * Math.PI)) * clicks.value1;
        }
        if (prop1.innerHTML == "Cross-Sectional Area") {
            var rsult = ((clicks.value2 * Math.sin(conv1 * conv2)) / (2 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Chord") {
            var result = ((clicks.value2 * Math.sin(conv1 * conv2)) / (2 * (Math.sin(0.5 * (conv1 * conv2))))) * clicks.value1;
        }
        if (prop1.innerHTML == "Sector") {
            var result = ((clicks.value2 * Math.sin(conv1 * conv2)) / (clicks.value2 * conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Segment") {
            var result = ((clicks.value2 * Math.sin(conv1 * conv2)) / ((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2)))) * clicks.value1;
        }
        if (prop1.innerHTML == "Triangle") {
            var result = ((clicks.value2 * Math.sin(conv1 * conv2)) / (clicks.value2 * Math.sin(conv1 * conv2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Arc") {
            var result = ((clicks.value2 * Math.sin(conv1 * conv2)) / (conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Diameter") {
            var result = ((clicks.value2 * Math.sin(conv1 * conv2)) / 2) * clicks.value1;
        }
        if (prop1.innerHTML == "Radius") {
            var result = ((clicks.value2 * Math.sin(conv1 * conv2)) / 1) * clicks.value1;
        }
    }
    //The set of functions for prop2 = Arc
    if (prop2.innerHTML == "Arc") {
        if (prop1.innerHTML == "Volume") {
            var result = ((conv1 * conv2) / (4 * Math.PI * Math.pow(clicks.value2, 2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Surface Area") {
            var result = ((conv1 * conv2) / (8 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Circumference") {
            var result = ((conv1 * conv2) / (2 * Math.PI)) * clicks.value1;
        }
        if (prop1.innerHTML == "Cross-Sectional Area") {
            var result = ((conv1 * conv2) / (2 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Chord") {
            var result = ((conv1 * conv2) / (2 * (Math.sin(0.5 * (conv1 * conv2))))) * clicks.value1;
        }
        if (prop1.innerHTML == "Sector") {
            var result = ((conv1 * conv2) / (clicks.value2 * conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Segment") {
            var result = ((conv1 * conv2) / ((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2)))) * clicks.value1;
        }
        if (prop1.innerHTML == "Triangle") {
            var result = ((conv1 * conv2) / (clicks.value2 * Math.sin(conv1 * conv2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Arc") {
            var result = ((conv1 * conv2) / (conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Diameter") {
            var result = ((conv1 * conv2) / 2) * clicks.value1;
        }
        if (prop1.innerHTML == "Radius") {
            var result = ((conv1 * conv2) / 1) * clicks.value1;
        }
    }
    //The set of functions for prop2 = Diameter
    if (prop2.innerHTML == "Diameter") {
        if (prop1.innerHTML == "Volume") {
            var result = (2 / (4 * Math.PI * Math.pow(clicks.value2, 2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Surface Area") {
            var result = (2 / (8 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Circumference") {
            var result = (2 / (2 * Math.PI)) * clicks.value1;
        }
        if (prop1.innerHTML == "Cross-Sectional Area") {
            var result = (2 / (2 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Chord") {
            var result = (2 / (2 * (Math.sin(0.5 * (conv1 * conv2))))) * clicks.value1;
        }
        if (prop1.innerHTML == "Sector") {
            var result = (2 / (clicks.value2 * conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Segment") {
            var result = (2 / ((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2)))) * clicks.value1;
        }
        if (prop1.innerHTML == "Triangle") {
            var result = (2 / (clicks.value2 * Math.sin(conv1 * conv2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Arc") {
            var result = (2 / (conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Diameter") {
            var result = (2 / 2) * clicks.value1;
        }
        if (prop1.innerHTML == "Radius") {
            var result = (2 / 1) * clicks.value1;
        }
    }
    //The set of functions for prop2 = Radius
    if (prop2.innerHTML == "Radius") {
        if (prop1.innerHTML == "Volume") {
            var result = (1 / (4 * Math.PI * Math.pow(clicks.value2, 2))) * clicks.value1;
        }
        if (prop1.innerHTML == "Surface Area") {
            var result = (1 / (8 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Circumference") {
            var result = (1 / (2 * Math.PI)) * clicks.value1;
        }
        if (prop1.innerHTML == "Cross-Sectional Area") {
            var result = (1 / (2 * Math.PI * clicks.value2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Chord") {
            var result = (1 / (2 * (Math.sin(0.5 * (conv1 * conv2))))) * clicks.value1;
        }
        if (prop1.innerHTML == "Sector") {
            var result = (1 / (clicks.value2 * conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Segment") {
            var result = (1 / ((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2)))) * clicks.value1;
        }
        if (prop1.innerHTML == "Triangle") {
            var result = (1 / ((clicks.value2 * conv1 * conv2) - (clicks.value2 * Math.sin(conv1 * conv2)))) * clicks.value1;
        }
        if (prop1.innerHTML == "Arc") {
            var result = (1 / (conv1 * conv2)) * clicks.value1;
        }
        if (prop1.innerHTML == "Diameter") {
            var result = (1 / 2) * clicks.value1;
        }
        if (prop1.innerHTML == "Radius") {
            var result = (1 / 1) * clicks.value1;
        }
    }



    /* 1 inch is equal to 2.54 centimeters,
       1 centimeter is therefore equal to the reciprocal of 2.54 inches
       1 foot is equal to 0.3048 meters,
       1 meter is therefore equal to the reciprocal of 0.3048 feet,
       1 foot is 12 inches,
       1 meter is 100 centimeters.
       And more parameters as we shall see for the yards, nautical miles, miles and kilometres. 
       Let the conversion begin \_(^_^)_/
       */


    if (unit1.innerHTML == unit2.innerHTML) /*Code for if both of the Measurement Units are the same.*/ {
        C.innerHTML = result + " " + unit1.innerHTML; //Note that unit1.innerHTML is equal to unit2.innerHTML
        E.innerHTML = clicks.value2 + " " + unit2.innerHTML; //Note that unit2.innerHTML is equal to unit1.innerHTML
    }




    if (unit1.innerHTML !== unit2.innerHTML) /*Code for if both of the Measurement Units are not the same.*/ {

        //Beginning of if rate of change is in cm and radius is not in cm but is also not empty.

        if (unit1.innerHTML == "cm" && unit2.innerHTML == "in." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 2.54) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 2.54) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "cm" && unit2.innerHTML == "m" && prop1.innerHTML != "" & prop2.innerHTML != "") {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 100) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 100) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "cm" && unit2.innerHTML == "ft." && prop1.innerHTML != "" & prop2.innerHTML != "") {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 30.48) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 30.48) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "cm" && unit2.innerHTML == "yd." && prop1.innerHTML != "" & prop2.innerHTML != "") {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 91.44) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 91.44) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "cm" && unit2.innerHTML == "mi." && prop1.innerHTML != "" & prop2.innerHTML != "") {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 160934.4) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 160934.4) + " " + unit2.innerHTML;
        }
        if (unit1.innerHTML == "cm" && unit2.innerHTML == "km" && prop1.innerHTML != "" & prop2.innerHTML != "") {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 100000) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 100000) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "cm" && unit2.innerHTML == "n mi." && prop1.innerHTML != "" & prop2.innerHTML != "") {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 298050508.8) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 298050508.8) + " " + unit2.innerHTML;
        }

        //Ending of if rate of change is in cm and radius is not in cm but is also not empty.


        //Beginning of if rate of change is in inches and radius is not in inches but is also not empty.

        if (unit1.innerHTML == "in." && unit2.innerHTML == "cm" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 2.54) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 2.54) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "in." && unit2.innerHTML == "m" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 0.0254) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 0.0254) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "in." && unit2.innerHTML == "ft." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 12) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 12) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "in." && unit2.innerHTML == "yd." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * (1 / 36)) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 36) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "in." && unit2.innerHTML == "mi." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 63360) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 63360) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "in." && unit2.innerHTML == "km" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 0.0000254) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 0.0000254) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "in." && unit2.innerHTML == "n mi." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 117342720) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 117342720) + " " + unit2.innerHTML;
        }

        //Ending of if rate of change is in inches and radius is not in inches but is also not empty.


        //Beginning of if rate of change is in m and radius is not in m but is also not empty.

        if (unit1.innerHTML == "m" && unit2.innerHTML == "cm" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 100) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 100) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "m" && unit2.innerHTML == "in." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 0.0254) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 0.0254) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "m" && unit2.innerHTML == "ft." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 0.3048) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 0.3048) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "m" && unit2.innerHTML == "yd." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 0.9144) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 0.9144) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "m" && unit2.innerHTML == "mi." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 1609.344) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 1609.344) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "m" && unit2.innerHTML == "km" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 1000) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 1000) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "m" && unit2.innerHTML == "n mi." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 2980505.088) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 2980505.088) + " " + unit2.innerHTML;
        }

        //Beginning of if rate of change is in m and radius is not in m but is also not empty.


        //Beginning of if rate of change is in ft and radius is not in ft but is also not empty.

        if (unit1.innerHTML == "ft." && unit2.innerHTML == "cm" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 30.48) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 30.48) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "ft." && unit2.innerHTML == "in." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 12) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 12) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "ft." && unit2.innerHTML == "m" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 0.3048) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 0.3048) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "ft." && unit2.innerHTML == "yd." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 3) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 3) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "ft." && unit2.innerHTML == "mi." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 5280) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 5280) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "ft." && unit2.innerHTML == "km" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 0.0003048) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 0.0003048) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "ft." && unit2.innerHTML == "n mi." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 9778560) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 9778560) + " " + unit2.innerHTML;
        }

        //Ending of if rate of change is in ft and radius is not in ft but is also not empty.


        //Beginning of if rate of change is in yd and radius is not in yd but is also not empty.
        if (unit1.innerHTML == "yd." && unit2.innerHTML == "cm" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 91.44) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 91.44) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "yd." && unit2.innerHTML == "in." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 36) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 36) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "yd." && unit2.innerHTML == "m" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 0.9144) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 0.9144) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "yd." && unit2.innerHTML == "ft." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 3) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 3) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "yd." && unit2.innerHTML == "mi." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 1760) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 1760) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "yd." && unit2.innerHTML == "km" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 0.0009144) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 0.0009144) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "yd." && unit2.innerHTML == "n mi." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 3259520) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 3259520) + " " + unit2.innerHTML;
        }

        //Ending of if rate of change is in yd and radius is not in yd but is also not empty.


        //Beginning of if rate of change is in mile and radius is not in mile but is also not empty.
        if (unit1.innerHTML == "mi." && unit2.innerHTML == "cm" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 160934.4) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 160934.4) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "mi." && unit2.innerHTML == "in." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 63360) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 63360) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "mi." && unit2.innerHTML == "m" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 1609.344) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 1609.344) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "mi." && unit2.innerHTML == "ft." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 5280) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 5280) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "mi." && unit2.innerHTML == "yd." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 1760) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 1760) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "mi." && unit2.innerHTML == "km" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 1.609344) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 1.609344) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "mi." && unit2.innerHTML == "n mi." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 1852) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 1852) + " " + unit2.innerHTML;
        }

        //Ending of if rate of change is in mile and radius is not in mile but is also not empty.


        //Beginning of if rate of change is in km and radius is not in km but is also not empty.

        if (unit1.innerHTML == "km" && unit2.innerHTML == "cm" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 100000) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 100000) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "km" && unit2.innerHTML == "in." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 0.0000254) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 0.0000254) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "km" && unit2.innerHTML == "m" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 1000) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 1000) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "km" && unit2.innerHTML == "ft." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 0.0003048) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 0.0003048) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "km" && unit2.innerHTML == "yd." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 0.0009144) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 / 0.0009144) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "km" && unit2.innerHTML == "mi." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result / 1.609344) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 1.609344) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "km" && unit2.innerHTML == "n mi." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 2980.505088) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 2980.505088) + " " + unit2.innerHTML;
        }

        //Ending of if rate of change is in km and radius is not in km but is also not empty.


        //Beginning of if rate of change is in n mile and radius is not in n mile but is also not empty.

        if (unit1.innerHTML == "n mi." && unit2.innerHTML == "cm" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 298050508.8) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 298050508.8) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "n mi." && unit2.innerHTML == "in." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 117342720) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 117342720) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "n mi." && unit2.innerHTML == "m" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 2980505.088) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 2980505.088) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "n mi." && unit2.innerHTML == "ft." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 9778560) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 9778560) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "n mi." && unit2.innerHTML == "yd." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 3259520) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 3259520) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "n mi." && unit2.innerHTML == "mi." && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 1852) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 1852) + " " + unit2.innerHTML;
        }

        if (unit1.innerHTML == "n mi." && unit2.innerHTML == "km" && prop1.innerHTML != "" & prop2.innerHTML != ""); {
            C.innerHTML = result + " " + unit1.innerHTML + " " + "or " + (result * 2980.505088) + " " + unit2.innerHTML;
            E.innerHTML = clicks.value2 + " " + unit1.innerHTML + " " + "or " + (clicks.value2 * 2980.505088) + " " + unit2.innerHTML;
        }

        //Ending of if rate of change is in n mile and radius is not in n mile but is also not empty.
    }
    /*Ending of code for if both of the Measurement Units are not the same.*/

    Ans.style.visibility = "visible"; //Makes the answer visible once done is pressed.

}
/*End of function divclicked*/