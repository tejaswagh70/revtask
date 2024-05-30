import { Component } from '@angular/core';
import { Project } from '../../project';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-clientinfo',
  templateUrl: './clientinfo.component.html',
  styleUrl: './clientinfo.component.css'
})
export class ClientinfoComponent {
  projects: Project[] = [];

  constructor(private projectService: AdminService) {}

  ngOnInit(): void {
    this.projectService.getallProjects().subscribe(data => {
      this.projects = data;
    });
  }

}
