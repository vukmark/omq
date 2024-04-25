import {QuestionGenerator} from "./QuestionGenerator";
import {RandomNumberGenerator} from "./RandomNumberGenerator";

export class MathAdditionUpTo20Question implements QuestionGenerator {
    private firstAddition: number;
    private id: string;
    private secondAddition: number;

    constructor(id: string, numberGenerator: RandomNumberGenerator) {
        this.id = id;
        this.firstAddition = numberGenerator.getNumber(1, 19);
        const secondMax = 20 - this.firstAddition;
        this.secondAddition = numberGenerator.getNumber(1, secondMax);
    }

    getQuestion(): string {
        return this.firstAddition.toString() + '+' + this.secondAddition.toString();
    }

    getAnswer(): string {
        return (this.firstAddition + this.secondAddition).toString();
    }

    getId(): string {
        return this.id;
    }
}
