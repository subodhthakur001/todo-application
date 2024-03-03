import { CreateTodo } from "./components/CreateTodo"
import { useState } from "react";
import { Todos } from "./components/Todos"



function App() {
  const [todos,setTodos] = useState([]);
  fetch("http://localhost:3000/all-todos")
  .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
  })


  return <div>
    <CreateTodo />
    <Todos todos={todos}/> 
   </div>
    
      
}

export default App
