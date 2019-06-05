import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import Particles from 'react-particles-js'
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Films from './Components/Films/Films'
import Characters from './Components/Characters/Characters'
import Planets from './Components/Planets/Planets'
import Home from './Components/Home/Home'
import history from './history'

const particlesOption = { // background
  "particles": {
    "number": {
        "value": 60,
        "density": {
            "enable": true,
            "value_area": 1500
        }
    },
    "line_linked": {
        "enable": true,
        "opacity": 0.02
    },
    "move": {
        "direction": "right",
        "speed": 0.05
    },
    "size": {
        "value": 1
    },
    "opacity": {
        "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.05
        }
    }
  },
  "interactivity": {
      "events": {
          "onclick": {
              "enable": true,
              "mode": "push"
          }
      },
      "modes": {
          "push": {
              "particles_nb": 1
          }
      }
  },
  "retina_detect": true
}

class App extends React.Component {
  render(){
    return (
      <Router history={history}>
        <div className="ui container">
          <Particles params={particlesOption} className="particles" />
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/films" exact component={Films} />
            <Route path="/films/:title" exact component={Characters} />
            <Route path="/planets" exact component={Planets} />
          </Switch>
        </div>
      </Router>
    )

  }
}

export default App;
