import { Model } from '../model';
import { Question } from './question';

export class Questionnaire extends Model{
  private name: string;
  private questions: Array<Question>;
  private categoryNameHyphenated: string;

  public getName(): string { return this.name; }
  public withName(arg: string) { this.name = arg; return this; }

  public getQuestions(): Array<Question> { return this.questions; }
  public withQuestions(arg: Array<Question>) { this.questions = arg; return this; }

  public getCategorynameHyphenated(): string { return this.categoryNameHyphenated; }
  public withCategoryNameHyphenated(arg: string) { this.categoryNameHyphenated = arg; return this; }

}
