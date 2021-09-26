import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Question } from '../models/question';

import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    component.index = 2;
    component.question = new Question()
      .withRequired(true);
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the next index after submission', () => {
    //given
    component.form.setValue({ answer: 'Ja' });
    const submitEmitter = spyOn(component.submitted, 'emit');

    //when
    component.goTo(component.index);

    //then
    expect(submitEmitter).toHaveBeenCalled();
  });
});
