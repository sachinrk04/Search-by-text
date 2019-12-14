import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HideableText from './components/HideableText/HideableText';
import AutoCompleteText from './components/AutoCompleteText/AutoCompleteText';
import countries from './countries';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React</h1>
        </header>
        <div className="App-content">
          <HideableText text="Dynamic Text!" />
        </div>
        <div className="App-auto">
          <AutoCompleteText items={countries} />
          <br/>
          <br/>
          <AutoCompleteText items={['Sachin', 'Sudeep', 'Rishabh', 'Ram']} /> 
        </div>
      </div>
    );
  }
}

export default App;
