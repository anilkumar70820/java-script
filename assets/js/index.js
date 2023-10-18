// ========promt=========
//  let password;
//     do(password = prompt('please enter your password')
//     )
//     while(password !== 'anil kumar')

// =============Promt end===============
// =======Right Click function Off=============

document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

// =============Right Click Function off================

// ==============inspect all function disabled===============
document.onkeydown = (e) => {
    // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
    if (
        event.keyCode === 123 ||
        // ctrlShiftKey(e, 'I') ||
        ctrlShiftKey(e, 'J') ||
        ctrlShiftKey(e, 'C') ||
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    )
        return false;
};
// ==============inspect all function disabled End===============

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
    e += "<br/  >The number is " + f;
    f++;
}
while (f < 10);
document.write(e)
// do while loop end

// ========this keyword========
const user = {
    name: "anil kumar",
    yearOfBirth: 2000,
    calcAge: function () {
        const currentYear = (new Date()).getFullYear();
        return currentYear - this.yearOfBirth;
    }
}
console.log(user.calcAge())
// =========this keyword end==========

// ===========Promise==========
const p = new Promise((first, second) => {
    // Do some async task


    setTimeout(() => {
        if (100 < 500) {
            first('Successful login');
        } else {
            second('login failed');
        }
    }, 2000)
})
p.then((res) => {
    console.log(res)
})
    .catch((err) => {
        console.log(err)
    })


// =========Promise End===========

// =============Constructor==========
function BioData(name, year, id) {
    this.name = name;
    this.year = year;
    this.id = id;
}
// console.log(BioData)
const BioData1 = new BioData('anil kumar', 2000, 201);
const BioData2 = new BioData('ujjwal kaushik', 1999, 202);
const BioData3 = new BioData('ankit sharma', 2002, 200)
console.log(BioData1)
console.log(BioData2)
console.log(BioData3)

BioData.prototype.age = function () {
    return (new Date()).getFullYear() - this.year;
}
console.log(BioData1.age())
console.log(BioData2.age())
console.log(BioData3.age())

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
// Using a constructor
const car1 = new Car('Toyota', 'Prius', 2016);
const car2 = new Car('Hyundai', 'Sonata', 2018);
console.log(car1)
console.log(car2)
// Adding method to the constructor prototype
Car.prototype.age = function () {
    return (new Date()).getFullYear() - this.year;
}
car1.age();
console.log(car1.age())
console.log(car2.age())
// ==============Constructor End==================

// ==========array prototype reduce=========
const red = [1, 2, 3, 4, 5]
const red1 = red.reduce((a, b, c, d) => a + b + c + d)
console.log(red1)


// ==========array prototype reduce end=========



// ========================Date 13/10/23===========================

// function abc(n) {
//     value1 = n[0]
//     value2 = n[1]
//     let first = n[0] * n[1]
//     for (let g = 1; g < n.length - 1; g++) {
//         let sum = n[g] * n[g +1]
//         if (sum > first) {
//             first = sum
//             value1 = n[g]
//             value2 = n[g + 1]
//         }
//     }
//     console.log(value1,value2,first)
// }
// abc([3, 4, 5, 6, -7, -10, 5]);
function abc(n) {
    value1 = n[0]
    value2 = n[1]
    let first = n[0] / n[1]
    for (let g = 1; g < n.length - 1; g++) {
        let sum = n[g] / n[g + 1]
        if (sum > first) {
            first = sum
            value1 = n[g]
            value2 = n[g + 1]
        }
        console.log(sum)
    }
}
abc([3, 4, 5, 6, -7, -10, 5]);
// console.log(abc)



// =================================================================================
// =====================date 14/10/23===================

// ==========map in array ==============
const power = [2, 3, 4, 5, 6,]
const result = power.map((x) => x ** 3)
// console.log(result)
document.getElementById("cube").innerHTML = result

// ==========map in array end ==============
// ==========find cube of a number===========
const form = document.querySelector('form');
const answer = document.getElementById('result')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const sq = parseInt(document.getElementById('square').value)
    const ans = Math.pow(sq, 3)
    answer.innerHTML = ans
})
// ==========find cube of a number end===========

// ================16/10/23======================

function abc3(start, end) {
    for (let i = start; i <= end; i++) {
        const cube = i * i * i;
        console.log(i + "*" + i + "*" + i + "=" + cube);
    }
}

abc3(3, 6);

// ================16/10/23======================
// ================17/10/23======================

function cube(x, y) {
    let r = 1
    for (let i = 1; i <= y; i++) {
        let v = r * x;
        v = r
        console.log(r)
    }   
}
cube(3, 5)
// ================17/10/23======================
// ======================================================