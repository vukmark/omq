import {RandomNumberGenerator} from "../../domain/RandomNumberGenerator";
import {MathAdditionUpTo20Question} from "../../domain/MathAdditionUpTo20Question";
import Mock = jest.Mock;

describe('test math additions up to 20 question generator', () => {
    it('it returns question in proper form', () => {
        const mocRandNumber: jest.Mocked<RandomNumberGenerator> = {
            getNumber: jest.fn()
        };
        (mocRandNumber.getNumber as Mock).mockReturnValueOnce(2);
        (mocRandNumber.getNumber as Mock).mockReturnValueOnce(2);
        const generator = new MathAdditionUpTo20Question(mocRandNumber);
        generator.generateQuestionAndAnswer();
        expect(generator.getQuestion()).toEqual('2+2');

        (mocRandNumber.getNumber as Mock).mockReturnValueOnce(2);
        (mocRandNumber.getNumber as Mock).mockReturnValueOnce(3);
        generator.generateQuestionAndAnswer();
        expect(generator.getQuestion()).toEqual('2+3');
    });

    it('returns answer expected answer', () => {
        const mocRandNumber: jest.Mocked<RandomNumberGenerator> = {
            getNumber: jest.fn()
        };
        (mocRandNumber.getNumber as Mock).mockReturnValueOnce(2);
        (mocRandNumber.getNumber as Mock).mockReturnValueOnce(3);
        const generator = new MathAdditionUpTo20Question(mocRandNumber);
        generator.generateQuestionAndAnswer();
        expect(generator.getAnswer()).toEqual("5");
    });
});
