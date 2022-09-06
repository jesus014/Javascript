//los enum se pueden definir con numeros o cadenas de texto

enum Roles{
    User='user',
    admin='admin',
    SuperAdmin=''
}

//console.log(Roles.SuperAdmin);

//objets

const roles = {
    User:1,
    Admin:2,
    superAdmin:3
};

console.log(roles.User);