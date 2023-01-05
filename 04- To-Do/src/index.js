import './styles.css';

import {Task} from "./js/classes/todo.class";
import {TaskList} from "./js/classes/todo-list";

import {makeTaskHtml} from "./js/components";

const taskList = new TaskList();
const task = new Task("Comer china");

taskList.newTask(task);





console.log(taskList);

makeTaskHtml(task);




