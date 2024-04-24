import {Question} from "./Question";

export class Game {
  private questions: Question[];

  constructor(questions: Question[]) {
    if (questions.length < 1)
      throw new ZeroQuestionsProvidedException();

    this.questions = questions;
  }

  getNextQuestion(): Question | undefined {
    return this.questions.find(question => question.answerByPlayer === undefined);
  }

  getNumberOfQuestions(): number {
    return this.questions.length;
  }

  setAnswerForQuestion(questionId: string, answer: string): void {
    const questionIndex = this.getQuestionIndexById(questionId);

    try {
      this.questions[questionIndex].answerByPlayer = answer;
    } catch (error) {
      throw new QuestionDoesNotExistException();
    }
  }

  private getQuestionIndexById(questionId: string): number {
    return this.questions.findIndex(question => question.id === questionId);
  }

  getNumberOfAnsweredQuestions(): number {
    return this.questions.filter(q => q.answerByPlayer !== undefined).length;
  }

  getMaxPossibleScore(): number {
    return this.getNumberOfQuestions();
  }

  getScore(): number {
    let score = 0;
    this.questions.filter(q => {
      if (q.answerByPlayer !== undefined && this.isCorrectAnswer(q.answerByPlayer, q.correctAnswer))
        score++
    });

    return score;
  }

  private isCorrectAnswer(answerByPlayer: string, correctAnswer: string): boolean {
    return Number(answerByPlayer.trim()) == Number(correctAnswer);
  }
}

export class ZeroQuestionsProvidedException extends Error {
}

export class QuestionDoesNotExistException extends Error {
}
