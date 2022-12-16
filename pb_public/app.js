const pb = new PocketBase("http://127.0.0.1:8090");

console.log(pb.authStore.isValid);

const signOutBtn = document.querySelector('button');

signOutBtn.addEventListener("click", (event) => {
    pb.authStore.clear()})

const form = document.getElementById('add-form');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', e => {
  e.preventDefault();
	
  const task = document.getElementById('task').value;
  const li = document.createElement('li');
  li.innerHTML = `<span>${task}</span><button>Delete</button>`;
  todoList.appendChild(li);
  const record = pb.collection('items').create({
  	text: task,
  	user: pb.authStore.baseModel.id,
  	done: true
  });
  form.reset();
  
});

todoList.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    const li = e.target.parentElement;
    todoList.removeChild(li);
  }
});



todoList.addEventListener('click', e => {
  if (e.target.tagName === 'SPAN') {
    e.target.classList.toggle('completed');
  }
  window.location.href = "index.html";

});

    
