import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeammembersComponent } from './add-teammembers.component';

describe('AddTeammembersComponent', () => {
  let component: AddTeammembersComponent;
  let fixture: ComponentFixture<AddTeammembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTeammembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTeammembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
