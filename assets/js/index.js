// for loop
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}
document.write(text + "<br>")


// 2nd example

const car = ["BMW", "Volvo", "Saab", "Ford"];
let z = 2;
let len = car.length;
let mycar = "";

for (; z < len; z++) {
    mycar += car[z] + "<br>";
}
document.write(mycar)

// for loop end



// while loop
document.write("<br>")
let number = "";
let x = 0;
while (x < 10) {
    number += "The number is " + x + "<br>";
    x++;

}
document.write(number)

// while loop end



// do while loop 
// first example
document.write("<br>")
let c = "";
let d = 0;
do {
    c += d + "<br>";
    d++;
}
while (d < -1);
document.write(c)


// second example
let e = ""
let f = 0;

do {
    e += "<br>The number is " + f;
    f++;
}
while (f < 10);
document.write(e)
// do while loop end