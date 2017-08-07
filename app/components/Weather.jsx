import React from 'react'
import PropTypes from 'prop-types'

const Weather = ({imgUrl, date, onClick}) => {
  return (
    <div className="container-weather" onClick={onClick}>
      <img className="weather-icon" src={imgUrl} alt="weather icon"/>
      <div className="subTitle">{date}</div>
    </div>
  )
}

Weather.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Weather