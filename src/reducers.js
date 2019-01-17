import { combineReducers } from 'redux'

const filterTypes = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
}

function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

function filterReducer(state = filterTypes.ALL, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
})
export default rootReducer
