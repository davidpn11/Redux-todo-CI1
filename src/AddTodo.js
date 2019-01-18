import React from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { addTodo } from './actions'
import styled from 'styled-components'
import { reactBlue, whiteSmoke } from './colors'

const StyledTodoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const StyledTodoInput = styled.input`
  border: 1px solid ${whiteSmoke};
  border-radius: 10px;
  outline: none;
  font-size: 16px;
  width: 100%;
  padding: 5px 10px;
  margin-right: 5px;
  &:focus {
    border: 1px solid ${reactBlue};
  }
`
export const StyledAddButton = styled.button`
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
      <StyledTodoWrapper>
        <StyledTodoInput
          type="text"
          value={input}
          onChange={event => this.useInput(event.target.value)}
          onKeyPress={({ key }) => key === 'Enter' && this.addInput()}
        />
        <StyledAddButton disabled={input === ''} onClick={this.addInput}>
          Add
        </StyledAddButton>
      </StyledTodoWrapper>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodo)
