import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Api from '../utils/api'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: ''
    }
    this.handleChange = this
      .handleChange
      .bind(this)
  }

  handleChange(e) {
    const city = e.target.value
    this.setState(() => ({city}))
  }

  render() {
    const formClass = `pure-form text-center ${this.props.direction === 'col' && 'pure-form-stacked'}`
    return (
      <div className={formClass}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.city}
          placeholder="guangzhou"/>
        <Link
          className="pure-button button-search"
          to={{
          pathname: '/forcast',
          search: `?city=${this.state.city || 'guangzhou'}`
        }}>
          Get Weather
        </Link>
      </div>
    )
  }
}

Search.propTypes = {
  direction: PropTypes.string
}

Search.defaultProps = {
  direction: 'col'
}

export default Search