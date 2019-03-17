import React, { Component } from 'react';
import './App.css';
import Button from './components/atoms/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <label>Test</label>
          <input type="text" />
          <label>Test</label>
          <input type="text" />
          <Button label="Enviar" />
        </form>
      </div>
    );
  }
}

export default App;
