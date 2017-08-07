import React, {Component} from 'react'
import Header from './Header.jsx'
import SearchWeather from './SearchWeather.jsx'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Forcast from './Forcast.jsx'
import Detail from './Detail.jsx'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>

          <Switch>
            <Route exact path='/' component={SearchWeather}/>
            <Route path='/forcast' component={Forcast}/>
            <Route path='/detail/:city' component={Detail} />
          </Switch>
        </div>

      </BrowserRouter>
    )
  }
}

export default App