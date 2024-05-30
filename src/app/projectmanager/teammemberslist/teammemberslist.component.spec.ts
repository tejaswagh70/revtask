import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammemberslistComponent } from './teammemberslist.component';

describe('TeammemberslistComponent', () => {
  let component: TeammemberslistComponent;
  let fixture: ComponentFixture<TeammemberslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeammemberslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeammemberslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
