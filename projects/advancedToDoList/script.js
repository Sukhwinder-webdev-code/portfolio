let tasks = [];
let addTask = document.getElementById('addBtn');
window.addEventListener('DOMContentLoaded', loadTasks);
addTask.addEventListener('click', addNewTask)
function addNewTask() {
    const taskToAdd = document.querySelector('.enteredTask').value;
    document.querySelector('.enteredTask').value.trim = "";
    if (taskToAdd !== "") {
        tasks.push(taskToAdd);
        saveTasks();
        displayTasks();
        document.querySelector('.enteredTask').value = "";
    }
    else return
};

let list = document.getElementById('displayResults');
function displayTasks() {
    list.textContent = "";
    for (let i = 0; i < tasks.length; i++) {
        let listItem = document.createElement('li');
        listItem.classList.add('listItemStyle')

        let newSpan = document.createElement('span');
        let rmvBtn = document.createElement('button');
        rmvBtn.textContent = 'REMOVE';
        rmvBtn.addEventListener('click', () => {
            removeTask(i);
        });
        rmvBtn.classList.add('rmvButton')
        newSpan.textContent = i + 1 + '. ' + tasks[i];
        listItem.appendChild(newSpan);
        listItem.appendChild(rmvBtn);
        list.appendChild(listItem);
    }

}

function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        displayTasks();
    }
}
