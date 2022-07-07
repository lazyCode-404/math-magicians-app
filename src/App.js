import React from 'react';
import './Calculator.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
