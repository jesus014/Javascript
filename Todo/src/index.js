//exportacion de los modulos que se encuentran en la carpeta js y css.
import './styles.css';
import {Todo , TodoList} from './classes';
import { crearHtml } from './js/components';
//creacion y utilizacion de modulos.


export const todoList = new TodoList();

//const tarea = new Todo('aprender js');
//todoList.nuevoTodo(tarea);
//console.log(todoList);


todoList.todos.forEach( todo => crearHtml(todo));

//crearHtml(tarea);





//localStorage.setItem('mi-key','key');
//sessionStorage.setItem('mi-key','key');
//
//setTimeout(() => {
//    localStorage.removeItem('mi-key');
//},1500);