var formEL = document.querySelector('#task-form');
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();

var taskNameInput = document.querySelector("input[name= 'task-name']").value;
console.log(taskNameInput);


var taskItemEl  = document.createElement('li');
listItemEl.className = "task-item";
listItemEl.textContent = taskNameInput;
tasksToDoEl.appendChild(listItemEl);
};

formEL.addEventListener("sumbit", createTaskHandler);
