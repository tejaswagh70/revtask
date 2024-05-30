import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectManagerComponent } from './edit-project-manager.component';

describe('EditProjectManagerComponent', () => {
  let component: EditProjectManagerComponent;
  let fixture: ComponentFixture<EditProjectManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProjectManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProjectManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
