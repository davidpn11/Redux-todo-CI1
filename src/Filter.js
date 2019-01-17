import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setFilter } from './actions'
import { reactBlue, whiteSmoke } from './colors'

const FilterWrapper = styled.div`
  margin: 20px 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Link = styled.a`
  width: 100%;
  text-align: center;
  border: 1px solid ${reactBlue};
  border-radius: 10px;
  text-decoration: none;
  outline: none;
  color: ${props => (props.active ? 'white' : reactBlue)};
  background-color: ${props => (props.active ? reactBlue : 'transparent')}
  font-size: 16px;
  padding: 5px 10px;
  margin: 0 10px;

  &:hover {
    background-color: ${reactBlue};
    color: white;
  }

`

function Filter({ setFilter, activeFilter }) {
  return (
    <FilterWrapper>
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
    </FilterWrapper>
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
