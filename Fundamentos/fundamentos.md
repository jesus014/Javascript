# Variables y constantes en Javascript

**Es una variable en la cual el valor puede cambiar y es la mejor forma de declarar una variable.**

let a = 10;

**forma antigua de crear variables.**

var b = 10;

**Es una constante,  la cual el valor No cambia.**
const c= 10;

**Siempre se debe de inicializar una variable.**

**Polyfill:**

es un codigo que proveee el funcionamiento de caracteristicas nuevas en codigo viejo.

**Formas de declarar varialbes en el archivo .js .**

```
//Formas de declarar unas variables.
let a = 10;
let b = 10;
let c = 10;

let x =a +b;

let d = 10, e = 20;


let f = 10,
    g = 20;
    h= f + g;


```

**Depuracion de proyecto en Javascript.**

Herramientas desarollo=> Fuentes  => Seleccionar la linea como punto de interrupcion.

Funciones de importaciones de js, van al final antes del body.

las formas de declarar las variables no debe de ser en "var""  ya que se puede utilizar bajo el compilador del navegador.

Funciones de alerta o mensajes basicos.

    En archivos js/alerts.js

# Datos primitivos en javascript:

Boolean => true o false.

Null => sin valor absoluto.

Undefined=> una variable pero no se a asignado un valor.

Number => valores.

String => una cadena de caracteres.

Symbol => Tipo de dato unico.

# Palabras reservadas.

Ciertas palabras las cuales no se pueden utilizar ya sea como variables o contexto de programacion.  => try catch. if else.

No se puede inicializar con un numero una variable.

# Arreglos.

Este es un ejemplo de un arreglo, se define por llaves cuadradas []

let videojuegos= ['mario' , 'jesus']

propiedades y funciones de los arreglos.

* //Arreglo principal =>    [ ]
* 
* metodo arreglo. length => se utiliza para saber el tamaño del arreglo.
* 
* [ 1 ] => se puede saber el valor de la posicion 1 (teniendo en cuenta 			  que empieza en 0).
* metodo .push('valor') => se puede agregar  a el elemento al arreglo.
* 
* metodo .unshift('valor')  =>  se puede agregar a el elemento en la posicion [0]  pasando el valor que se desea agregar.
* 
* metodo .pop(); =>  se puede eliminar el  ultimo elemento
* 
* metodo .indexof('valor') => se puede saber el index de un elemento  pasando el valor que queremos.

# Objetos literales.

Se tienen diferentes pares de valores.
