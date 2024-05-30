import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';
import { Project } from '../../project';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent {
  title: string = "";
  description: string = "";

  constructor(private adminService: AdminService, private router: Router) { }

  create() {
    const project: Project = {
      title: this.title,
      description: this.description
    };

    this.adminService.createProject(project).subscribe(
      response => {
        console.log('Project creation successful', response);
        alert('Project created successfully');
        this.router.navigate(['/admin/ahome']); // Change '/admin/home' to the desired page route
      },
      error => {
        console.error('Project creation failed:', error);
        alert('Project creation failed. Please try again.');
      }
    );
  }
}
