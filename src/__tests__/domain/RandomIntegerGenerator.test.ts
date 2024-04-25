import {InvalidIntegerException, InvalidNumberRangeException, RandomIntegerGenerator} from "../../domain/RandomIntegerGenerator";

describe('test random integer generator', () => {
    let generator: RandomIntegerGenerator;

    beforeEach(() => {
        generator = new RandomIntegerGenerator();
    })
    it('throw error if min number is not an integer', () => {
        expect(() => generator.getNumber(1.2, 2)).toThrow(InvalidIntegerException);
    })

    it('throw error if max number is not an integer', () => {
        expect(() => generator.getNumber(1, 3.2)).toThrow(InvalidIntegerException);
    })

    it('throw error if min is bigger than max', () => {
        expect(() => generator.getNumber(2, 1)).toThrow(InvalidNumberRangeException);
    })

    it('returns less than 20 and greater than 0', () => {
        const n1 = generator.getNumber(1, 19);
        expect(n1).toBeGreaterThan(0);
        expect(n1).toBeLessThan(20);

        const n2 = generator.getNumber(10, 20)
        expect(n2).toBeGreaterThan(9);
        expect(n2).toBeLessThan(21);
    })
})
