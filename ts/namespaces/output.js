"use strict";
var Utility;
(function (Utility) {
    let Taxes;
    (function (Taxes) {
        function calculaIva(price) {
            return (price * 0.21) + price;
        }
        Taxes.calculaIva = calculaIva;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
///<reference path="utility.ts"/>
let utils = Utility.Taxes;
console.log(utils.calculaIva(122));
