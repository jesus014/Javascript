# Anotaciones basicas de typescript

comando que sirve para generar el archivo tsconfig.json

```
tsc --init
```

https://www.npmjs.com/package/nodemon

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

| Interface                                  | clases                                                            |
| ------------------------------------------ | ----------------------------------------------------------------- |
| Solo existen en tiempos de compilacion     | existen en timpo de compilacion y durante el tiempo de ejecucion. |
| solo se usan para la verificacion de tipos | se puede inicializar propiedades e implementar metodos            |
|                                            | crear instancias de dichas clases                                 |

## ***Que es una interface?***

Es un contrato de codigo,  se define la forma de la data, con la que se va a trabajar.

Se pueden definir propiedades y metodos.

```typescript
interface Book{
    id: number;
    title: string;
    author: string;
    coAutor?: string;  
    //se puede declarar metodos
    isLoan?:(id:number) => void;
}

```


```typescript
//usando extends se reutiliza una base. 

interface Persons{
    id: number,
    name: string
}

interface Employee extends Persons{
    departament: string;

}
```



## *Que es una clase?*

Sirven para organizar el codigo.

sirven para encapsulamiento, sin dejar de ser un objeto

teniendo adentro del cuerpo atributos y metodos

toda clase tiene un metodo constructor => que cuando se ejecuta es lo primero que se ejecuta

Access Control Keywords

public => se tiene el acceso en toda la solucion

private => se tiene acceso en un punto especifico de la solucion

protected => se puede acceder a ella pero no se puede editar

```typescript
//class 
class Person{
    public zone = 'san jo';
    protected city ='mexico';
    private country = 'hidalgo';

     constructor(){}  

     greet():void {
        console.log("Hellow");
  
     }
}

class Employees extends Person{
    //atributos
    readonly id: number;
    name: string;
    departament:string;

    constructor( id: number, name: string, departament:string){ 
        super();
        this.id = id;
        this.name = name;
        this.departament = departament;

        this.showInfo();
    }



    showInfo():void {
        console.log(`${this.name} ${this.departament}  ${this.city}`)
    }


}

//creado una nueva instancia de la clase employee
const empleado= new Employees(1,'jesus', 'departament')
```
