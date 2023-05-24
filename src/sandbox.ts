// Declaring variables explicity

let character: string = "mario"
let age: number;
let isLoggedIn: boolean;

// age = "luigi"
age = 30;

// isLoggedIn = 34
isLoggedIn = true;

// arrays
// In the future this can only be an array of strings
let ninjas: string[] = [];

ninjas.push('ryu');
ninjas.push('chun-li')
console.log(ninjas)

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push("Hello")
mixed.push(false)
mixed.push(20)

// we don't use parenthesis when declaring the type of a normal variable
// we only do that when declaring the type for arrays

let uid:string|number
uid = 123
uid = "122"

// objects
let ninjaOne: object;
ninjaOne = {name: "yoshi", age: 30};

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
};

ninjaTwo = { name: "Ken", age: 20, beltColour: "black"}

// Using the any types where the type of a variable can later change
let marks: any = 23;

marks = 25
console.log(marks)
marks = "Hello Sandra"
console.log(marks)

let mixedAny: any[] = [];

mixedAny.push(5);
mixedAny.push('mario');
mixedAny.push(false);
console.log(mixedAny);

let ninjaAny: { name: any, age: any };

ninjaAny = { name: 'yoshi', age: 25 };
console.log(ninjaAny);

ninjaAny = { name: 25, age: 'yoshi' };
console.log(ninjaAny);

// Note: This can easily lead to errors in the future
// Using Any rips out all the benefits for using typescript

