import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementReportsComponent } from './engagement-reports.component';

describe('EngagementReportsComponent', () => {
  let component: EngagementReportsComponent;
  let fixture: ComponentFixture<EngagementReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
