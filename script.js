// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearButton');

// Function to create a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please kindly enter your task.');
    return;
  }

  // Create task item
  const taskItem = document.createElement('li');

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  // Create buttons
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  // Append elements
  taskItem.appendChild(taskContent);
  taskItem.appendChild(completeButton);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  // Clear input
  taskInput.value = '';
}

// Add event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Allow pressing "Enter" to add task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Clear task list when "Clear" button is clicked
clearButton.addEventListener('click', () => {
  taskList.innerHTML = '';
});









const taskContent = document.createElement('span');
taskContent.textContent = taskText;