console.log('hellow');

interface Human {
    id: number;
    name: string;

}

//se extiende la clase  con la interface human
interface Employe extends Human {
    roles: string;
}

// se crea un generic 
interface Data<T> {
    addItem(newItem: T): void;
    
    getItems():void;
    
    getNames():string[];
}

//se hace generica la clase para que despues se le pase el modelo de trabajo de type
class DataCollection <T extends {id:number, name:string } > implements Data<T> {
    private items : T[]= [];

    addItem(newItem: T): void{
        this.items.push(newItem);
    }

    getItems(): void {
        return console.log(JSON.stringify(this.items));
    }

   getNames(): string[] {
    
    return this.items.map((item) => item.name );

   }
//
    getItemById(id: number): void {
        return console.log(this.items.find((item : T) => item.id === id));
    }
}


//se instancia la clase DataCollection pasandole el tipo empleado
const productCollection = new DataCollection<Employe>();

//se crea un objeto que sera pasado en en el metodo previamente instanciado
const newDatas= {
    id:1,
    name: 'Employ',
    roles:'ew'
}  

productCollection.addItem(newDatas);
productCollection.getItems();

const HumanCollection = new DataCollection<Human>();
const NewHuman={
    id:1,
    name: 'New Human',
}

HumanCollection.addItem(NewHuman);
HumanCollection.getItems();

console.log('hola');

HumanCollection.getNames();
HumanCollection.getItemById(1);
console.log(HumanCollection.getNames());
//
//const PersonCOllection= new people();
//const newData = {
//    id:1,
//    name: 'asendio',
//}
//
//PersonCOllection.addItem(newData);
//
//const newData2 = {
//    id:1,
//    name: 'asendio',
//}
//
//PersonCOllection.addItem(newData2);
//
//PersonCOllection.getItems();

//nuevo