import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatEmployeComponent } from './creat-employe.component';

describe('CreatEmployeComponent', () => {
  let component: CreatEmployeComponent;
  let fixture: ComponentFixture<CreatEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
