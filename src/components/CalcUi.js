import PropTypes from 'prop-types';

const CalcUi = ({
  operate, total, operation, next,
}) => (
  <div className="calc-container">
    <p className="result">
      <span>{total}</span>
      <span>{operation}</span>
      <span>{next}</span>
    </p>
    <button type="button" className="content-span position" name="AC" onClick={(e) => operate(e.target.name)}>
      AC
    </button>
    <button type="button" className="content-span position" name="+/-" onClick={(e) => operate(e.target.name)}>+/-</button>
    <button type="button" className="content-span position" name="%" onClick={(e) => operate(e.target.name)}>%</button>
    <button type="button" name="÷" className="position aside" onClick={(e) => operate(e.target.name)}>÷</button>
    <button
      className="content-span position"
      type="button"
      name="7"
      onClick={(e) => operate(e.target.name)}
    >
      7
    </button>
    <button type="button" name="8" className="content-span position" onClick={(e) => operate(e.target.name)}>8</button>
    <button type="button" className="content-span position" name="9" onClick={(e) => operate(e.target.name)}>9</button>
    <button name="x" type="button" className="position aside" onClick={(e) => operate(e.target.name)}>x</button>
    <button name="4" type="button" className="content-span position" onClick={(e) => operate(e.target.name)}>4</button>
    <button name="5" type="button" className="content-span position" onClick={(e) => operate(e.target.name)}>5</button>
    <button name="6" type="button" className="content-span position" onClick={(e) => operate(e.target.name)}>6</button>
    <button name="-" type="button" className="position aside" onClick={(e) => operate(e.target.name)}>-</button>
    <button type="button" name="1" className="content-span position" onClick={(e) => operate(e.target.name)}>1</button>
    <button type="button" name="2" className="content-span position" onClick={(e) => operate(e.target.name)}>2</button>
    <button type="button" name="3" className="content-span position" onClick={(e) => operate(e.target.name)}>3</button>
    <button type="button" name="+" className="position aside" onClick={(e) => operate(e.target.name)}>+</button>
    <button type="button" name="0" className="zero position" onClick={(e) => operate(e.target.name)}>0</button>
    <button type="button" name="." className="content-span position" onClick={(e) => operate(e.target.name)}>.</button>
    <button type="button" name="=" className="position aside" onClick={(e) => operate(e.target.name)}>=</button>
  </div>
);
export default CalcUi;

// props validation
CalcUi.propTypes = {
  operate: PropTypes.func,
  total: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  operation: PropTypes.string,
  next: PropTypes.string,
};

CalcUi.defaultProps = {
  operate: 'unknown',
  total: 0,
  operation: 0,
  next: 0,
};
