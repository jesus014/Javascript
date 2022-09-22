
 interface genericInterface <T> {
    addItem(newItem: T): void;
    
    deleteItem(Id:number): void;

    getItems():void;
    
    getNames():string[];

}

export{
    genericInterface
}