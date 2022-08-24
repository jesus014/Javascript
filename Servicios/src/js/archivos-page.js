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