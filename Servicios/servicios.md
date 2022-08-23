## Node

correr codigo de javascript en el servidor.

Pero tambien nuestra computadora puede ser un servidor de desarrollo, nos permite desarrollar localmente..

## WebPack

Es un empaquetador de modulos. Realizar trabajos de manera automatica.

Gestionar dependencias.

montar servidores de desarrollo y pruebas.

convertir a diferentes formatos.

compilacion de sass a css.

Nos permite trabajar con js moderno.

compilar ts y js.

Se utiliza para definir comandos o paquetes que se utilizaran en el proyecto para su buen funcionamiento.

una  herramienta Open Source utilizada por los desarrolladores para empaquetar y exportar todos los ficheros necesarios para que un proyecto funcione con todas sus dependencias frontend .

### desventajas de webpack

la configuracion inicial puede ser un dolor de cabeza.

complicado al detectar problemas con algun paquete.

### Inicio de packge.json

e coloca toda la **información** que se conoce sobre el mismo. Este archivo es un simple fichero de texto, en formato JSON que incorpora a través de varios campos información muy variada.

Este fichero tiene una estructura definida muy concreta, y a través de sus campos se puede guardar y recuperar información muy útil.

```
npm init
```

### instalacion de webpack:

instalacion de webpack en el proyecto.

https://webpack.js.org/guides/getting-started/

El paquete *webpack* corresponde con el propio Webpack, mientras que el paquete *webpack-cli* contiene  los comandos necesarios para realizar las operaciones con Webpack, lo que se conoce como Interfaz de línea de comandos o CLI por su acrónimo en inglés.

```
npm install webpack webpack-cli --save-dev
```

Uso de este comando para realizar la carpeta de distribucion.

```
npm run build
```

### Instalacion de plugins:

* `url-loader`
* `file-loader`: es de gran ayuda para utilizar binarios dentro de nuestra app con `import`
* `html-loader`: ayuda a minificar el html si es necesario
* `css-loader`: interpreta los estilos de la app
* `babel-loader`: aunque webpack entiende JS, este loader ayuda a transformar el código con una sintaxis moderna a una sintaxis más universal para todos los navegadores
* `style-loader`: mientras que css-loader interpreta estilos, style-loader se encarga de inyectarlos a nuestra app

```
npm install --save-dev html-webpack-plugin

```

```
npm install --save-dev html-loader

Comando para estilos.

npm install --save-dev css-loader style-loader


```

Uso de este comando para realizar tipo servidor.

```
npm i -D webpack-dev-server
```

```
npm install --save-dev mini-css-extract-plugin
```

Img

```console
npm install file-loader --save-dev
```

Copiar y mover otros archivos o imagenes.

```console
npm install copy-webpack-plugin --save-dev


```

Minimizacion de codigo css.

```
npm i -D css-minimizer-webpack-plugin terser-webpack-plugin
```

## Uso y instalacion de Babel

pagina de babel:

https://babeljs.io/setup#installation

instalacion de babel.

```
npm install --save-dev babel-loader @babel/core
```

```
npm install @babel/preset-env --save-dev

```

## Uso de peticion.

Uso de peticion, haciendo uso de try catch.

```javascript
    //peticion http get.
const obtenerChiste = async() => {
    try {
        const response = await fetch(jokeUrl)
  
        if(!response.ok ) throw alert('no se pudo realizar la peticion');

        const {icon_url, id , value} = await response.json();
    
        return {
            icon_url, 
            id ,
            value
        };
        
    } catch (error) {

        throw error;
    }
}

export{
    obtenerChiste
}
```

## Creacion de html desde javascript.

Creacion de html desde javascript llamando http-provider para hacer la solicitud.

