import react, { useState } from "react"
import './App.css';

function App() {
  const [addTodo, setAddTodo] = useState("")
  const [todos, setTodos] = useState([])
  const submitNewTodo = (e) => {
    e.preventDefault()
    if (addTodo.length === 0){
      return
    }

    const todoList = {
      text: addTodo,
      done: false
    }
    setTodos([...todos, todoList])
    setAddTodo("")
  }
  const todoDelete = (delIdx) => {
    const todoFilter = todos.filter((todo, idx)=> {
      return idx !== delIdx
    })
    setTodos(todoFilter)
  }

  const isitdone = (idx) => {
    const newTodos = todos.map((todo,i) => {
      if (idx === i){
        todo.done = !todo.done
      }
      return todo
    })
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <form onSubmit={(e)=> {submitNewTodo(e)}}>
        <input type="text" onChange={(e) => {setAddTodo(e.target.value)}} value={addTodo}/>
      <br/><br/>
      <button>Add</button>
      <br/><br/>
      </form>
      {todos.map((todo, idx) => {
        var classname = []
        if (todo.done){
          classname.push("line-through")
        }
        return(
          <div key={idx}>
            <span className={classname.join(" ")}>{todo.text} </span>
            <input onChange={(e)=> isitdone(idx)} checked={todo.done} type="checkbox" />
            <button onClick={(e) => {todoDelete(idx)}}>Delete</button>
            <br/><br/>
          </div>
        )
      })}
    </div>
  );
}

export default App;
