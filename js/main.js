function init() {


    const today = new Date();
    today.getDate();
    const dateField = document.querySelector('.date');
    dateField.innerText = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`;
    
    const todoField = document.getElementById('todo');
    const todoList = document.querySelector('.todo_list');
    let todoLength = todoList.children.length;

    for (let i = 0; i < todoLength; i++) {
        let todoDelete = document.createElement('div');
        todoDelete.className = 'todo_delete';
        todoList.children[i].append(todoDelete);
    }

    todoField.onclick = function(e) {
        let todoItem = e.target.closest('.todo_item');
        if (!todoItem) return;
        e.target.classList.toggle('done');
        if (e.target.classList.contains('todo_delete')) e.target.closest('.todo_item').remove();
        todoLength = todoList.children.length;
        if (todoLength === 0) todoList.innerText = 'Дела закончились';

    }

    // Добавление задач
    const todoForm = document.getElementById('todo_form');
    todoForm.onsubmit = function(e) {

        // Если задач не было, убираем надпись
        todoLength = todoList.children.length;
        if (todoLength === 0) todoList.innerText = '';
        
        e.preventDefault();
        let todoValue = todoForm.todo.value;
        let todoTime = todoForm.time.value;
        const todoNew = document.createElement('div');
        todoNew.className = 'todo_item';
        todoNew.innerText = todoValue;

        // Если указано время
        if (todoTime.length != 0) {
            let todoTimeEl = document.createElement('div');
            todoTimeEl.className = 'todo_time';
            todoTimeEl.innerText = todoTime;
            todoNew.append(todoTimeEl);
        }

        let todoDelete = document.createElement('div');
        todoDelete.className = 'todo_delete';
        todoNew.append(todoDelete);
        todoList.append(todoNew);
        // todoAlert(todoValue);
        todoForm.reset();
    }


    function addTodo() {
        return new Promise();
    }

    function todoAlert(text) {
        alert(text);
    }

}

window.onload = init;