import operate from '../logic/operate';

describe('Test addition function', () => {
  test('Adds 0 + 5 to equal 5', () => {
    expect(operate(0, 5, '+')).toBe('5');
  });
  test('adds 10 + 2 to equal 12', () => {
    expect(operate(10, 2, '+')).toBe('12');
  });
  test('adds 5 + 5 to equal 10', () => {
    expect(operate(5, 5, '+')).toBe('10');
  });
});

describe('Test subtraction function', () => {
  test('Subtracts 0 from 5 to equal 5', () => {
    expect(operate(5, 0, '-')).toBe('5');
  });
  test('Subtracts 10 from 2 to equal -8', () => {
    expect(operate(2, 10, '-')).toBe('-8');
  });
  test('Subtracts 5 from 5 to equal 0', () => {
    expect(operate(5, 5, '-')).toBe('0');
  });
});

describe('Test multiplication function', () => {
  test('Multiplies 0 by 5 to equal 0', () => {
    expect(operate(0, 5, 'x')).toBe('0');
  });
  test('Multiplies 2 by 10 to equal 0', () => {
    expect(operate(2, 10, 'x')).toBe('20');
  });
  test('Multiplies 5 by 5 to equal 25', () => {
    expect(operate(5, 5, 'x')).toBe('25');
  });
});

describe('Test division function', () => {
  test('Divides 0 by 5 to equal 0', () => {
    expect(operate(0, 5, '÷')).toBe('0');
  });
  test('Divides 2 by 10 to equal 0.2', () => {
    expect(operate(2, 10, '÷')).toBe('0.2');
  });
  test('Divides 5 by 5 to equal 1', () => {
    expect(operate(5, 5, '÷')).toBe('1');
  });
});

describe('Test modulo function', () => {
  test('Calculates 0 % 5 to equal 0', () => {
    expect(operate(0, 5, '%')).toBe('0');
  });
  test('Calculates 2 % 10 to equal 2', () => {
    expect(operate(2, 10, '%')).toBe('2');
  });
  test('Calculates 5 % 5 to equal 0', () => {
    expect(operate(5, 5, '%')).toBe('0');
  });
});
