import React from 'react'
import ReactDOM from 'react-dom'
import { AddTodo } from '../AddTodo'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import uuid from 'uuid'

configure({ adapter: new Adapter() })

describe('AddTodo', () => {
  it('call addTodo', () => {
    const id = uuid.v4()
    const props = {
      addTodo: jest.fn(),
    }
    const wrapper = shallow(<AddTodo {...props} />)
    wrapper.find('input').simulate('change', { target: { value: 'david' } })
    wrapper.find('button').simulate('click')
    expect(props.addTodo).toHaveBeenCalledWith({
      value: 'david',
      completed: false,
      id: expect.any(String),
    })
  })
})
