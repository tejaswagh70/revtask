import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tmemeber } from '../../tmemeber';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';
@Component({
  selector: 'app-editteammembers',
  templateUrl: './editteammembers.component.html',
  styleUrl: './editteammembers.component.css'
})
export class EditteammembersComponent {
  teammember: Tmemeber = {
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
      this.teammemberService.getTeammemberById(id).subscribe(data => {
        this.teammember = data;
      });
    }
  }

  saveTeammember() {
    this.teammemberService.updateTeammember(this.teammember).subscribe(() => {
      alert("updated sucessfully");
      this.router.navigate(['/admin/teamlist']);
    });
  }
}