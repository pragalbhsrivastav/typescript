// function addTwo(num : number) {
//     // return num +2 // if i will remove this line
//     return "hello" // an add this one then it is not giving me any error  it should give me error 
// }

// to solve the above problem we need to mention what it should return error 
function addTwo(num : number): number {
    return num +2 
    // return "hello" // now getting error 
}

function getUpper(val: string){
    return val.toUpperCase()
}

const login = (name: string, password: string, isPaid: boolean = false ) => {
    return name + password + isPaid
}


function getValue(val: number): boolean{
    
    if(val> 5){
        return true
    }

    // return "ok" // i need to return only boolean value
    return true
}

// here i am confused i i need to set the type of return value
// so i have one solution not sure is it correct way or not but for now this is the solution

function getValue1(val: number): boolean | string{
    
    if(val> 5){
        return true
    }

    return "ok"
}

getValue(10)
getValue1(10)

addTwo(5)
getUpper("Adutu")
login('Aditu', 'cutu')




const heros = ['alucard', 'kagura', 'aamon']

heros.map((hero => { // here we dont need to write like this hero : string because ts is smart enough to find the context 
    return `hero is ${hero}`
}))

// but we can define the type of return value

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg)
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}

// never type represents value which are never observed. in return type this means that functions throws an exception or terminates execution of the program.
// new also appears when typescript etermines there's noting left in a union dont know what this lines now 🤨
 
// object type
function createCourse():{name: string, price :number}{
    return {name: 'Reactjs', price: 399}
}


createCourse()



// type alias 

type User = {
    name: string,
    email: string;
    isActive: boolean
}

function createUser(user: User): User{
    return user
}

createUser({name: 'Adutu', email: 'adutu@gmail.com', isActive: true})

type User1 = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    cardDetails?: number // optional
}

let myUser: User1 = {
    _id: "1234",
    name: 'h',
    email: "sdadas",
    isActive: false
}

myUser.email = "abc@gmail.com"
// myUser._id = '12424' i cannot change this beause this is marked as readonly


// we can combine two or more type together this is not good practice but if we want we can do this  
type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardetails = cardNumber & cardDate & {
    CVV: number
}


export {}