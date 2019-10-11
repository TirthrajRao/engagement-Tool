import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfEngagementComponent } from './types-of-engagement.component';

describe('TypesOfEngagementComponent', () => {
  let component: TypesOfEngagementComponent;
  let fixture: ComponentFixture<TypesOfEngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesOfEngagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesOfEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
