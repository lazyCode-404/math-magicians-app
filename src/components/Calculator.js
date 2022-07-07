import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { calc: ['AC', '+/-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+'] };
  }

  render() {
    const { calc } = this.state;
    return (
      <div className="container">
        <div className="screen">0</div>
        <div className="btn-column">

          {calc.map((item) => (
            <div className="btn" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="bottom-column">
          <div className="btn">0</div>
          <div className="btn">.</div>
          <div className="btn-equal">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
