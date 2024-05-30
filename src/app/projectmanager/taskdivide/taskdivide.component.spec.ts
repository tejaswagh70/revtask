import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdivideComponent } from './taskdivide.component';

describe('TaskdivideComponent', () => {
  let component: TaskdivideComponent;
  let fixture: ComponentFixture<TaskdivideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskdivideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskdivideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
