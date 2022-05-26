import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWOTBalanceComponent } from './student-wotbalance.component';

describe('StudentWOTBalanceComponent', () => {
  let component: StudentWOTBalanceComponent;
  let fixture: ComponentFixture<StudentWOTBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentWOTBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentWOTBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