```javascript
import { obtenerChiste } from "./http-provider";

//body
const body= document.body;
let btnOtroChiste, olList;

const crearChistesHtml= ()=>{
    const html= `
    <h1 class="mt-5">Chistes</h1>
    <hr>
    <button class="btn btn-primary">Otro chiste</button>
    <ol class="mt-2 list-group">

    </ol>
  
    `;

    const divChistes= document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);
}

const eventos=()=>{

    olList = document.querySelector('ol');
    btnOtroChiste= document.querySelector('button');
  
    //Se escucha el evento del btn
    btnOtroChiste.addEventListener('click', async() => {
        btnOtroChiste.disabled = true;
        //se llama la funcion dibujarChiste llamando la funcion obtenerChiste
        dibujarChiste(await obtenerChiste());
        btnOtroChiste.disabled = false;
    });

}

//se recibe el chiste.
const dibujarChiste= (chiste) => {

    //se crea elemento li
    const olItem =document.createElement('li');
    // 
    olItem.innerHTML = `<b>${chiste.id}</b>:  ${chiste.value}`;
    //se inserta la clase  al elemto li
    olItem.classList.add('list-group-item');

    //se agrega  olItem a la lista olList
    olList.append(olItem);
}

//exportacion de funciones. 

export const init =()=>{
    crearChistesHtml();
    eventos();
}
```


## usuarios-page.js


```javascript
//se llama al evento ObtenerUsuarios 
import {obtenerUsuarios } from "./http-provider";


const body  = document.body;
//se declaran las variables
let  tbody;
let correlativo =0;

//crear elemento html
const crearHtml = () => {
    const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

  
    tbody = document.querySelector('tbody');
    // Crear una referencia al TBODY
    // ya que los TRs van dentro del tbody
            // querySelector('tbody');
            // Crear una variable para mantener la referencia?

}


// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
    // {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "last_name": "Lawson",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    // }
const crearFilaUsuario = ( usuario ) => {

    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar
    correlativo ++;
    const html = `
        <td scope="col"> ${correlativo} </td>
        <td scope="col"> ${usuario.email} </td>
        <td scope="col"> ${usuario.first_name } ${usuario.last_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${usuario.avatar}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tbody.appendChild(tr);
    // Añadir el table row (tr) dentro del TBody creado anteriormente

}


export const init = async() => {

    crearHtml();
    correlativo = 0;
    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFila (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación


    const usuarios= await obtenerUsuarios();
    usuarios.forEach(crearFilaUsuario);

}


```


## Http-Provider-js


```javascript
const urlUsuarios='https://reqres.in/api/users?page=2';


//uso para obtener informacion
const obtenerUsuarios= async( ) => {

    const respuesta =await fetch(urlUsuarios);
    const {data:usuarios} = await respuesta.json();

    console.log(usuarios);

    return usuarios;
}



export{
    obtenerChiste,
    obtenerUsuarios

}
```



## Crud-provider.js


```javascript
const urlCrud='https://reqres.in/api/users';

const getUsuario=async(id ) => {
    const response =await fetch(`${urlCrud}/${id}`);
    const {data}= await response.json();

    return data;
}

const CrearUsuarios = async(usuario) => {
    const response = await fetch(urlCrud, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    //console.log(await response.json());
    return await response.json();
}

const ActualizarUsuario = async(id,usuario) => {
    const response = await fetch(`${urlCrud}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    //console.log(await response.json());
    return await response.json();
}

const EliminarUsuario = async(id) => {
    const response = await fetch(`${urlCrud}/${id}`, {
        method: 'DELETE'
    });

    //console.log(await response.json());
    return (response.ok)?'Borrado':'No se pudo eliminar';

}







export {
    getUsuario,
    CrearUsuarios,
    ActualizarUsuario,
    EliminarUsuario
  
}
```


## Index.js


```javascript
//import { obtenerChiste,obtenerUsuarios } from "./js/http-provider";
//
//obtenerChiste().then(console.log);


import * as CRUD from './js/crud-provider';
import { init } from "./js/usuarios-page";

init();
//obtenerUsuarios().then(console.log);

CRUD.getUsuario(1).then(console.log);

CRUD.CrearUsuarios({
    name:'jesus',
    job:'jugador'
}).then(console.log);

CRUD.ActualizarUsuario(1,{
    name:'jesus',
    job:'jugador'
}).then(console.log);


CRUD.EliminarUsuario(1).then(console.log);
```
