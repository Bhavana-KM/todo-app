let input = document.getElementById('taskInput');
let list = document.getElementById('taskList');

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && input.value.trim() !== '') {
        let listItem = document.createElement('li');    
        listItem.textContent = input.value.trim();
        list.appendChild(listItem);
        input.value = '';
    }   
});