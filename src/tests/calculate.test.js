import calculate from '../logic/calculate';

describe('Testing number buttons', () => {
  test('Test one', () => {
    const obj = { total: 0, next: null, operation: null };
    expect(calculate(obj, '4')).toEqual({ next: '4', total: null });
  });
  test('Test two', () => {
    const obj = { total: '66', next: null, operation: null };
    expect(calculate(obj, '5')).toEqual({ next: '5', total: null });
  });
  test('Test three', () => {
    const obj = { total: 45, next: null, operation: '+' };
    expect(calculate(obj, '5')).toEqual({ next: '5', total: 45, operation: '+' });
  });
});

describe('Testing other buttons', () => {
  test('Test one', () => {
    const obj = { total: 0, next: null, operation: null };
    expect(calculate(obj, '+')).toEqual({ operation: '+' });
  });
  test('Test two', () => {
    const obj = { total: '66', next: null, operation: null };
    expect(calculate(obj, '-')).toEqual({ operation: '-', total: '66', next: null });
  });
  test('Testing number buttons', () => {
    const obj = { total: 45, next: null, operation: '+' };
    expect(calculate(obj, 'AC')).toEqual({ next: null, total: null, operation: null });
  });
});
