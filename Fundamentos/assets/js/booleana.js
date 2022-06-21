//creacion de dos funciones 

const regresaTrue=()=>{
    console.log('regresa true');
    return true;
}

const regresaFalse=()=>{
    console.log('regresa false');
    return false;
}


//ejempo de negacion.

console.warn('not  o la negacion');
console.log(!regresaFalse());

console.warn('&&');

//and true si todos los valores son verdaderos.
console.log(true && true);
console.log(true && !false);

//Deacuerdo a la forma en la que se llama es la forma de respuesta de las peticiones. Si

console.log(regresaFalse() && regresaTrue());//false
console.log(regresaTrue() && regresaFalse());//false



console.warn('or');

console.log(true||false);
console.log(false||false);

console.log(regresaTrue() || regresaFalse());//false

//valores 
console.warn('asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso =false;

const a1 =true && 'Hola Mundo';
const a2 ='hola' &&'mundo' && soyFalso;
const a3 = soyFalso || 'ya no soy falso';
const a4 = soyFalso || soyUndefined|| soyNull ||'ya no soy falso';
const a5 = soyFalso || soyUndefined|| regresaFalse() ||'ya no soy falso';


console.log(a1, a2, a3, a4);

if (true|| true ||true|| false) {
    console.log('hacer algo')
}else{
    console.log('no hacer alho');
}