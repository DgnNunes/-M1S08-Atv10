document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `<span>${taskText}</span> <button class="completeBtn">Concluir</button> <button class="removeBtn">Remover</button>`;
            taskList.appendChild(li);
            taskInput.value = "";

            li.querySelector(".completeBtn").addEventListener("click", function() {
                li.classList.toggle("completed");
            });

            li.querySelector(".removeBtn").addEventListener("click", function() {
                li.remove();
            });
        }
    });
});