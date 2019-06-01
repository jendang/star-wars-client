import React from 'react';
import logo from './Assets/starwarslogo.png';
import './App.css';
import Navigation from '../src/Components/Navigation/Navigation'

class App extends React.Component {
  render(){
    return (
      <div>
        <header className="App-header">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          
        </main>
      </div>
    )

  }
}

export default App;
