document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newTodo = document.getElementById('newTodo').value;
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push({ text: newTodo, completed: false });
    localStorage.setItem('todos', JSON.stringify(todos));
    document.getElementById('message').innerText = 'TODO guardado correctamente';
    document.getElementById('todoForm').reset();
});
