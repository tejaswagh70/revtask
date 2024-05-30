import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmemberComponent } from './tmember.component';

describe('TmemberComponent', () => {
  let component: TmemberComponent;
  let fixture: ComponentFixture<TmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TmemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
