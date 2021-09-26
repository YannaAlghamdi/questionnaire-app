import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from '../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() index: number;
  @Output() submitted: EventEmitter<number> = new EventEmitter();
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      answer: new FormControl('', this.question.getRequired() ? Validators.required : null)
    });
  }

  goTo(index: number) {
    this.submitted.emit(index);
  }
}
