

function get_todos() {   // THIS FUNCTION GETS THE TASK FROM INPUT
    var todos = new Array;   // THIS CREATES AN ARRAY OF TASK THAT ARE INPUTTED
    var todos_str = localStorage.getItem('todo');  // THIS PULLS THE TASK THAT WAS SAVED IN THE WEB BROWSER MEMORY
    if (todos_str !== null) {            // IF THE INPUT IS NOT NULL THEN JSON.parse WILL COMMUNICAT WITH THE
        todos = JSON.parse(todos_str);   // WEB BROWSER TO MAKE THE TASK A JAVASCRIPT OBJECT
    }
    return todos;
}

function show() {   // THIS FUNCTION KEEPS THE TASKS PERMANETLY DISPLAYED ON THE SCREEN
    var todos = get_todos();   // THIS SETS THE TASK THAT WAS RETRIEVED AS A VARIABLE
    var html = '<ul>';   // THIS SETS UP EACH TASK AS AN UNORDERED LIST
    for (var i = 0; i < todos.length; i ++) {   // THIS DISPLAYS A TASK TO THE LIST IN THE ORDER THAT IT IS INPUTED
        html += '<li>' + todos[i] + '<button class="remove" id= "' + i + '">x</button></li>';   // THIS ALSO DISPLAYS THE TASK AS A LIST AND CREATES THE BUTTON WITH THE "x"
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;   // THIS DISPLAYS THE TASK AS A LIST

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

function add() {   // THIS FUNCTION ADDS THE INPUTED TASK TO THE get_todos FUNCTION ARRAY
    var task = document.getElementById('task').value;   // THIS TAKES THE INPUTED TASK AND CREATES A VARIABLE OF IT
    var todos = get_todos();
    todos.push(task);   // THIS ADDS A NEW TASK AT THE END OF THE ARRAY
    localStorage.setItem('todo', JSON.stringify(todos));   // THIS CONVERTS THE TASK INPUT TO A JSON STRING
    document.getElementById("task").value = "";
    show();
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}

document.getElementById('add').addEventListener('click', add);   // THIS DISPLAYS THE INPUTED TASK WHEN THE 'Add Item' BUTTON IS CLICKED
show();   // THIS WILL KEEP THE INPUTS DISPLAYED PERMANTALY ON THE SCREEN