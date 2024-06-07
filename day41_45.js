"use strict";
//// Day 41
Object.defineProperty(exports, "__esModule", { value: true });
exports.personclass = exports.names = void 0;
/// Question # 121
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
////Question # 122
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}
/// Question # 123
function loguntilVovel(str) {
    const vovels = "AEIOU";
    for (const chart of str) {
        if (vovels.includes(chart)) {
            console.log(`First Vowels Sound: ${chart}`);
            break;
        }
        console.log(chart);
    }
}
//// DAy 42
//// Question # 124
// Defines an object with a name property and a method to return its name
const persons = {
    name: "alice",
    getname: function () {
        return this.name;
    }
};
console.log(persons.getname);
/// Question # 125
const rectangle = {
    weight: 5,
    height: 4,
    areaofreactangle: function () {
        return this.height * this.weight;
    }
};
console.log(rectangle.areaofreactangle);
/// Question # 126
const myobject = {
    property: "valve",
    outermethod: function () {
        console.log(this.property);
        const innermethod = () => {
            console.log(this.property);
        };
        innermethod();
    },
};
myobject.outermethod();
//// Day 43
//// Question # 127
const tradionalfunction = function (a, b) {
    return a + b;
};
const arrowfunction = (a, b) => a + b;
console.log(tradionalfunction(2, 2));
console.log(arrowfunction(4, 4));
//// Question # 128
const arrowFunction = (...numbers) => numbers.reduce((total, number) => total * number, 1);
console.log(arrowFunction(2, 3, 4));
////Question # 129
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: () => {
        // console.log("Arrow function:", this.value); // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
    },
};
traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsArrow.arrowFunction(); // 
///// DAy 44
////// Question # 130
function names(para) {
    return para * para;
}
exports.names = names;
///////// Question # 131
class personclass {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`My name is : ${this.name}`);
    }
}
exports.personclass = personclass;
////////// Question # 132
class claculator {
}
exports.default = claculator;
///// Day 45
///////// Question # 133
const people = {
    name: 'Aliece',
    age: 45,
    city: 'Dubai',
};
const jsonstring = JSON.stringify(people);
console.log(jsonstring);
//// Question # 134
const jsonstring2 = '{"name":"Alice","age":30,"city":"Wonderland"}';
const person2 = JSON.parse(jsonstring2);
console.log(person2);
//// Question # 135
const person3 = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
};
// Converts the object into a JSON string with indentation
const jsonString3 = JSON.stringify(person3, null, 2); // The '2' specifies the number of spaces to use as white space
console.log(jsonString3);
