//tener una unica instancia independientemente si se hace un new

class Singleton{

    //parametros opcionales
    static instancia;
    nombre='';

    constructor(nombre=''){
        console.log(Singleton.insttancia);

        if(!!Singleton.instancia){
            return Singleton.instancia;
        }

        Singleton.instancia=this;
        this.nombre=nombre;
        //return this;
        
    }


}

const instancia2=new Singleton('IronMan2');
const instancia1=new Singleton('IronMan');

console.log('nombre', instancia1.nombre);
console.log('nombre', instancia2.nombre);