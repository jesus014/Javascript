"use strict";
var Utility;
(function (Utility) {
    var Taxes;
    (function (Taxes) {
        function calculaIva(price) {
            return (price * 0.21) + price;
        }
        Taxes.calculaIva = calculaIva;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
