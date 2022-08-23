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