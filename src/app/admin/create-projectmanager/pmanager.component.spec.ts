import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmanagerComponent } from './pmanager.component';

describe('PmanagerComponent', () => {
  let component: PmanagerComponent;
  let fixture: ComponentFixture<PmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmanagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
