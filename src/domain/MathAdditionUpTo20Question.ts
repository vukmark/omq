import {QuestionGenerator} from "./QuestionGenerator";
import {RandomNumberGenerator} from "./RandomNumberGenerator";

export class MathAdditionUpTo20Question implements QuestionGenerator {
    private firstAddition: number = 0;
    private secondAddition: number = 0;
    private numberGenerator: RandomNumberGenerator;

    constructor(numberGenerator: RandomNumberGenerator) {
        this.numberGenerator = numberGenerator;
    }

    generateQuestionAndAnswer() {
        this.firstAddition = this.numberGenerator.getNumber(1, 19);
        const secondMax = 20 - this.firstAddition;
        this.secondAddition = this.numberGenerator.getNumber(1, secondMax);
    }

    getQuestion(): string {
        return this.firstAddition.toString() + '+' + this.secondAddition.toString();
    }

    getAnswer(): string {
        return (this.firstAddition + this.secondAddition).toString();
    }
}
