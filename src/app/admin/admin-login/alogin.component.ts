import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  private hardcodedAdminCredentials = {
    email: 'admin@example.com',
    password: 'admin123',
    role: 'Admin'
  };

  constructor(
    private authService: AdminService,
    private router: Router
  ) {}

  onSubmit() {
    // Reset the error message
    this.errorMessage = '';

    // Check hardcoded admin credentials
    if (this.email === this.hardcodedAdminCredentials.email && this.password === this.hardcodedAdminCredentials.password) {
      this.router.navigate(['/admin/ahome']);
      return;
    }

    // Proceed with the API call if credentials do not match hardcoded admin credentials
    this.authService.login(this.email, this.password).subscribe(
      response => {
        const role = response.role;
        console.log('User role:', role);

        if (role === 'Admin') {
          this.router.navigate(['/admin/ahome']);
        } else if (role === 'ProjectManager') {
          this.router.navigate(['/projectmanager/phome']);
        } else if (role === 'TeamMember') {
          this.router.navigate(['/teammember/thome']);
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Invalid email or password';
        this.email = '';
        this.password = '';
        if (error.status) {
          console.log('Status:', error.status);
          console.log('Message:', error.error);
        }
      }
    );
  }
}
