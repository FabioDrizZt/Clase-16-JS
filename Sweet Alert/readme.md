Primer paso seleccionar los elementos del HTML:

const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");

Agregamos el evento de click para el boton

addButton.addEventListener("click", addTask);

Creamos la funcion addTask:
  Verificamos que la tarea no este vacia y luego la agregamos al arreglo, por ultimo llamamos a la funcion showTasks()

const addTask = () => {}

Creamos la funcion showTasks():
  Vacia la lista de tareas y luego agrega nodos <li>
  dentro del li le agregamos una funcionalidad de borrado de tarea removeTask(${index})
  
const showTasks = () => {}

creamos la funcion removeTask(index)
  eliminamos una tarea del arreglo y actualizamos la vista

Agregamos un elemento para buscar tarea