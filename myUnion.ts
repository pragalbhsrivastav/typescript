let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string
    id: number
}

type Admin = {
    userName: string
    phone: number
}

let details: User | Admin = { name: 'abc', id: 1 }

details = { userName: ' abc', phone: 1 }


// tuple

// i want collection of string or number or boolean
// let user: string[] = ["abc", 1] // this line allows only string
// let user: number | string[] = [1, "abc"]
// this line gives us either all string or all number 


// here the prototype is 1st string then number and then boolean
let tupleUser: [string, number, boolean]
tupleUser = ['abc', 121, true]


let rgb: [number, number, number] 
rgb = [255,255,255]

type newUser = [string, number]
const newUser: newUser = ["abc@gmail.com", 122]

// here comes tuple demerits
newUser[1] = 123 // prototype is 1st string but we can assign the number using array methods 
// newUser.push(true)
