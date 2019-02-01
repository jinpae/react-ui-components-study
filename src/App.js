import React, { Component } from 'react';
import './App.css';
import { Tab } from './components/Tab';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>React UI Components Study with Advanced Patterns</p>
          <ol>
            <li>
              <Tab />
            </li>
          </ol>
        </header>
      </div>
    );
  }
}

export default App;
