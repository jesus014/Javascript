
import{genericInterface} from './genericInterface'


class EstudianteClass <T extends {Id:number, name:string} > implements genericInterface<T>{

    addItem(newItem: T): void {
        console.log('new Item',{newItem})
    }
    deleteItem(Id:number): void {
        console.log(Id);
    }
    getItems(): void {
        throw new Error('Method not implemented.')
    }
    getNames(): string[] {
        throw new Error('Method not implemented.')
    }

}



export{
    EstudianteClass
}