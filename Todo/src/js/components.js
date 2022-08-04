//importacion de imagenes
//importacion de css.
import{ Todo} from'../classes';
import { todoList } from '../index';

//referencias en html para
//se hace referencia por el tipo de clase que tiene en el label
const divTodoList =document.querySelector('.todo-list')
const txtInput=document.querySelector('.new-todo')
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros =document.querySelector('.filters');
const anchorfiltros =document.querySelectorAll('.filtro')


//creacion de de html recibiendo el Todo. 
export const crearHtml = (todo) => {
    //se utiliza deacuerdo al todo recibido, los campos. 
    const htmlTodo = `
     <li class="${(todo.completado) ?'completed':'' }" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ?'checked':'' } >
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    //crea un elemento con la clase div.
    const div = document.createElement('div');
    //se asigna el valor.
    div.innerHTML= htmlTodo;


    divTodoList.append(div.firstElementChild);
    
    return div.firstElementChild;

}


//se utiliza para cachar lo que se escribio.
txtInput.addEventListener('keyup',(event) =>{

    if(event.keyCode== 13 && txtInput.value.length>0){

        //se inicializa el "Todo"
        const nuevoTodo = new Todo(txtInput.value);
        //se utiliza el metodo nuevoTodo mandandole el nuevoTodo
        todoList.nuevoTodo(nuevoTodo);
        console.log(todoList);

        //se envia el valor al metodo crearHTML. 
        crearHtml(nuevoTodo);
        txtInput.value ='';
        
    }

})

//se selecciona deacuerdo al div se utiliza el addEventListener para escuchar el event click
divTodoList.addEventListener('click', (event)=>{

    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    //se utiliza para obtener el valor del "id"
    const todoId = todoElemento.getAttribute('data-id');
    console.log(todoId);

    if(nombreElemento.includes('input')) //click en el check
    {

        todoList.marcarComplete(todoId);
        todoElemento.classList.toggle('completed');

    }else if(nombreElemento.includes('button')){
        
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);

        }

    console.log(todoList);


})

//se selecciona deacuerdo al btn se utiliza el addEventListener para escuchar el event click
btnBorrar.addEventListener('click', ()=>{
    todoList.eliminarCompletados();
    
    //eliminar del div los elementos
    for(let i = divTodoList.children.length-1; i>=0; i--) {

        const elemento = divTodoList.children[i];

        if(elemento.classList.contains('completed')){

            divTodoList.removeChild(elemento);

        }
    }
})




//se selecciona deacuerdo al ul se utiliza el addEventListener para escuchar el event click
ulFiltros.addEventListener('click', (event) => {
    console.log(event.target.text)
    //se utiliza para tomar el valor del evento
    const filtro = event.target.text;
    if(!filtro) return;

    anchorfiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const elemento of divTodoList.children){

        elemento.classList.remove('hidden');

        const completado = elemento.classList.contains('completed');

        switch(filtro){
            case 'Pendientes':
                //si tiene la clase completed.
                if(completado)
                {
                    elemento.classList.add('hidden');
                }

            break;

            case 'Completados':

                if(!completado)
                {
                    elemento.classList.add('hidden');
                }

            break;
        }
    }
})