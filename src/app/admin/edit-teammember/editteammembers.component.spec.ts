import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditteammembersComponent } from './editteammembers.component';

describe('EditteammembersComponent', () => {
  let component: EditteammembersComponent;
  let fixture: ComponentFixture<EditteammembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditteammembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditteammembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
