import React, { Component} from 'react'
import PropTypes from 'prop-types'
import Search from './Search.jsx'

class SearchWeather extends Component {
  constructor (props) {
    super(props)
    this.state = {
      city: ''
    }
  }

  render () {
    return (
      <div className="container--search">
        <h1 className="promt">Enter a city and state</h1>
        <Search />
      </div>
    )
  }
}

SearchWeather.propTypes = {

}

export default SearchWeather