fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const tcompleted = json.reduce((co, todo) => {
        if (todo.completed) {
            co[todo.userId] === undefined ? (co[todo.userId] = 1)
            : (co[todo.userId] += 1); 
        } 
        return co;
       }, {});
        console.log(tcompleted);
     })
  .catch(function(err) { 
    console.log(err);
  });