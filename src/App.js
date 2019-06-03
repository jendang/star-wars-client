import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
// import logo from './Assets/starwarslogo.png';
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Films from './Components/Films/Films'
import Characters from './Components/Characters/Characters'
import Planets from './Components/Planets/Planets'
import Home from './Components/Home/Home'
import history from './history'

class App extends React.Component {
  render(){
    return (
      // <div className="App" >
        // <div className="app ui container">
          <Router history={history}>
            <div className="ui container">
              <Navigation />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/films" exact component={Films} />
                <Route path="/films/:title" exact component={Characters} />
                <Route path="/planets" exact component={Planets} />
              </Switch>
            </div>
          </Router>
        // </div>
      // </div>
    )

  }
}

export default App;
