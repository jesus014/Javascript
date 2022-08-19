## Callback

Es una funcion ()=>{}  que es enviada como un argumento.

funciones de manera secuencial

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

```javascript
function saludar(nombre) {
  alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
  var nombre = prompt('Por favor ingresa tu nombre.');
  callback(nombre);
}

procesarEntradaUsuario(saludar);
```

## Promesa.

Arreglo con el que se trabaja.

```javascript
const personajes ={
    naruto:{
        nombre:'naruto uzumaki',
        poder:'Rasengan'
    }, 
    kakashi:{
        nombre:'kakashi hatake',
        poder:'Rasengan'
    },
    itachi:{
        nombre:'itachi ',
        poder:'el sharingan'

    }
};
```



## Ejemplo de promesa:

Retorna una promesa la cual puede tener dos respuestas. un RESOLVE  si es correcta la peticion o un REJECT en caso contrario.

```javascript
//esta funcion busca un personaje por medio de un id.
export const buscarPersonaje = (id) => {
    const personaje = personajes[id];


    //cuando se hace correctamente //cuando falla la promesa
    return new Promise( (resolve, reject) => {

        if(personaje){
            resolve(personaje);
        }
        else{
            reject(`no existe un heroe con el id ${id}`);
        }
    });
}
```

## Promesa de manera async.

```javascript
export const buscarPersonajeAsync = async (id) => {
    const personaje = personajes[id];


    //cuando se hace correctamente //cuando falla la promesa
        if(personaje){
            return personaje;
        }
        else{
            throw `no existe un heroe con el id ${id}`;
        }

}
```

## Uso de try catch


```javascript
//uso de try catch
export const obtenerPersonajeAwait = async (id) => {
    try {
        const personaje = await buscarPersonajeAsync(id);
        return personaje;

    } catch (error) {
        return{ 
            nombre:'sin poder',
             apellido:'sin apellido'
        }
    }

};
```
