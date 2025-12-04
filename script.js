let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

for (let i = 0; i < tasks.length; i++) {
  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  if (tasks[i].completed === true) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }

  checkbox.addEventListener("change", function () {
    if (checkbox.checked === true) {
      tasks[i].completed = true;
    } else {
      tasks[i].completed = false;
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(tasks[i].text));
  list.appendChild(li);
}

// Add task-
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && input.value !== "") {

    let task = {
      text: input.value,
      completed: false
    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function () {
      if (checkbox.checked === true) {
        task.completed = true;
      } else {
        task.completed = false;
      }

      localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task.text));
    list.appendChild(li);

    input.value = "";
  }
});
