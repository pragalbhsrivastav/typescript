"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let greetings = "Hello Adutu";
greetings.toLowerCase();
console.log(greetings);
// number
let userId = 334455;
//boolean
let isLoggeIn = false;
//above are not good practice because we just written variabe and assigning value then whats the point to write type ??
// type interferance
// number
let userId1 = 334455;
console.log('userId1: ', userId1);
// any 
// let hero; // here its type is any which is problem so we need to add type here
let hero;
function getHero() {
    return "Alucard";
}
hero = getHero();
