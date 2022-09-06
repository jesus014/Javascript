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

**Compilacion de programas:**

se puede compilar de esta manera teniendo en cuenta que el archivo de configuracion este creado y configurado de manera correcta

```
tsc && node dist/functions.js
```


**asercion de tipos:**

Se le asigna el tipo que tendra la variable.

## Funciones

Funcion simple que recibe un string.

```typescript
//funciones
function greet(name: string){
    console.log(`Greetings!, ${name.toUpperCase()}`);
}

//se llama la funcion y se declara el parametro.
greet('jesus');

```

Funcion anonima:

```typescript
const ObtenerNombre =(name:string)=>{
    console.log(`Greetings!, ${name.toUpperCase()}`);
}

ObtenerNombre('yisus');
```

Funcion con valor predeterminado.

    se declara un numero por default para que no sea necesario pasar el valor al momento de llamar la peticion.

    se define el valor de retorno ":number"

```typescript
function getNumber(numero:number=212):number{
    return Math.floor(Math.random()* numero);
}

console.log(getNumber());
```

Funcion la cual recibe un arreglo y se puede definir si es opcional el parametro con el signo "?".
Se puede difinir el tipo de parametro.

```typescript
//se pueden pasar hasta un objeto por la funcion.
function printPosition(position:{lat:number, lon?:number|string}) :void {
    console.log(`la posicion de latitud es !, ${position.lat} y  longitud es ${position.lon}`);  
}

printPosition({lat:32,lon:'32'}) ;
```
