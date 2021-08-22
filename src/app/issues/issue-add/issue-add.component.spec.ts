import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IssueAddComponent } from './issue-add.component';

describe('IssueAddComponent', () => {
  let component: IssueAddComponent;
  let fixture: ComponentFixture<IssueAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
