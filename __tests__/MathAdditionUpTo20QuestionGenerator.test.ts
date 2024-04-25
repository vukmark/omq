import {RandomNumberGenerator} from "../src/RandomNumberGenerator";
import {MathAdditionUpTo20Question} from "../src/MathAdditionUpTo20Question";
import Mock = jest.Mock;

describe('test math additions up to 20 question generator', () => {
    it('it returns question in proper form', () => {
        const mocRandNumber: jest.Mocked<RandomNumberGenerator> = {
            getNumber: jest.fn()
        };
        (mocRandNumber.getNumber as Mock).mockReturnValueOnce(2);
        (mocRandNumber.getNumber as Mock).mockReturnValueOnce(2);
        const generator = new MathAdditionUpTo20Question("id", mocRandNumber);
        expect(generator.getQuestion()).toEqual('2+2');

        (mocRandNumber.getNumber as Mock).mockReturnValueOnce(2);
        (mocRandNumber.getNumber as Mock).mockReturnValueOnce(3);
        const gen2 = new MathAdditionUpTo20Question("id", mocRandNumber);
        expect(gen2.getQuestion()).toEqual('2+3');
    });

    it('returns answer expected answer', () => {
        const mocRandNumber: jest.Mocked<RandomNumberGenerator> = {
            getNumber: jest.fn()
        };
        (mocRandNumber.getNumber as Mock).mockReturnValueOnce(2);
        (mocRandNumber.getNumber as Mock).mockReturnValueOnce(3);
        const generator = new MathAdditionUpTo20Question("id", mocRandNumber);
        expect(generator.getAnswer()).toEqual("5");
    });

    it('return id same as passed to constructor', () => {
        const mocRandNumber: jest.Mocked<RandomNumberGenerator> = {
            getNumber: jest.fn()
        };
        const generator = new MathAdditionUpTo20Question("id", mocRandNumber);
        expect(generator.getId()).toEqual("id");
    });
});
