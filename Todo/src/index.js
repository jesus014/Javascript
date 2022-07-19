//exportacion de los modulos que se encuentran en la carpeta js y css.
import './styles.css';
import { Todo } from './classes/todo.class';

//creacion y utilizacion de modulos.

const tarea = new Todo('aprender js');

console.log(tarea);