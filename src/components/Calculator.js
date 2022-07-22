import { useState } from 'react';
import calculate from '../logic/calculate';
import CalcUi from './CalcUi';

const Calculator = () => {
  const [value, setValue] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const { total, next, operation } = value;

  // handle click function
  const handleKeyPress = (buttonName) => {
    setValue({ ...value, ...calculate(value, buttonName) });
  };

  return (
    <CalcUi
      operate={handleKeyPress}
      total={total}
      next={next}
      operation={operation}
    />
  );
};

export default Calculator;
