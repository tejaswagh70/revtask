import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';
import { ProjectManager } from '../../project-manager';
@Component({
  selector: 'app-pmanager',
  templateUrl: './pmanager.component.html',
  styleUrl: './pmanager.component.css'
})

export class PmanagerComponent {


  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private adminService: AdminService, private router: Router) { }

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const pmanager: ProjectManager = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    

    this.adminService. regsiterProjectManager(pmanager).subscribe(
      response => {
        console.log('Registration successful', response);
        alert('Project Registration successful');
        // Navigate to another page after successful registration
        this.router.navigate(['/admin/ahome']); // Change '/admin/home' to the desired page route
      },
      error => {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
      }
    );
  }

}
