const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList =  document.querySelector(".js-toDoList");

const TODOS_LS='toDos';
let toDos =[];

function filterFn(toDo){   // filterFn . 
    return toDo.id === 1;
}

function deleteToDo(event){         // 타겟 만들기
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);       // . removeChild
    const cleanToDos = toDos.filter(function(toDo){     // filter를 이용하여 새로운 array만들기. foreach todo.
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos; 
    saveToDos(toDos);  
}

function paintToDo(text){
const li = document.createElement("li"); // element 생성.
const delBtn = document.createElement("button");
const span = document.createElement("span");
const newId = toDos.length + 1;
    delBtn.innerText="❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    li.id = newId;
    li.appendChild(delBtn); 
    li.appendChild(span);
    toDoList.appendChild(li);
    const toDoObj ={
        text: text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
    
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";

}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !==null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(doList){
            paintToDo(doList.text);
        });
        
    } else {

    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();