import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import './styles.css'
import AddTodo from './AddTodo'
import Todos from './Todos'
import Filter from './Filter'
import styled from 'styled-components'
const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Content = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin: 20px 0;
  align-items: center;
`

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Content>
          <AddTodo />
          <Todos />
        </Content>
        <Filter />
      </Wrapper>
    </Provider>
  )
}

export default App
