import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectManager } from '../../project-manager';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-edit-project-manager',
  templateUrl: './edit-project-manager.component.html',
  styleUrl: './edit-project-manager.component.css'
})
export class EditProjectManagerComponent {
  teammember: ProjectManager = {
    id: null||0,
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teammemberService: AdminService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.teammemberService.getProjectManagerById(id).subscribe(data => {
        this.teammember = data;
      });
    }
  }

  saveTeammember() {
    this.teammemberService.updateProjectManager(this.teammember).subscribe(() => {
      alert("updated sucessfully");
      this.router.navigate(['/admin/pmanlist']);
    });
  }

}
