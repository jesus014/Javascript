# Clases.

La sintaxis de las clases **no** introduce un nuevo modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

```javascript
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}
```

Las clases son "funciones especiales", como las expresiones de funciones y declaraciones de funciones, la sintaxis de una clase tiene dos componentes: expresiones de clases y declaraciones dee clases.

```javascript
// Anonima
let Rectangulo = class {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};

console.log(Rectangulo.name);
// output: "Rectangulo"

// Nombrada
let Rectangulo = class Rectangulo2 {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};
console.log(Rectangulo.name);
// output: "Rectangulo2"
```

# gets y sets en javascript:

ayudan a obtener y/o modificar una propiedad de tu clase.

Con get obtienes un valor de retorno relacionado a una propiedad.

Con set estableces el valor de una propiedad. esto puede ayudar en todos los casos que desee que la obtencion y/o modificaciones de las propiedades sean limitadas o controladas.

Ejemplos de uso de get y set.

```
https://yeisondaza.com/entendiendo-getters-y-setters-en-javascript
```

```js
let persona = {
  nombre: 'Yeison',
  apellido: 'Daza',
  get nombreCompleto() {
    return `${nombre}${apellido}`
  },
  set nombreCompleto(nom) {
    const palabras = nom.split(' ');
    this.nombre = palabras[0] || '';
    this.apellido = palabras[1] || '';
  }
}

persona.nombreCompleto = 'Camilo Sanchez'

console.log(persona.nombre); //camilo
console.log(persona.apellido); //sanchez
```

En las propiedades y metodos estaticos son atributos o miembros que dependen directamente de la clase por lo tanto comparten el valor de la clase, tidi esto independientemente de las instancias que se hayan creado.

Esto lo puedes usar en tus clases por ejemplo cuando necesitas obtener ciertos valores o datso sin la necesidad de una instancia de la clase.

```js

functionMoneda(valor,divisa){
  //Propiedades normales
  this.valor = valor;
  this.divisa = divisa;
  //Método normal
  this.cambiarDivisa =function(nueva){
    this.divisa = nueva;
  }
  //Propiedad estática
  Moneda.cambioDolares =1.34;
  //Método estático
  Moneda.modificarCambio =function(nuevo){
    Moneda.cambioDolares = nuevo;
  }
}
//Instancia de un objeto moneda
var moneda1 =newMoneda(100,"euro");
//Usar las propiedades normales
alert("El valor de la moneda 1 es "+moneda1.valor);
//Usar el método normal
moneda1.cambiarDivisa("libra");
//Usar la propiedad estática
alert("El cambio es "+Moneda.cambioDolares);
//Llamada al método estático
Moneda.modificarCambio(1.50);


```

SINGLETON:

es un concepto de programacion en el cual se trata de tener una clase que cuando se intente volver a instanciar verifique si ya se ha creado anteriormente y si no, entonces crea la instancia y si ya habiamos creado una entonces se usa la misma.

la idea del Singleton.instancia es mantener una unica instancia de la clase  y si eso existe usamos la misma.
