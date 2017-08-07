import React from 'react'
import Weather from './Weather.jsx'

const Detail = ({match, location}) => {
  const city = match.params.city
  const {
    date,
    description,
    humidity,
    icon,
    maxTemp,
    minTemp
  } = location.state
  return (
    <div className="text-center">
      <Weather imgUrl={icon} date={date}/>
      <div className="subTitle">{city}</div>
      <div className="subTitle">{description}</div>
      <div className="subTitle">{`humidity: ${humidity}`}</div>
      <div className="subTitle">{`minTemp: ${minTemp} degrees`}</div>
      <div className="subTitle">{`maxTemp: ${maxTemp} degrees`}</div>
    </div>
  )
}

export default Detail