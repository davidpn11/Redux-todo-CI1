import React, { Component } from 'react'
import uuid from 'uuid'
import './styles.css'

export default class SingleTodoNoRedux extends Component {
  state = {
    todos: [],
    input: '',
  }

  toggleTodo = id => {
    const todos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    this.setState({ todos })
  }

  getTodos() {
    const { todos } = this.state
    return todos.map(todo => (
      <li
        onClick={() => this.toggleTodo(todo.id)}
        className={todo.completed ? 'completed' : ''}
        key={todo.id}
      >
        {todo.value}
      </li>
    ))
  }

  addInput = () => {
    const { input } = this.state
    const todo = {
      id: uuid.v4(),
      value: input,
      completed: false,
    }
    this.setState(prev => ({ todos: [...prev.todos, todo] }))
  }

  render() {
    const { input } = this.state
    return (
      <div>
        <h2>{input || 'ok'}</h2>
        <input
          type="text"
          value={input}
          onChange={event => this.setState({ input: event.target.value })}
        />
        <button onClick={this.addInput}>Add</button>
        <ul>{this.getTodos()}</ul>
      </div>
    )
  }
}
