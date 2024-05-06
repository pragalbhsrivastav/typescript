interface User {
    readonly dbId: number
    email: string,
    userId: number,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponName: string, value: number): number
}

const abc: User = {
    dbId: 2,
    email: 'abc@abccom',
    userId: 124,
    startTrail: () => { return "trail started" },
    getCoupon: (name: 'abc', val: 20) => { return 10 },
    value1: ""
}

console.log(abc)
// abc.dbId = 1231 its readyonly we cannot change it 

// we can reopen it and add values in it
interface User {
    value1: string
}

// interface have inhertance property
interface Admin extends User {
    role: 'admin' | "user" | "manager"
}




export {}