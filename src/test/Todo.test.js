import React from 'react'
import ReactDOM from 'react-dom'
import { AddTodo, StyledAddButton, StyledTodoInput } from '../AddTodo'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('AddTodo', () => {
  it('call addTodo', () => {
    const props = {
      addTodo: jest.fn(),
    }
    const wrapper = shallow(<AddTodo {...props} />)
    wrapper
      .find(StyledTodoInput)
      .simulate('change', { target: { value: 'david' } })
    wrapper.find(StyledAddButton).simulate('click')
    expect(props.addTodo).toHaveBeenCalledWith({
      value: 'david',
      completed: false,
      id: expect.any(String),
    })
  })
})
