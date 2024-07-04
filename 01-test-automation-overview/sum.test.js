const Sum = require('./sum');

test('Sum of [1, 2] should be 3', () => {
    expect(Sum([1, 2])).toBe(3);
});

test('Sum of an empty array should be 0', () => {
    expect(Sum([])).toBe(0);
});
