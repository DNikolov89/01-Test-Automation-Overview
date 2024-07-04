const Sum = require('./sum');

test('Sum of [1, 2] should be 3', () => {
    expect(Sum([1, 2])).toBe(3);
});

test('Sum of [5, 5] should be 10', () => {
    expect(Sum([5, 5])).toBe(10);
});

test('Sum of [1, 2] should not be 5', () => {
    expect(Sum([1, 2])).not.toBe(5);
});

test('Sum of an empty array should be 0', () => {
    expect(Sum([])).toBe(0);
});

test('Sum of an 1 should be 1', () => {
    expect(Sum([1])).toBe(1);
});

//this one must fail!
test('Sum of [1, 1] should be 2', () => {
    expect(Sum([1, 1])).toBe(3);
});