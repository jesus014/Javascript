class Persona{
    
    //creando una nueva instancia que utilice el mismo constructor
    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre , apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;

    }

    getInfo(){
        console.log(`info ${this.nombre}, info ${this.apellido}`);
    }
}

const nombre1='jesus',
      apellido1='santiago',
      pais1='mexico';

const jesus={
    nombre:'naruto',
    apellido:'santiago',
    pais:'mexico'
};


const persona1 = new Persona(nombre1,apellido1,pais1);
const persona2 = Persona.porObjeto(jesus);

persona1.getInfo();
persona2.getInfo(); 