import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Questionnaire } from '../models/questionnaire';
import { Question } from '../models/question';
import { Choice } from '../models/choice';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionnaire: Questionnaire;

  constructor(private http: HttpClient) {
  }

  getData(): Observable<Questionnaire> {
    return this.http.get(`${environment.datasourceUrl}`)
      .pipe(map((data: any) => this.processData(data.questionnaire)));
  }

  processData(data: any): Questionnaire {
    return new Questionnaire()
      .withId(data?.id)
      .withName(data?.name)
      .withQuestions(this.getQuestions(data?.questions))
      .withIdentifier(data?.identifier)
      .withDescription(data?.description)
      .withCategoryNameHyphenated(data?.categoryNameHyphenated);
  }

  getQuestions(questions: Array<any>): Array<Question> {
    const questionList = new Array<Question>();

    questions?.forEach(q => {
      questionList.push(new Question()
        .withIdentifier(q.identifier)
        .withQuestionType(q.question_type)
        .withHeadline(q.headline)
        .withDescription(q.description)
        .withRequired(q.required)
        .withMultiple(q.multiple === 'true')
        .withChoices(q.question_type !== 'text' ? this.getChoices(q.choices) : null)
      );
    });

    return questionList;
  }

  getChoices(choices: Array<any>): Array<Choice> {
    const choiceList = new Array<Choice>();

    choices.forEach(c => {
      choiceList.push(new Choice()
        .withLabel(c.label)
        .withSelected(c.selected)
        .withValue(c.value));
    });

    return choiceList;
  }
}
