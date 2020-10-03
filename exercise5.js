fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.reduce((co, todo) => {
     todo.completed ? co : co.push({ userId : todo.userId, title : todo.title }) 
     return co;
    }, []);
     console.log(completed);
  })
  .catch(function(err) { 
    console.log(err);
  });