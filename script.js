const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("task container");

function addTask(){
    if(inputBox.value == ''){
        alert('please enter something');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
//this is event listner for performing the delete and append the task to list as a child
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false);
//this function is for saving the data or task in the browser even if the browser is refreshed 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//this function is for showing the list of the tasks in list or task container
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

