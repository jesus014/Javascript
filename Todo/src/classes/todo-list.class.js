import { Todo } from "./todo.class";

//metodos para la creacion de nodo.
export class TodoList {

    constructor(){
        //this.todos = [];
        this.cargarLocalStorage();
    }

    //metodo que se utiliza para la creacion pasandole toda la clase.
    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();

    }

    //metodo que se utiliza para eliminar, pasandole el id.
    eliminarTodo(id){
        this.todos = this.todos.filter(todo=>todo.id != id)
        this.guardarLocalStorage();

    }

    //metodo que se utiliza para marcar completado.
    marcarComplete(id){
        
        for(const todo of this.todos){

            if(todo.id == id){

                todo.completado = ! todo.completado;
                this.guardarLocalStorage();
                break;

            }
        }
    }

    //metodo que se utiliza para eliminar.
    eliminarCompletados(){

        this.todos = this.todos.filter(todo=> !todo.completado)
        this.guardarLocalStorage();
    }

    //
    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage(){
        //if(localStorage.getItem('todo')){
        //    this.todos = JSON.parse(localStorage.getItem('todo'));
        //
        //}else{
        //    this.todos=[];
        //}

        this.todos=(localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];

        this.todos=this.todos.map(obj => Todo.fromJson(obj));
    }

}