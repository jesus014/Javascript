//funciones
function greet(name:string){
    console.log(`Greetings!, ${name.toUpperCase()}`);
}


greet('jesus');


const ObtenerNombre =(name:string)=>{
    console.log(`Greetings!, ${name.toUpperCase()}`);

}

ObtenerNombre('yisus');

//funcions


function getNumber(numero:number = 212 ): number {
    return Math.floor(Math.random() * numero);
}

console.log(getNumber());

//se pueden pasar hasta un objeto por la funcion.
function printPosition(position:{lat:number, lon?:number|string}) :void {
    console.log(`la posicion de latitud es !, ${position.lat} y  longitud es ${position.lon}`);    
}

printPosition({lat:32,lon:'32'}) ;
