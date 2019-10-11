import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsQuizzesComponent } from './forms-quizzes.component';

describe('FormsQuizzesComponent', () => {
  let component: FormsQuizzesComponent;
  let fixture: ComponentFixture<FormsQuizzesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsQuizzesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
