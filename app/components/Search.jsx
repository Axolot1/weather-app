import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Api from '../utils/api'


class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      city: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
 
  handleChange(e){
    const city = e.target.value
    this.setState(() => ({city}))
  }

  handleSubmit(e){
    e.preventDefault()
    const city = this.state.city
    if(!city){
      return ;
    }
    Api.getWeatherForCity(city)
  }
  

  render() {
    const formClass = `pure-form ${this.props.direction === 'col' && 'pure-form-stacked'}`
    return (
      <form onSubmit={this.handleSubmit} className={formClass}>
        <input 
          type="text" 
          onChange={this.handleChange}
          value={this.state.city}
          placeholder="guangzhou"/>
        <button type="submit" className="pure-button button-search">
          Get Weather
        </button>
      </form>
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