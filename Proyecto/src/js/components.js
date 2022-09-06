//importacion de imagenes
//importacion de css.
import webpackHinata from '../assets/img/1.png'
import '../css/components.css';


export const saludar = (nombre)=>{
    console.log('creando etiqueta');
    const h1 = document.createElement('h1');
    h1.innerHTML =  `hola ${nombre}!! `;

    document.body.append(h1);
    const img = document.createElement('img');
    img.src=webpackHinata;
    document.body.append(img);

}