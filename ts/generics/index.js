"use strict";
console.log('hellow');
//se hace generica la clase para que despues se le pase el modelo de trabajo de type
class DataCollection {
    constructor() {
        this.items = [];
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        return console.log(JSON.stringify(this.items));
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
    //
    getItemById(id) {
        return console.log(this.items.find((item) => item.id === id));
    }
}
//se instancia la clase DataCollection pasandole el tipo empleado
const productCollection = new DataCollection();
//se crea un objeto que sera pasado en en el metodo previamente instanciado
const newDatas = {
    id: 1,
    name: 'Employ',
    roles: 'ew'
};
productCollection.addItem(newDatas);
productCollection.getItems();
const HumanCollection = new DataCollection();
const NewHuman = {
    id: 1,
    name: 'New Human',
};
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
