import {QuestionGenerator} from "../src/QuestionGenerator";
import {
  InvalidNumberOfQuestionsForGenerateException,
  QuestionListGenerator
} from "../src/QuestionListGenerator";
import Mock = jest.Mock;

describe('Question generator', () => {
  let questionGenerator : jest.Mocked<QuestionGenerator>;
  beforeEach(() => {
    questionGenerator =  {
      getAnswer: jest.fn(),
      getQuestion: jest.fn()
    }
  })

  it('throw error if number of question is less then 1', () => {
    expect(() => new QuestionListGenerator(0, questionGenerator)).toThrow(InvalidNumberOfQuestionsForGenerateException)
    expect(() => new QuestionListGenerator(-1, questionGenerator)).toThrow(InvalidNumberOfQuestionsForGenerateException)
  });

  it('return expected number of questions', () => {
    const g1 = new QuestionListGenerator(1, questionGenerator);
    expect(g1.getQuestions().length).toEqual(1);

    const g2 = new QuestionListGenerator(2, questionGenerator);
    expect(g2.getQuestions().length).toEqual(2);
  });

  it('returns expected questions', () => {
    (questionGenerator.getAnswer as Mock).mockReturnValue('4');
    (questionGenerator.getQuestion as Mock).mockReturnValue('2+2');

    const g1 = new QuestionListGenerator(2, questionGenerator);

    expect(g1.getQuestions()[0]).toEqual({
      id: '0',
      question: '2+2',
      correctAnswer: '4'
    });

    (questionGenerator.getAnswer as Mock).mockReturnValue('6');
    (questionGenerator.getQuestion as Mock).mockReturnValue('3+3');

    const g2 = new QuestionListGenerator(2, questionGenerator);

    expect(g2.getQuestions()[1]).toEqual({
      id: '1',
      question: '3+3',
      correctAnswer: '6'
    })
  });
});
