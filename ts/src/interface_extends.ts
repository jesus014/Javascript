//interface
//usando extends se reutiliza una base. 

interface Persons{
    id: number,
    name: string
}

interface Employee extends Persons{
    departament: string;

}

const employee: Employee= {
    id:21,
    name: "jhon",
    departament: "ass"
}


interface Customer extends  Persons{
    country: string;
}




//emplementacion de una interface en una clase.
interface Animal{
    name: string;
    getDogs:()=>void;
    getCats:()=>void;
}


class Zoo implements  Animal{
    name='aasasas';
    getCats(): void{

    }

    getDogs(): void{

    }
}