import { Model } from '../model';
import { Choice } from './choice';

export class Question extends Model {
  private questionType: string;
  private headline: string;
  private required: boolean;
  private multiple: boolean;
  private choices?: Array<Choice>;

  public getQuestionType(): string { return this.questionType; }
  public withQuestionType(arg: string) { this.questionType = arg; return this; }

  public getHeadline(): string { return this.headline; }
  public withHeadline(arg: string) { this.headline = arg; return this; }

  public getRequired(): boolean { return this.required; }
  public withRequired(arg: boolean) { this.required = arg; return this; }

  public getMultiple(): boolean { return this.multiple; }
  public withMultiple(arg: boolean) { this.multiple = arg; return this; }

  public getChoices(): Array<Choice> { return this.choices; }
  public withChoices(arg: Array<Choice>) { this.choices = arg; return this; }
}
