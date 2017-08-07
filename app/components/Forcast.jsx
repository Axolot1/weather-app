import React, {Component} from 'react'
import Api from '../utils/api'
import queryString from 'query-string'
import Loading from './Loading.jsx'
import Weather from './Weather.jsx'

class Forcast extends Component {

  constructor(props) {
    super(props)
    this.state = {
      city: '',
      weathers: null
    }
  }

  componentDidMount() {
    const params = queryString.parse(this.props.location.search)
    Api
      .getWeatherForCity(params.city)
      .then(({city, weathers}) => {
        this.setState(() => {
          return {city, weathers}
        });
      });
  }

  handleWeatherClick(weather){
    this.props.history.push({
      pathname: `/detail/${this.state.city}`,
      state: weather
    })
  }

  render() {
    const {city, weathers} = this.state
    return (
      <div className="container--forcast">
        {weathers
          ? <div>
              <h2 className="text-center subTitle">{city}</h2>
              <div className="forcast-list">
                {weathers.map(w => {
                  return <Weather key={w.date} 
                          onClick={() => this.handleWeatherClick(w)}
                          imgUrl={w.icon} 
                          date={w.date}/>
                })}
              </div>
            </div>
          : <Loading/ >}
      </div>
    )
  }
}

export default Forcast