//HTML References

const  divTaskList = document.querySelector('.task-list');

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