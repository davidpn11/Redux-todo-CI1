import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setFilter } from './actions'
const Link = styled.a`
  margin-left: 5px;
`

function Filter({ setFilter }) {
  return (
    <div>
      <Link onClick={() => setFilter('all')} href="#">
        All
      </Link>
      <Link onClick={() => setFilter('active')} href="#">
        Active
      </Link>
      <Link onClick={() => setFilter('completed')} href="#">
        Completed
      </Link>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: filter => dispatch(setFilter(filter)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Filter)
