import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecttitlelistComponent } from './projecttitlelist.component';

describe('ProjecttitlelistComponent', () => {
  let component: ProjecttitlelistComponent;
  let fixture: ComponentFixture<ProjecttitlelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjecttitlelistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjecttitlelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
