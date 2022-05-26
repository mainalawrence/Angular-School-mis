import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWBalanceComponent } from './student-wbalance.component';

describe('StudentWBalanceComponent', () => {
  let component: StudentWBalanceComponent;
  let fixture: ComponentFixture<StudentWBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentWBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentWBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
