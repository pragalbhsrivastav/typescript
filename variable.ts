let greetings: string = "Hello Adutu";

greetings.toLowerCase()
console.log(greetings)


// number
let userId: number = 334455


//boolean
let isLoggeIn: boolean = false

//above are not good practice because we just written variabe and assigning value then whats the point to write type ??

// type interferance

// number
let userId1 = 334455
console.log('userId1: ', userId1);
// whe n we hover userId1 then ts is smart enough to find what its type 

export {}



// any 
// let hero; // here its type is any which is problem so we need to add type here
let hero: string; 

function getHero(){
    return "Alucard"
}

hero = getHero()