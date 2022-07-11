//creacion de objetos
const jesus = {
    nombre: 'yisus',
    edad: 21,
    //referencias sobre el mismo objeto de
    imprimir(){
        console.log(this.nombre);
    }

}

const naruto = {
    nombre: 'naruto',
    edad: 30
}

jesus.imprimir();

//funcion para crear instancias:
//_proto_ 
    
function Persona(nombre, edad){
    console.log('se ejecuto esta linea');
    this.nombre=nombre;
    this.edad=edad;

    this.imprimir =function(){
        console.log(this.nombre);
        console.log(this.edad);

    }

    //retorna un objeto tipo persona
    return;
}


//crea una nueva instancia
const maria= new Persona('Maria',21);
const mariela= new Persona('Mariela',21);

maria.imprimir();
mariela.imprimir();
