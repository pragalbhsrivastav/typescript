// Enums in TypeScript provide a way to define a set of named constants, making the code more readable and maintainable by giving meaningful names to numeric values. They can be especially useful when working with a fixed set of related values that have a logical ordering or relationship.

const enum seatChoice {
    AISLE = 'aisle', // we can assign string also 
    MIDDLE = 22, 
    WINDOW, // this will get 23 automatically order is assigned in increasing order but we can also assign any value if we want
    FOurth // this will get 23
}

const hcSeat = seatChoice.AISLE