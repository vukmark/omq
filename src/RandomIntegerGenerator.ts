import {RandomNumberGenerator} from "./RandomNumberGenerator";

export class RandomIntegerGenerator implements RandomNumberGenerator {
    getNumber(min: number, max: number): number {
        this.validateMinAndMaxNumbers(min, max);
        return this.getRandomIntegerWithMaxAndMixInclusive(min, max);
    }

    private validateMinAndMaxNumbers(min: number, max: number) : void {
        if(!Number.isInteger(min) || !Number.isInteger(max))
            throw new InvalidIntegerException();

        if (max < min)
            throw new InvalidNumberRangeException();
    }

    private getRandomIntegerWithMaxAndMixInclusive(min: number, max: number) : number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export class InvalidIntegerException extends Error {}
export class InvalidNumberRangeException extends Error {}
