import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

  // return (
    // <div className="App">
    //  <h1>Hello World</h1>
    // </div>
    return React.createElement(
      'div',
      null,
      'h1',   
      'Hello world!'
    )
  }
}
export default App;
