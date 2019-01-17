import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setFilter } from './actions'
import { reactBlue, whiteSmoke } from './colors'
const Link = styled.a`
  border: 1px solid ${reactBlue};
  border-radius: 10px;
  text-decoration: none;
  outline: none;
  color: ${props => (props.active ? 'white' : reactBlue)};
  background-color: ${props => (props.active ? reactBlue : 'transparent')}
  font-size: 16px;
  padding: 5px 10px;
  margin-left: 5px;

  &:hover {
    background-color: ${reactBlue};
    color: white;
  }

`

function Filter({ setFilter, activeFilter }) {
  return (
    <div>
      <Link
        onClick={() => setFilter('all')}
        href="#"
        active={activeFilter === 'all'}
      >
        All
      </Link>
      <Link
        onClick={() => setFilter('active')}
        href="#"
        active={activeFilter === 'active'}
      >
        Active
      </Link>
      <Link
        onClick={() => setFilter('completed')}
        href="#"
        active={activeFilter === 'completed'}
      >
        Completed
      </Link>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    activeFilter: state.filter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: filter => dispatch({ type: 'SET_FILTER', payload: filter }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
