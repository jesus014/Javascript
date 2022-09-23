//las clasees sirven para hacer moldes de los objetos

class Sale{

   protected amount? :number= 12 ;

    constructor(amount:number){
         this.amount = amount
    }
    getTotal(): number {
        return this.amount
    }

}
//uso de herencia
class SaleWithTax extends Sale{
    private tax:number;

    constructor(tax:number, amount:number){

        super(amount);
        this.tax = tax;
    }
    //se hace sobreescritura de codigo
    //se agrega "override" para verificar que si se esta sobre escribiendo un metodo de la clase padre
    override getTotal(): number {
        return  this.tax +  super.getTotal();
    }
    
}


let sale = new Sale(12);

//sale.amount=1;
sale.getTotal();

let saleWithTax= new SaleWithTax(12,3212);
const response= saleWithTax.getTotal();
console.log(response);

//creacion de typescript
type Beer={
    //atributos de forma de lectura, una vez asignado ya no se puede modificar
    readonly name: string,
    alcohol:number
    marca?: string
}

function show(beer:Beer){
    console.log(`info:${beer.name} ${beer.alcohol}`);
    
}
    
const myBeer:Beer={
        name:"dsad",
        alcohol:1234
    }

show(myBeer);

type Snack={
    nameSnack:string;
    price:number;
}


//se puede crear elementos basados en dos types
const combo: Beer & Snack= {
    name:'qwq',
    alcohol:12,
    nameSnack:'qw',
    price:12
}

console.log(combo);

//las interfaces son contratos, para que se comporten de cierta formatting
interface Drink{
    name:string;
}

interface alcoholDrink extends Drink{
    //pueden tener propiedades
    alcohol:number;

    //pueden tener metodos
    showInfo():string;

}
interface MixedDrink {
    ingredients :string[];
}

class Wine implements alcoholDrink{
    alcohol: number;
    name: string;
    /**
     *
     */
    constructor(name:string, alcohol:number) {
        this.name = name;
        this.alcohol= alcohol;
    }

    showInfo(): string {
       return `info:${this.name} ${this.alcohol}`
    }
    
}


class Coktail implements alcoholDrink,MixedDrink{
    ingredients: string[];
    alcohol: number;
    name: string;
    /**
     *
     */
    constructor(name:string, alcohol:number,ingredients:string[]) {
        this.name = name;
        this.alcohol=alcohol;
        this.ingredients =ingredients;
    }
    showInfo(): string {
        const ingredientsInfo = this.ingredients.reduce((acc,item) => acc+" "+item+", ","");
        return `info:${this.name} ${this.alcohol} ` +`ingredientes:${ingredientsInfo}`;
    }
    
}


const margarita= new Coktail("tequila",1232,['tequila','limon','sal']);
const malbec = new Wine('malbec',12)

const ad:alcoholDrink[]=[
    margarita,malbec
];

function showDrinks(drinks:alcoholDrink[]): void{
    drinks.forEach(e=>console.log(e.showInfo()));
}

showDrinks(ad);

//accessors


class Account {
    private amount: number;
    private commision: number;

    /**
     *
     */
    constructor(amount: number, commision: number) {
        this.amount = amount;
        this.commision = commision;
        
    }

    //accesor set
    set setAmout(amount: number){
        if(amount<0)
        amount=0;
        this.amount= amount;
    }

    //accesor getTotal()

    get Total(){
        return this.amount + this.commision;
    }

}

const account = new Account(12,32);

account.setAmout= 20;
console.log(account.Total);