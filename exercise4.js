fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.reduce((co, todo) => 
          todo.completed ? co+1 : co,0)
      console.log(completed)
    })
  .catch(function(err) { 
    console.log(err);
  });