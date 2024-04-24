export interface QuestionGenerator {
    getId(): string;

    getQuestion(): string;

    getAnswer(): string;
}
