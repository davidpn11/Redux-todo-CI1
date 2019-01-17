import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import './styles.css'
import AddTodo from './AddTodo'
import Todos from './Todos'
import Filter from './Filter'
const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo />
        <Todos />
        <Filter />
      </div>
    </Provider>
  )
}

export default App
