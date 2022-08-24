

## Creacion del archivo HTML


```javascript
import {subirImagen} from './http-provider';
const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml=()=>{
    const html=`
        <h1 class="mt-5">Subir archivo</h1>
        <hr>

        <label>Archivo</label>
        <input type="file" accept="image/png, image/jpeg "/>

        <br>
        <img id="foto" class="img-thumbnail" src="">
    `;

    const div = document.createElement('div');
    div.innerHTML=html;
    body.append(div);

    inputFile=document.querySelector('input');
    imgFoto=document.querySelector('#foto');


}


const eventos=()=>{
    inputFile.addEventListener('change',(event)=>{
        console.log(event);
        const file=event.target.files[0];
        subirImagen(file).then(url=> imgFoto.src = url);
    });
}

export const init = () =>{
    crearInputFileHtml();
    eventos();
}
```


## http-provider.js

archivo js. Se realiza la peticion.

```javascript

//cloudinary
const cloudPresent='aa8oxh9x'
const cloudUrl= 'https://api.cloudinary.com/v1_1/dokrrprqh/upload';

//archivosSubir
const subirImagen= async(archivoSubir)=>{

    const formData= new FormData();
    formData.append('upload_preset',cloudPresent);
    formData.append('file',archivoSubir);

    try {
        const response = await fetch(cloudUrl , {
            method: 'POST',
            body:formData
        });

        if(response.ok){

            const cloudResponse= await response.json();
            console.log(cloudResponse);
            return cloudResponse.secure_url;

        }else{
            throw await response.json();
        }
  
    } catch (error) {
        throw error;

  
    }

}



export{
    obtenerChiste,
    obtenerUsuarios,
    subirImagen

}
```


## index.js


```javascript
//import { init } from "./js/usuarios-page";

import { init } from "./js/archivos-page";

init();
```
