const { add } = require('./app');

// Test Case 1: Unit Test (Success)
test('should add two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

// Test Case 2: Unit Test (Failure / Edge Case)
test('should return Error for non-numeric input', () => {
  expect(add('a', 'b')).toBe('Error');
});

// Test Case 3: Unit Test (Success - zero)
test('should handle zero correctly', () => {
  expect(add(5, 0)).toBe(5);
});

// Test Case 4: Unit Test (Failure - one input)
test('should return Error for undefined input', () => {
  expect(add(5)).toBe('Error');
});
