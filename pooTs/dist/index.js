//las clasees sirven para hacer moldes de los objetos
class Sale {
    constructor(amount) {
        this.amount = 12;
        this.amount = amount;
    }
    getTotal() {
        return this.amount;
    }
}
//uso de herencia
class SaleWithTax extends Sale {
    constructor(tax, amount) {
        super(amount);
        this.tax = tax;
    }
    //se hace sobreescritura de codigo
    //se agrega "override" para verificar que si se esta sobre escribiendo un metodo de la clase padre
    getTotal() {
        return this.tax + super.getTotal();
    }
}
let sale = new Sale(12);
//sale.amount=1;
sale.getTotal();
let saleWithTax = new SaleWithTax(12, 3212);
const response = saleWithTax.getTotal();
console.log(response);
function show(beer) {
    console.log(`info:${beer.name} ${beer.alcohol}`);
}
const myBeer = {
    name: "dsad",
    alcohol: 1234
};
show(myBeer);
//se puede crear elementos basados en dos types
const combo = {
    name: 'qwq',
    alcohol: 12,
    nameSnack: 'qw',
    price: 12
};
console.log(combo);
class Wine {
    /**
     *
     */
    constructor(name, alcohol) {
        this.name = name;
        this.alcohol = alcohol;
    }
    showInfo() {
        return `info:${this.name} ${this.alcohol}`;
    }
}
class Coktail {
    /**
     *
     */
    constructor(name, alcohol, ingredients) {
        this.name = name;
        this.alcohol = alcohol;
        this.ingredients = ingredients;
    }
    showInfo() {
        const ingredientsInfo = this.ingredients.reduce((acc, item) => acc + " " + item + ", ", "");
        return `info:${this.name} ${this.alcohol} ` + `ingredientes:${ingredientsInfo}`;
    }
}
const margarita = new Coktail("tequila", 1232, ['tequila', 'limon', 'sal']);
const malbec = new Wine('malbec', 12);
const ad = [
    margarita, malbec
];
function showDrinks(drinks) {
    drinks.forEach(e => console.log(e.showInfo()));
}
showDrinks(ad);
//accessors
class Account {
    /**
     *
     */
    constructor(amount, commision) {
        this.amount = amount;
        this.commision = commision;
    }
    //accesor set
    set setAmout(amount) {
        if (amount < 0)
            amount = 0;
        this.amount = amount;
    }
    //accesor getTotal()
    get Total() {
        return this.amount + this.commision;
    }
}
const account = new Account(12, 32);
account.setAmout = 20;
console.log(account.Total);
