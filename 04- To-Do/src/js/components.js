//HTML References

import {Task} from "./classes/todo.class";
import {taskList} from "../index";

const  divTaskList = document.querySelector('.task-list');
const txtInput = document.querySelector('.new-task');

export const makeTaskHtml = (todo) => {
    const htmlTask = `
<li class="${ (todo.completed) ? 'completed': '' }" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${ (todo.completed) ? 'checked': '' }>
        <label>${todo.task}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>
    `
    const div = document.createElement('div');
    div.innerHTML = htmlTask;
    divTaskList.append(div.firstElementChild);

    return div;
}

//Events

txtInput.addEventListener('keyup', (event) => {

    if (event.keyCode === 13 && txtInput.value.length > 0) {
        const newTask = new Task(txtInput.value);
        taskList.newTask(newTask);

        makeTaskHtml(newTask);
        txtInput.value = '';
    }
})