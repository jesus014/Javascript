//clase de TODO, en lo cual se declaran los campos que se utilizan. 
export class Todo{

    static fromJson({id,tarea, completado, creado}){
        const temTodo = new Todo(tarea);
        temTodo.id=id;
        temTodo.completado=completado;
        temTodo.creado=creado;
        return temTodo;
    }
    
    //constructor de la clase.
    constructor(tarea){
        this.tarea = tarea;    
        this.id= new Date().getTime();
        this.completado=false;
        this.creado=new Date();
    }
}