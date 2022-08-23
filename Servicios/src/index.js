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