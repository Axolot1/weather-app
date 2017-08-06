import React, {Component} from 'react'
import Header from './Header.jsx'
import SearchWeather from './SearchWeather.jsx'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>

          <Switch>
            <Route exact path='/' component={SearchWeather}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App