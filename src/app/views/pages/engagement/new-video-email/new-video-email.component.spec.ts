import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVideoEmailComponent } from './new-video-email.component';

describe('NewVideoEmailComponent', () => {
  let component: NewVideoEmailComponent;
  let fixture: ComponentFixture<NewVideoEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVideoEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVideoEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
