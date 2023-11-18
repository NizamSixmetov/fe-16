import { useEffect, useState } from 'react'
import './App.css'
import { IoAddCircleOutline } from 'react-icons/io5'
import { AiOutlineCheckCircle } from 'react-icons/ai'

function App() {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then((res) => res.json())
      .then((data) => setTodo(data))
      .catch((err) => console.log(err));
  }, [])
  const sendDataHandler = ()->{
    fetch("http://localhost:3000/todos", {
      method: "POST",
      header:{
        "Content-type": "application/json",
      },
      body: JSON.stringify(input)
    })
  }

  console.log(todo)
  return (
    <>
      <header>
        <h1>AbacaxiGuy's Todo List</h1>
      </header>

      <form>
        <input type="text" className="todo-input" maxLength="40" onChange={(e) => setInput(e.target.value)} />

        <button type='button' className="todo-button" onClick={sendDataHandler}>
          <IoAddCircleOutline />
        </button>

        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>

      <div className="todo-container">
        <ul className="todo-list">
          {todo.map((todo) =>
            <div key={todo.id} className={`todo`}>
              <li className="todo-item">{todo.title}</li>

              <button className="check-btn">
                <AiOutlineCheckCircle />
              </button>

              <button className="trash-btn">
                <i className="fas fa-trash" aria-hidden="true"></i>
              </button>
            </div>)}
        </ul>
      </div>
    </>
  )
}

export default App
