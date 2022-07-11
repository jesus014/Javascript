

class Rectangulo{

    #area=0;
    constructor(base=0,altura=0){
        this.base   = base;
        this.altura = altura;

        this.#area = base *altura;
    }
    calcularArea(){
        console.log("calcularArea");
    
    }
}

//nueva instancia

const rectangulo= new Rectangulo(10,15);
rectangulo.calcularArea();

console.log(rectangulo);