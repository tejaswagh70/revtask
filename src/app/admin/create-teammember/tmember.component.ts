import { Component } from '@angular/core';

import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';
import { Tmemeber } from '../../tmemeber';


@Component({
  selector: 'app-tmember',
  templateUrl: './tmember.component.html',
  styleUrl: './tmember.component.css'
})
export class TmemberComponent {

  id:number=0;
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

    const teammemb: Tmemeber = {
      id:this.id,
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.adminService. regsiterTeammember(teammemb).subscribe(
      response => {
        console.log('Registration successful', response);
        alert('TeamMemeber Registration successful');
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
