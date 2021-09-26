import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Questionnaire } from '../models/questionnaire';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  public questionnaire: Questionnaire;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.questionService.getData().subscribe(data => {
      this.questionnaire = data;
    });
  }

  scrollToLabel(id: string) {  //scrolls to the element
    const element = document.getElementById(id);
    this.content.scrollToPoint(0, element.offsetTop, 1000);
  }

  submitted(event: any) {
    this.scrollToLabel(event);
  }

}
