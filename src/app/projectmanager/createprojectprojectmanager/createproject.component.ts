import { Component } from '@angular/core';
import { Projecttable } from '../../projecttable';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectprojectmanagerComponent {
  projectName: string = '';
  description: string = '';
  clientName: string = '';
  startDate: string = '';
  endDate: string = '';
  status: string = '';
  clientNames: string[] = [
    'Tech Innovators Inc.',
    'Global Solutions LLC',
    'Dynamic Enterprises',
    'Future Technologies',
   
    'Quantum Innovations',
    'Apex Technologies',
    'FutureEdge Solutions',
    'NexGen Dynamics'
  ];
  
  constructor(private adminService: AdminService, private router: Router) { }

  addProject() {
    const project: Projecttable = {
      projectName: this.projectName,
      description: this.description,
      clientName: this.clientName,
      startDate: this.startDate,
      endDate: this.endDate,
      status: this.status
    };

    this.adminService.projecttablecreation(project).subscribe(
      response => {
        console.log('Project creation successful', response);
        alert('Project created successfully');
        this.router.navigate(['/projectmanager/phome']);
      },
      error => {
        console.error('Project creation failed:', error);
        alert('Project creation failed. Please try again.');
      }
    );
  }
}
