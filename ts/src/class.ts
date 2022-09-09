//class 
class Person{
    public zone = 'san jo';
    protected city ='mexico';
    private country = 'hidalgo';

     constructor(){}    

     greet():void {
        console.log("Hellow");
        
     }
}




class Employees extends Person{
    //atributos
    readonly id: number;
    name: string;
    departament:string;

    constructor( id: number, name: string, departament:string){ 
        super();
        this.id = id;
        this.name = name;
        this.departament = departament;

        this.showInfo();
    }



    showInfo():void {
        console.log(`${this.name} ${this.departament}  ${this.city}`)
    }


}

//creado una nueva instancia de la clase employee
const empleado= new Employees(1,'jesus', 'departament')
