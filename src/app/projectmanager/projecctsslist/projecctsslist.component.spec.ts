import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecctsslistComponent } from './projecctsslist.component';

describe('ProjecctsslistComponent', () => {
  let component: ProjecctsslistComponent;
  let fixture: ComponentFixture<ProjecctsslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjecctsslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjecctsslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
