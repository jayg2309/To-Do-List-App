// script.js
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDetails = document.getElementById("taskDetails");
    const taskDate = document.getElementById("taskDate");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const taskText = document.createTextNode(taskInput.value);
        const taskDetailsText = document.createTextNode(`Details: ${taskDetails.value}`);
        const taskDateText = document.createTextNode(`Deadline: ${taskDate.value || "No deadline"}`);

        const taskItem = document.createElement("li");
        taskItem.appendChild(taskText);

        if (taskDetails.value.trim() !== "") {
            taskItem.appendChild(document.createElement("br"));
            taskItem.appendChild(taskDetailsText);
        }

        if (taskDate.value) {
            taskItem.appendChild(document.createElement("br"));
            taskItem.appendChild(taskDateText);
        }

        const doneButton = document.createElement("button");
        doneButton.innerHTML = "Done";
        doneButton.onclick = function () {
            taskItem.classList.toggle("completed");
            doneButton.innerHTML = taskItem.classList.contains("completed") ? "Undone" : "Done";
        };

        const editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.onclick = function () {
            editTask(taskItem);
        };

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function () {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(doneButton);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
        taskInput.value = "";
        taskDetails.value = "";
        taskDate.value = "";
    }
}

function editTask(taskItem) {
    const newTaskName = prompt("Edit the task:", taskItem.firstChild.nodeValue);
    if (newTaskName !== null) {
        taskItem.firstChild.nodeValue = newTaskName;

        const newTaskDetails = prompt("Edit task details:", taskItem.childNodes[2].nodeValue.replace("Details: ", ""));
        if (newTaskDetails !== null) {
            taskItem.childNodes[2].nodeValue = `Details: ${newTaskDetails}`;
        }
    }
}
// script.js
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDetails = document.getElementById("taskDetails");
    const taskDate = document.getElementById("taskDate");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const taskText = document.createTextNode(taskInput.value);
        const taskDetailsText = document.createTextNode(`Details: ${taskDetails.value}`);
        const taskDateText = document.createTextNode(`Deadline: ${taskDate.value || "No deadline"}`);

        const taskItem = document.createElement("li");
        taskItem.appendChild(taskText);

        if (taskDetails.value.trim() !== "") {
            taskItem.appendChild(document.createElement("br"));
            taskItem.appendChild(taskDetailsText);
        }

        if (taskDate.value) {
            taskItem.appendChild(document.createElement("br"));
            taskItem.appendChild(taskDateText);
        }

        const doneButton = document.createElement("button");
        doneButton.innerHTML = "Done";
        doneButton.onclick = function () {
            taskItem.classList.toggle("completed");
            doneButton.innerHTML = taskItem.classList.contains("completed") ? "Undone" : "Done";
        };

        const editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.onclick = function () {
            editTask(taskItem);
        };

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function () {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(doneButton);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
        taskInput.value = "";
        taskDetails.value = "";
        taskDate.value = "";
    }
}

function editTask(taskItem) {
    const newTaskName = prompt("Edit the task:", taskItem.firstChild.nodeValue);
    if (newTaskName !== null) {
        taskItem.firstChild.nodeValue = newTaskName;

        const newTaskDetails = prompt("Edit task details:", taskItem.childNodes[2].nodeValue.replace("Details: ", ""));
        if (newTaskDetails !== null) {
            taskItem.childNodes[2].nodeValue = `Details: ${newTaskDetails}`;
        }
    }
}
