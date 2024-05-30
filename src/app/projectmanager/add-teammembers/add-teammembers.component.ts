import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Projecttable } from '../../projecttable';
import { Tmemeber } from '../../tmemeber';
import { AdminService } from '../../admin.service';
@Component({
  selector: 'app-add-teammembers',
  templateUrl: './add-teammembers.component.html',
  styleUrls: ['./add-teammembers.component.css']
})
export class AddTeammembersComponent implements OnInit {
  projects: Projecttable[] = [];
  teamMembers: Tmemeber[] = [];
  selectedProject: Projecttable | null = null;
  selectedTeamMember: Tmemeber | null = null;
  projectForm: FormGroup;
  teamMemberForm: FormGroup;
  taskForm: FormGroup;

  constructor(
    private projectService: AdminService,
    private teamMemberService: AdminService,
    private fb: FormBuilder
  ) {
    this.projectForm = this.fb.group({
      projectName: [''],
      description: ['']
    });

    this.teamMemberForm = this.fb.group({
      name: [''],
      email: ['']
    });

    this.taskForm = this.fb.group({
      description: ['']
    });
  }

  ngOnInit(): void {
    this.projectService.getallProjectslist().subscribe(projects => {
      this.projects = projects;
    });

    this.teamMemberService.getTeammemebrs().subscribe(teamMembers => {
      this.teamMembers = teamMembers;
    });
  }

  addProject(): void {
    const project: Projecttable = this.projectForm.value;
    this.projectService.projecttablecreation(project).subscribe(newProject => {
      this.projects.push(newProject);
      this.projectForm.reset();
    });
  }

  selectProject(project: Projecttable): void {
    this.selectedProject = project;
  }

  

  



  selectTeamMember(teamMember: Tmemeber): void {
    this.selectedTeamMember = teamMember;
  }
}
