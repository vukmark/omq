import {Question} from "./Question";
import {QuestionGenerator} from "./QuestionGenerator";

export class QuestionListGenerator {
    private howMuchQuestionsToGenerate: number;
    private questions: Question[] = [];
    private questionGenerator: QuestionGenerator;

    constructor(howMuchQuestionsToGenerate: number, questionGenerator: QuestionGenerator) {
        if (howMuchQuestionsToGenerate < 1)
            throw new InvalidNumberOfQuestionsForGenerateException();

        this.questionGenerator = questionGenerator;
        this.howMuchQuestionsToGenerate = howMuchQuestionsToGenerate;
        this.generateQuestions();
    }

    getQuestions(): Question[] {
        return this.questions;
    }

    private generateQuestions(): void {
        for (let x = 0; this.howMuchQuestionsToGenerate > x; x++) {
            this.questions.push({
                id: this.questionGenerator.getId(),
                question: this.questionGenerator.getQuestion(),
                correctAnswer: this.questionGenerator.getAnswer()
            })
        }
    }
}

export class InvalidNumberOfQuestionsForGenerateException extends Error {
}
