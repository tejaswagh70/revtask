import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammembertasksComponent } from './teammembertasks.component';

describe('TeammembertasksComponent', () => {
  let component: TeammembertasksComponent;
  let fixture: ComponentFixture<TeammembertasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeammembertasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeammembertasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
