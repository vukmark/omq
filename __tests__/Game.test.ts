import {QuestionDoesNotExistException, Game, ZeroQuestionsProvidedException} from "../src/Game";
import {Question} from "../src/Question";

describe('test simple math game generator', () => {
  let game: Game;
  beforeEach(() => {
    const threeQuestions: Question[] = [
      {id: '1', question: '2+2', correctAnswer: "4"},
      {id: '2', question: '3+3', correctAnswer: "6"},
      {id: '3', question: '4+3', correctAnswer: "7"},
    ];
    game = new Game(threeQuestions);
  })
  it('throws error if number of question is zero or less', () => {
    expect(() => new Game([])).toThrow(ZeroQuestionsProvidedException);
  });

  it('throws error if there is no questionID does not exist when setting answer', () => {

    expect(() => game.setAnswerForQuestion('5', '3')).toThrow(QuestionDoesNotExistException);
  });

  it('return total number of questions', () => {
    const questions1: Question[] = [
      {id: '1', question: '2+2', correctAnswer: "4"},
    ];
    const game1 = new Game(questions1);
    expect(game1.getNumberOfQuestions()).toEqual(1);

    expect(game.getNumberOfQuestions()).toEqual(3);
  });

  it('return number of answered questions', () => {
    expect(game.getNumberOfAnsweredQuestions()).toEqual(0);

    game.setAnswerForQuestion('1', '2');
    expect(game.getNumberOfAnsweredQuestions()).toEqual(1);
  });

  it('return max score', () => {
    expect(game.getMaxPossibleScore()).toEqual(3);
  });

  it('return next question', () => {
    expect(game.getNextQuestion()).toEqual({id: '1', question: '2+2', correctAnswer: "4"});
    game.setAnswerForQuestion('1', '4');
    expect(game.getNextQuestion()).toEqual({id: '2', question: '3+3', correctAnswer: "6"});
  });

  it('return current score', () => {
    expect(game.getScore()).toEqual(0);

    game.setAnswerForQuestion('1', '4');
    expect(game.getScore()).toEqual(1);
  });
});
