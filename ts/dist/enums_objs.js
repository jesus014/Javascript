"use strict";
//los enum se pueden definir con numeros o cadenas de texto
var Roles;
(function (Roles) {
    Roles["User"] = "user";
    Roles["admin"] = "admin";
    Roles["SuperAdmin"] = "";
})(Roles || (Roles = {}));
//console.log(Roles.SuperAdmin);
//objets
const roles = {
    User: 1,
    Admin: 2,
    superAdmin: 3
};
console.log(roles.User);
