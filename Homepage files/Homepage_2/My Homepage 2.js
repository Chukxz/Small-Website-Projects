var a = "Haha! So you thought that I was gonna talk about stars again huh, nope not gonna do that you know, yep that's right.";
document.write(a);
//let's include this.
var myString1 = "I am learning ";
var myString2 = "Javascript with Sololearn" + "<br />";
document.write(myString1 + myString2);
//Check whether number is even or odd.
var number = prompt("Enter Number");
var EvenOrOdd = (number % 2 === 0) ? "Even" + "<br />" : "Odd" + "<br />";
document.write(EvenOrOdd);
if (number % 2 === 0) {
    document.write("This is an even number.(" + "<br />");
} else {
    document.write("This is an odd number" + "<br />");
}
var course = prompt("Enter course code");
if (course === "A") document.write("<h1>Welcome to HTML Tutorial</h1>" + "<br />");
else if (course === "B") document.write("<h1>Welcome to CSS Tutorial</h1>" + "<br />");
else if (course === "C") document.write("<h1>Welcome to JavaScript Tutorial</h1>" + "<br />");
else document.write("Please select a course code, next time" + "<br />");
document.write(a + "<br />");
document.write(a + "<br />");
document.write(a + "<br />");
document.write(a + "<br />");
document.write(a + "<br />");
document.write(a + "<br />");
document.write(a + "<br />");
document.write(a + "<br />");
for (p = 1; p <= 10; p++) {
    document.write(p + "<br />");
}
var t = 12;
while (t <= 35) {
    document.write(t + "<br />");
    // We can say t+=3 or t=t+3, they all mean the same because an increment in t by 3 is equivalent to t plus 3.
    t = t + 3;
}
var day = 5;
switch (day) {
    case 1:
        document.write("<h2>It's a wonderful Monday isn't it?</h2>");
        break;
    case 2:
        document.write("<h2>What a nice Tuesday.</h2>");
        break;
    case 3:
        document.write("<h2>Oh! Such a lovely Wednesday.</h2>");
        break;
    case 4:
        document.write("<h2>A fine Thursday.</h2>");
        break;
    case 5:
        document.write("<h2>Get ready for the weekend lol.</h2>");
        break;
    case 6:
        document.write("<h2>Some don't go to work on this day</h2>");
        break;
    case 7:
        document.write("<h2>Buckle up for the coming week!");
        break;
    default:
        document.write("<h2>You didn't select any day?</h2>");
}