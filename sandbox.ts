let character: string = "mario"
let age: number;
let isLoggedIn: boolean;

// age = "luigi"
age = 30;

// isLoggedIn = 34
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

ninjas.push('ryu');
ninjas.push('chun-li')
console.log(ninjas)

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push("Hello")
mixed.push(false)
mixed.push(20)

let uid:string|number

// objects
let ninjaOne: object;
ninjaOne = {name: "yoshi", age: 30};

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
};

ninjaTwo = { name: "Ken", age: 20, beltColour: "black"}



