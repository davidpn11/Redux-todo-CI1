import React, { useState } from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { addTodo } from './actions'
import styled from 'styled-components'
import { reactBlue, whiteSmoke } from './colors'

const TodoInput = styled.input`
  border: 1px solid ${whiteSmoke};
  border-radius: 10px;
  outline: none;
  font-size: 16px;
  padding: 5px 10px;
  margin-right: 5px;
  &:focus {
    border: 1px solid ${reactBlue};
  }
`
const AddButton = styled.button`
  border: 1px solid ${reactBlue};
  border-radius: 10px;
  background-color: transparent;
  color: ${reactBlue};
  font-size: 16px;
  padding: 5px 10px;
  &:disabled {
    border: 1px solid ${whiteSmoke};
    color: ${whiteSmoke};
    &:hover {
      background-color: transparent;
      color: ${whiteSmoke};
    }
  }
  &:hover {
    background-color: ${reactBlue};
    color: white;
  }
`

export class AddTodo extends React.Component {
  state = {
    input: '',
  }
  useInput = input => {
    this.setState({ input })
  }

  addInput = () => {
    const { input } = this.state
    const todo = {
      id: uuid.v4(),
      value: input,
      completed: false,
    }
    this.props.addTodo(todo)
    this.setState({ input: '' })
  }
  render() {
    const { input } = this.state
    return (
      <div>
        <TodoInput
          type="text"
          value={input}
          onChange={event => this.useInput(event.target.value)}
        />
        <AddButton disabled={input === ''} onClick={this.addInput}>
          Add
        </AddButton>
      </div>
    )
  }
}
// export function AddTodo({ addTodo }) {
//   const [input, useInput] = useState('')
//   const addInput = () => {
//     const todo = {
//       id: uuid.v4(),
//       value: input,
//       completed: false,
//     }
//     addTodo(todo)
//     useInput('')
//   }

//   return (
//     <div>
//       <h2>{input || 'ok'}</h2>
//       <input
//         type="text"
//         value={input}
//         onChange={event => useInput(event.target.value)}
//       />
//       <button onClick={addInput}>Add</button>
//     </div>
//   )
// }

function mapDispatchToProps(dispatch) {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodo)
