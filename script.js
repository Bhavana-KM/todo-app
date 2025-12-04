let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//old tasks 
tasks.forEach(task => {
  let li = document.createElement("li");
  li.textContent = task;
  list.appendChild(li);
});

//add new task 
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && input.value !== "") {
    let task = input.value;

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    let li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);

    input.value = "";
  }
});
