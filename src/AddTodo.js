import React from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { addTodo } from './actions'
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
        <h2>{input || 'ok'}</h2>
        <input
          type="text"
          value={input}
          onChange={event => this.useInput(event.target.value)}
        />
        <button onClick={this.addInput}>Add</button>
      </div>
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
