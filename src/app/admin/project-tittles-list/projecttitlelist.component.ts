import { Component } from '@angular/core';
import { Project } from '../../project';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-projecttitlelist',
  templateUrl: './projecttitlelist.component.html',
  styleUrl: './projecttitlelist.component.css'
})
export class ProjecttitlelistComponent {
  projects: Project[] = [];

  constructor(private projectService: AdminService) {}

  ngOnInit(): void {
    this.projectService.getallProjects().subscribe(data => {
      this.projects = data;
    });
  }

}
