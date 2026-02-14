let tasks = [];

function addTask(){
  const title = taskTitle.value.trim();
  const date = taskDate.value;

  if(!title || !date){
    alert("Fill all fields");
    return;
  }

  tasks.push({
    id: Date.now(),
    title,
    date,
    status:"pending"
  });

  taskTitle.value="";
  taskDate.value="";
  render();
}

function render(){
  pending.innerHTML="";
  completed.innerHTML="";

  tasks.forEach(task=>{
    const div = document.createElement("div");
    div.className = "bg-gray-800 border border-gray-600 rounded-lg p-3 shadow";

    div.innerHTML = `
      <p class="font-semibold">${task.title}</p>
      <p class="text-sm text-gray-400">${task.date}</p>

      <div class="mt-2 flex gap-2">
        ${
          task.status==="pending"
          ? `
          <button onclick="completeTask(${task.id})"
            class="bg-green-500 text-black px-2 py-1 rounded text-sm">✔</button>

          <button onclick="editTask(${task.id})"
            class="bg-blue-500 text-black px-2 py-1 rounded text-sm">✏</button>
          `
          : ""
        }

        <button onclick="deleteTask(${task.id})"
          class="bg-red-500 text-black px-2 py-1 rounded text-sm">🗑</button>
      </div>
    `;

    task.status==="pending"
      ? pending.appendChild(div)
      : completed.appendChild(div);
  });
}

function completeTask(id){
  const task = tasks.find(t=>t.id===id);
  task.status="completed";
  render();
}

function editTask(id){
  const task = tasks.find(t=>t.id===id);
  const newTitle = prompt("Edit task", task.title);
  if(newTitle){
    task.title = newTitle.trim();
    render();
  }
}

function deleteTask(id){
  tasks = tasks.filter(t=>t.id!==id);
  render();
}