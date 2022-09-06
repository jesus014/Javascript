# Anotaciones basicas de typescript




comando que sirve para generar el archivo tsconfig.json

```
tsc --init
```

la configuracion que se esta utilizando en el documento tsconfig se puede mostrar en el mismo archivo que se encuentra en esta carpeta.


**los enum se pueden definir con numeros o cadenas de texto**

```typescript
enumRoles{  
  User='user',
  admin='admin',
  SuperAdmin='superadnmin'}

//console.log(Roles.SuperAdmin);

console.log(resultado ==superadnmin )
```

**los objetos se pueden definir de la siguiente manera.**

```typescript
constroles ={
    User:1,   
    Admin:2,  
    superAdmin:3};
```



**asercion de tipos:**

Se le asigna el tipo que tendra la variable.
