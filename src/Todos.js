import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { toggleTodo } from './actions'
import { reactBlue } from './colors'
const TodoList = styled.ul`
  list-style: none;
  color: ${reactBlue};
`

const Todo = styled.li`
  cursor: pointer;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  opacity: ${props => (props.completed ? 0.6 : 1)};
`
function Todos({ todos, toggleTodo }) {
  return (
    <TodoList>
      {todos.map(todo => (
        <Todo
          completed={todo.completed}
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.value}
        </Todo>
      ))}
    </TodoList>
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
    toggleTodo: id => {
      dispatch({ type: 'TOGGLE_TODO', payload: id })
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
