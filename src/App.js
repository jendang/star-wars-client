import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import logo from './Assets/starwarslogo.png';
import './App.css';
import Navigation from '../src/Components/Navigation/Navigation'
import Films from '../src/Components/Films/Films'


class App extends React.Component {
  render(){
    return (
      <div className="ui container">
        <Router>
          <div className="ui container">
            <Navigation />
            <Switch>
              <Route path="/" exact component={Films} />
            </Switch>
          </div>
        </Router>
      </div>
    )

  }
}

export default App;
