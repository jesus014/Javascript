// variables
 const PI=3.1416;

//interface

interface Person{
    id: number;
    name: string;
}

//function

export function generateRandomNumber(): number { 

    return Math.floor(Math.random()*100);
}


export {
    PI,Person
}