import {QuestionGenerator} from "../../domain/QuestionGenerator";
import {
  InvalidNumberOfQuestionsForGenerateException,
  QuestionListGenerator
} from "../../domain/QuestionListGenerator";
import Mock = jest.Mock;

describe('Question generator', () => {
  let questionGenerator : jest.Mocked<QuestionGenerator>;
  beforeEach(() => {
    questionGenerator =  {
      generateQuestionAndAnswer: jest.fn(),
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

  it('expect to call generate question and answer', () => {
    new QuestionListGenerator(2, questionGenerator);
    expect(questionGenerator.generateQuestionAndAnswer).toHaveBeenCalledTimes(2);
  });

  it('returns expected questions', () => {
    (questionGenerator.getAnswer as Mock).mockReturnValueOnce('4');
    (questionGenerator.getQuestion as Mock).mockReturnValueOnce('2+2');

    (questionGenerator.getAnswer as Mock).mockReturnValueOnce('6');
    (questionGenerator.getQuestion as Mock).mockReturnValueOnce('3+3');
    const g1 = new QuestionListGenerator(2, questionGenerator);

    expect(g1.getQuestions()).toEqual([
      {
        id: '0',
        question: '2+2',
        correctAnswer: '4'
      }, {
        id: '1',
        question: '3+3',
        correctAnswer: '6'
      }
    ]);
  });
});
