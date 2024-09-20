// for checking if it';s working

const  todoList = JSON.parse(localStorage.getItem('todo')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
},{
  name: 'wash dishes',
dueDate: '2022-12-22'
}];

console.log(todoList);





renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++){if ()
    const todoObject = todoList[i];


    const {name,dueDate}  = todoObject;




    const html =`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button" onclick=" todoList.splice(${i}, 1);
     renderTodoList();">Delete</button>
    `;

    localStorage.setItem('todo',JSON.stringify(todoList));

  
    todoListHTML += html;
  
  }
  
  console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}



function addTodo(){
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;

  //push the item first and then 
  todoList.push({
    name,dueDate
  })

  //save it in the local storage
  localStorage.setItem('todo',JSON.stringify(todoList));


   console.log(todoList);
   inputElement.value = '';

   renderTodoList();



}
