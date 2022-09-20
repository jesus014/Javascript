var Utility;
(function (Utility) {
    let Taxes;
    (function (Taxes) {
        function calculaIva(price) {
            return (price * 0.21) + price;
        }
        Taxes.calculaIva = calculaIva;
        function calculeteIva(price) {
            return (price * .03) + price;
        }
        Taxes.calculeteIva = calculeteIva;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
/// <reference path="utility.ts"/>
let utils = Utility.Taxes;
console.log(utils.calculaIva(122));
