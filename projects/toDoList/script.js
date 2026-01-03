//adding task to list

function addTask() {
    
    const place = document.querySelector("#list-items");
    const unListItem = document.createElement("li");
    let task = document.querySelector("input").value;
    
    if (task){
        const data = document.createTextNode(task);
        unListItem.appendChild(data);
        place.appendChild(unListItem);
        document.getElementById("entered-task").value = "";
    }
}

//adding event to listen enter key press.
let input=document.querySelector("input");
input.addEventListener('keypress', function(e) {
    if (e.key=="Enter") {
        addTask();
    }
})

var delTask=null;
const ul = document.querySelector("#list-items");
ul.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') // CHECK IF EVENT IS OCCURED BY LI.[RETURNS THE NAME OF DOM ELEMENT IN UPPERCASE ]
    {   
        ul.querySelectorAll('li').forEach(li=>li.style.backgroundColor="");
        e.target.style.backgroundColor="lightgray";
        delTask=(e.target); //store the selected task to later check , when button is clicklwed to delete
    }
})

// function to remove a task
function removeTask() {
    if (delTask) {
        delTask.remove();
    }
}
