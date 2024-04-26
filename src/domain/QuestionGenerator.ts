export interface QuestionGenerator {
    generateQuestionAndAnswer() : void;

    getQuestion(): string;

    getAnswer(): string;
}
