import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actions";
import "./App.css"

const App = ({ todos, addTodo, removeTodo }) => {

  console.log(todos, "todos")

  const [newTodo, setNewTodo] = useState('');

  const Handleremovetodos = (todoId) => {
    removeTodo(todoId);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo({ id: Date.now(), text: newTodo })
    }
    setNewTodo("")
  }

  return (
    <div className="App">
      <h1 className="apph1"> To-Do List</h1>
      <h5>(using Redux)</h5>

      <div>
        <input type="text" className="todo-input" value={newTodo} onChange={e => setNewTodo(e.target.value)}></input>
        <button className="add-todo-button" onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map(x => (
          <div key={x.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <li style={{ listStyleType: 'none', marginRight: '8px', marginBottom: '8px' }}>{x.text}</li>
            <button
              onClick={() => Handleremovetodos(x.id)}
              style={{
                padding: '8px',
                backgroundColor: '#ff6961',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              x
            </button>
          </div>
        ))}


      </ul>

    </div>
  );

}

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { addTodo, removeTodo })(App);
