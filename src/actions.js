const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  CHECK_TODO: 'CHECK_TODO',
  SET_FILTER: 'SET_FILTER',
}

export const addTodo = todo => ({ type: ActionTypes.ADD_TODO, payload: todo })

export const toggleTodo = id => ({ type: ActionTypes.CHECK_TODO, payload: id })

export const setFilter = filter => ({
  type: ActionTypes.SET_FILTER,
  payload: filter,
})
