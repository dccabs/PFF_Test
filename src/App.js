import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import PlayerPage from './containers/PlayerPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pro Football Focus Test Exercise</h1>
        </header>
        <div>
          <Router>
            <div>
              <Route exact path="/" component={HomePage} />
              <Route path="/player/:id" component={PlayerPage} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
