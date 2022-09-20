namespace Utility{

    export namespace Taxes{
        export function calculaIva(price:number):number{
            return (price *0.21) +price;
        }

        export function calculeteIva(price:number):number{
            return (price *.03) +price;
        }
    }

    
}