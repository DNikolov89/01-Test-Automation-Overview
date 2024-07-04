const Sum = require('./sum');

describe("Sum function tests that pass", () => {

    it('should return 3 when array is [1, 2]', () => {
        let array = [1, 2];
        let result = Sum(array);

        expect(result).toEqual(3);

        //Shorter syntaksys:
        //expect(Sum([1, 2])).toBe(3);
    });

    it('should return 10 when array is [5, 5]', () => {
        let array = [5, 5];
        let result = Sum(array);

        expect(result).toEqual(10);

        //Shorter syntaksys:
        //expect(Sum([5, 5])).toBe(10);
    });

    it('should not return 5 when array is [1, 2]', () => {
        let array = [1, 2];
        let result = Sum(array);

        expect(result).not.toEqual(5);
    });

    it('should return 0 when array is empty', () => {
        let array = [];
        let result = Sum(array);

        expect(result).toEqual(0);
    });

    it('should return 1 when array holds only [1]', () => {
        let array = [1];
        let result = Sum(array);

        expect(result).toEqual(1);
    });

    it('should concatenate array of strings', () => {
        let array = ["one", "two"];
        let result = Sum(array);

        expect(result).toEqual("onetwo");
    });
});

describe('Sum function tests that fail', () => {

    //this one is supposed to fail due to wrong expected result
    it('should return 2 is array is [1, 1]', () => {
        let array = [1, 1];
        let result = Sum(array);

        expect(result).toEqual(3);
    });

});