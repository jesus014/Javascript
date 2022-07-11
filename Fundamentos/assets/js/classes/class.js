//definicion de una clase
//propiedes y metodos para la clase persona
class Persona{
    //propiedades estaticas.
    static _conteo=0;

    static get conteo(){
        return Persona._conteo +'instanciaas';
    
    }

    static mensaje(){
        // no se puede hacer referencia a los valores de abajo. 
        console.log('hola sasuke');
    }
    //propiedes de clase
    nombre ='';
    codigo ='';
    frase  ='';
    comida ='';

    //es un metodo que se ejecuta al momento de crear una nueva instancia de persona
    constructor(nombre , codigo, frase){
        console.log("hola");
        this.codigo=codigo;
        this.nombre=nombre;
        this.frase=frase;
        Persona._conteo++;
    } 

    //set y getInt8
    //el set solo recibe de preferencia un argumento. es para establecer un valor
    set setComidaFavorita(comida){

        this.comida = comida.toUpperCase();
    }

    //recuperar un valor.

    get getComidaFavorita(){
        return `la comidad favorita de ${this.nombre} es ${this.comida}`
    }



    //metodos en clases (funciones que se ejecutan dentro de la instancia de la clase).
    quienSoy(){
            console.log(this.nombre);
    }

    miFrase(){
        this.quienSoy();
        console.log(this.frase);
        }


}

//objetos creados
const naruto =  new Persona('itachi','codigo','ta falta odio');
console.log(naruto);



naruto.quienSoy();
naruto.miFrase();

naruto.setComidaFavorita ='ramen de la aldea de la hoja';
naruto.nemesis='sasuke';


console.log(naruto);
//Persona._conteo = 2;

console.log(Persona._conteo)
console.log(Persona.conteo)
Persona.mensaje();

console.log(naruto.getComidaFavorita);

Persona.propiedadExterna='hola mundo';

console.log(Persona.propiedadExterna);

//definicion de la clase.
console.log(Persona);