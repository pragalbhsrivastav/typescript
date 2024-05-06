"use strict";
// function addTwo(num : number) {
//     // return num +2 // if i will remove this line
//     return "hello" // an add this one then it is not giving me any error  it should give me error 
// }
Object.defineProperty(exports, "__esModule", { value: true });
// to solve the above problem we need to mention what it should return error 
function addTwo(num) {
    return num + 2;
    // return "hello" // now getting error 
}
function getUpper(val) {
    return val.toUpperCase();
}
const login = (name, password, isPaid = false) => {
    return name + password + isPaid;
};
function getValue(val) {
    if (val > 5) {
        return true;
    }
    // return "ok" // i need to return only boolean value
    return true;
}
// here i am confused i i need to set the type of return value
// so i have one solution not sure is it correct way or not but for now this is the solution
function getValue1(val) {
    if (val > 5) {
        return true;
    }
    return "ok";
}
getValue(10);
getValue1(10);
addTwo(5);
getUpper("Adutu");
login('Aditu', 'cutu');
const heros = ['alucard', 'kagura', 'aamon'];
heros.map((hero => {
    return `hero is ${hero}`;
}));
// but we can define the type of return value
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
// never type represents value which are never observed. in return type this means that functions throws an exception or terminates execution of the program.
// new also appears when typescript etermines there's noting left in a union dont know what this lines now 🤨
// object type
function createCourse() {
    return { name: 'Reactjs', price: 399 };
}
createCourse();
function createUser(user) {
    return user;
}
createUser({ name: 'Adutu', email: 'adutu@gmail.com', isActive: true });
let myUser = {
    _id: "1234",
    name: 'h',
    email: "sdadas",
    isActive: false
};
myUser.email = "abc@gmail.com";
