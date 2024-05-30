import { Component } from '@angular/core';
import { Projecttable } from '../../projecttable';
import { AdminService } from '../../admin.service';
import { Tmemeber } from '../../tmemeber';

@Component({
  selector: 'app-projecctsslist',
  templateUrl: './projecctsslist.component.html',
  styleUrls: ['./projecctsslist.component.css']
})
export class projecctsslistComponent {
  projectstable: Projecttable[] = [];
  teammembers: Tmemeber[] = [];
  selectedProject: Projecttable | null = null;

  constructor(private projectService: AdminService) {}

  ngOnInit(): void {
    this.projectService.getallProjectslist().subscribe(data => {
      this.projectstable = data;
    });
  }

  // Method to set the selected project
  setSelectedProject(project: Projecttable): void {
    this.selectedProject = project;
  }
}
