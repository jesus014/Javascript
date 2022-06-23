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

# Funciones.

las funciones es centralizar la logica  que se puede estar reutilizando a lo largo del proyecto.

//funcion anonima.

```
const saludar2 = function(nombre){
    console.log(arguments); 
   console.log('hola' + nombre);
}
```

si una funcion no tiene un retorno explicito se obtiene un undefine.

# Pasar informacion por valor o por referencia.

cuando asignamos valores primitivos (Bolean, null, undefined, number, string, symbol) el valor asignado es una copia del valor que estamos asignando:

Cuando asignamos valores *primitivos* ([Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean), [Null](https://developer.mozilla.org/en-US/docs/Glossary/Null), [Undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined), [Number](https://developer.mozilla.org/en-US/docs/Glossary/Number), [String](https://developer.mozilla.org/en-US/docs/Glossary/String) y [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)),  **el valor asignado es una copia del valor que estamos asignando** :

1. let a ='hola';
2. let b = a;// asignamos valor de `a` a `b`.
3. a +='!';// cambiamos valor de `a` añadiendo ! al final
4. console.log(a);// hola!
5. console.log(b);// hola

Pero cuando asignamos valores *NO primitivos* o complejos ([Object](https://developer.mozilla.org/en-US/docs/Glossary/Object), [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array) y [Function](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function)), JavaScript copia  **“la referencia”** , lo que implica que  **no se copia el valor en sí, si no una referencia a través de la cual accedemos al valor original** ."

1. const a =[1,2,3];
2. const b = a;
3. a.push(4);
4. console.log(a);// [ 1, 2, 3, 4 ]
5. console.log(b);// [ 1, 2, 3, 4 ]

# If y else

Se utiliza para hacer condiciones de seleccion. si es cierta cosa que pasa.

```
let a =9;

if( a >= 10)
	{ //undifined null, una asignacion.  
		console.log('A es mayor a 10')
	}else{
		console.log('A es menor a 10')
	}
```

# Operadores boleanos.

son operadores que realizan comparaciones arrojando un valor true o false.

El operador AND asocia dos términos o frases y busca un registro coincidente si ambos términos o frases existen en un registro. Es equivalente a la intersección de dos conjuntos. Puede utilizar el símbolo && en lugar de la palabra AND   ( &&).(los valores de la evaluacion deben de ser positivos para que se pueda realizar cierta accion)

```
El valor es positivo ya que ambas condiciones son iguales. 
console.log(true && true);
console.log(true && !false);
```

El operador OR asocia dos términos o frases y busca un registro coincidente si uno de los términos o frases existe en un registro. Es equivalente a la unión de dos conjuntos. Puede utilizar el símbolo || en lugar de la palabra OR .  (con un valor que en la evaluacion sea true (verdadero)  se realiza la accion.

# Operadores ternarios.

Se puede definir como un if simplificado.

tieneMembresia recibe un miembro (number)  el cual

```
const tieneMembresia =(miembro)=>miembro ? '2dolares':'10 dolares';
```

elMayor2 recibe datos a,b(number)  el cual es evaluado si a es mayoa a b. retornas a en caso de que no retorna b

```
const elMayor2=(a,b)=> (a>b)?a:b;

console.log(elMayor2(20,14));
```

```
const tieneMembresia =(miembro)=> miembro ? '2dolares':'10 dolares';
console.log(tieneMembresia(true));

```

# Ciclos:

Case

```
switch(dia){
    case 0:
        console.log("Domingo");
        break;
    default:
        console.log("no es lunes, martes o domingo");
}
```

Do while.

```
do{
    console.log(personajes[j]);
    j++;
}while( personajes[j]);
```

while.

```
//la condicion debe de ser verdadera. 
while (i < personajes.length) {
    console.log(personajes[i]);
    i++;
}
```

for.

```
for(let i=0; i < personajes.length; i++) {

    console.log(personajes[i]);
  
}
```
