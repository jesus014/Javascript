"use strict";
//class 
class Person {
    constructor() {
        this.zone = 'san jo';
        this.city = 'mexico';
        this.country = 'hidalgo';
    }
    greet() {
        console.log("Hellow");
    }
}
class Employees extends Person {
    constructor(id, name, departament) {
        super();
        this.id = id;
        this.name = name;
        this.departament = departament;
        this.showInfo();
    }
    showInfo() {
        console.log(`${this.name} ${this.departament}  ${this.city}`);
    }
}
//creado una nueva instancia de la clase employee
const empleado = new Employees(1, 'jesus', 'departament');
