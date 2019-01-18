import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('App', () => {
  it('render App', () => {
    const wrapper = shallow(<App />)
  })
})

// describe('SingleTodo', () => {
//   const wrapper = shallow(<SingleTodoNoRedux />)
//   const input = wrapper.find('input')
//   const addTodo = wrapper.find('button')
//   it('check empty todos', () => {
//     expect(wrapper.find('li').length).toBe(0)
//   })
//   it('add new todos', () => {
//     input.simulate('change', { target: { value: 'newTodo' } })
//     addTodo.simulate('click')
//     expect(wrapper.find('li').length).toBe(1)
//     input.simulate('change', { target: { value: 'todo 2' } })
//     addTodo.simulate('click')
//     expect(wrapper.find('li').length).toBe(2)
//   })
//   it('complete todo', () => {
//     wrapper
//       .find('li')
//       .first()
//       .simulate('click')
//     expect(
//       wrapper
//         .find('li')
//         .first()
//         .hasClass('completed')
//     ).toBe(true)
//     expect(
//       wrapper
//         .find('li')
//         .last()
//         .hasClass('completed')
//     ).toBe(false)
//   })
// })
