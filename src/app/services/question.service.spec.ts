import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { QuestionService } from './question.service';

describe('QuestionService', () => {
  let service: QuestionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuestionService]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(QuestionService);
  });

  afterAll(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getData() should call the get method for the given route', () => {

     // when
     service.getData().subscribe();

     // then
     const req = httpMock.expectOne(request => request.url === 'assets/questionnaire.json');
     expect(req.request.method).toEqual('GET');

     // finally
     req.flush({});

  });
});
