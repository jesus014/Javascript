//importacion de css.

import '../css/components.css';

export const saludar = (nombre)=>{
    console.log('creando etiqueta');
    const h1 = document.createElement('h1');
    h1.innerHTML =  `hola ${nombre}!! `;

    document.body.append(h1);

}