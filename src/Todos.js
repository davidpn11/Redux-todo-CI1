import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { toggleTodo } from './actions'
const Todo = styled.li`
  cursor: pointer;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`
function Todos({ todos, toggleTodo }) {
  console.log(todos)
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          completed={todo.completed}
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.value}
        </Todo>
      ))}
    </ul>
  )
}

function filterTodos(todos, filter) {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed)
    case 'completed':
      return todos.filter(todo => todo.completed)
    case 'all':
    default:
      return todos
  }
}

function mapStateToProps(state) {
  return {
    todos: filterTodos(state.todos, state.filter),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: id => dispatch(toggleTodo(id)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
