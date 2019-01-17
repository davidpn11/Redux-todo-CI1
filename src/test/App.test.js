import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import SingleTodoNoRedux from '../SingleTodoNoRedux'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

class Link extends React.Component {
  render() {
    return <div>{this.props.hide ? null : <a href={this.props.url} />}</div>
  }
}

describe('SingleTodo', () => {
  const wrapper = shallow(<SingleTodoNoRedux />)
  const input = wrapper.find('input')
  const addTodo = wrapper.find('button')
  it('check empty todos', () => {
    expect(wrapper.find('li').length).toBe(0)
  })
  it('add new todos', () => {
    input.simulate('change', { target: { value: 'newTodo' } })
    addTodo.simulate('click')
    expect(wrapper.find('li').length).toBe(1)
    input.simulate('change', { target: { value: 'todo 2' } })
    addTodo.simulate('click')
    expect(wrapper.find('li').length).toBe(2)
  })
  it('complete todo', () => {
    wrapper
      .find('li')
      .first()
      .simulate('click')
    expect(
      wrapper
        .find('li')
        .first()
        .hasClass('completed')
    ).toBe(true)
    expect(
      wrapper
        .find('li')
        .last()
        .hasClass('completed')
    ).toBe(false)
  })
})

describe('App', () => {
  const wrapper = shallow(<App />)

  it('has title', () => {
    expect(wrapper.find('h1').text()).toBe('Todos')
  })
  // it('add ')
})

describe('Link', () => {
  it('as url props', () => {
    const wrapper = shallow(<Link url="google.com" />)
    expect(wrapper.instance().props.url).toBe('google.com')
  })
  it('hide element', () => {
    const wrapper = shallow(<Link url="google.com" />)
    expect(wrapper.find('a').length).toBe(1)
    wrapper.setProps({ hide: true })
    expect(wrapper.find('a').length).toBe(0)
  })
})

// it('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App />, div)
//   ReactDOM.unmountComponentAtNode(div)
// })
