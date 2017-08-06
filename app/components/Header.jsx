import React from 'react'
import Search from './Search.jsx'
import PropTypes from 'prop-types'

const Header = props => {
  return (
    <div className="header">
      <h1 className="title">Open Weather</h1>
      <Search direction='row'/>
    </div>
  )
}

Header.propTypes = {
  
}

export default Header