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
        console.log('datos',nombre,codigo,frase);
    } 

    //set y getInt8

    //el set solo recibe de preferencia un argumento. es para establecer un valor
    set setComidaFavorita(comida){

        this.comida=comida.toUpperCase();
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

//subclasses.

class Heroe extends Persona{

    clan='sin frase';
    constructor(nombre,codigo,frase){
        //llama al contructor padre.
        super(nombre,codigo,frase);    

        this.clan='uchiha'
    }
    quienSoy(){
        console.log(`soy ${this.nombre}, del clans ${this.clan}`);
        super.quienSoy();
        
    }
    comida='sin frase';
    get getComidaFavorita(){
        super.getComidaFavorita();
        //return `la comidad favorita de ${this.nombre} es ${this.comida}`
    }


}

const naruto =  new Persona('itachi','codigo','ta falta odio');

const itachi =  new Heroe('itachi','codigo','ta falta odio');
itachi.quienSoy();
console.log(itachi);
