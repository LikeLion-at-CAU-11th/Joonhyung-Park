
import Star from "./Star.js";
import Todo from "./Todo.js"


for (let x=0; x<150; x++){
    new Star();
}

const input = document.querySelector('input');
input.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        if(input.value.includes(',')){
            const todos = input.value.split(',');
            todos.forEach((todo)=>{
                todo && new Todo(todo);
            })
        }else{
            new Todo(input.value);
        }

        input.value ="";
    }
})