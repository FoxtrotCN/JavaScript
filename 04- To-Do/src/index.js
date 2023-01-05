import './styles.css';

import {Task} from "./js/classes/todo.class";
import {TaskList} from "./js/classes/todo-list";

const taskList = new TaskList();
const task1 = new Task("Comer china");
taskList.newTask(task1);



console.log(taskList);
console.log(task1);

