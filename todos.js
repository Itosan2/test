const todos = [
  {
    id: 1,
    text: "Dispose trash ffdfdfdfd",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];

//console.log(todos[1].text)

/*
//json formatter
//this how backend send text to database

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/

/*
for(let todo of todos){
    console.log(todo.text);
}
*/

// forEach, map, filter

/*
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todoCompleted);

*/

const todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleted);
