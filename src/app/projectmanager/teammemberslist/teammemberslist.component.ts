import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Tmemeber } from '../../tmemeber';
@Component({
  selector: 'app-teammemberslist',
  templateUrl: './teammemberslist.component.html',
  styleUrl: './teammemberslist.component.css'
})
export class TeammemberslistComponent {

  teammembers: Tmemeber[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getTeammemebrs().subscribe(data => {
      this.teammembers = data;
    });
  }

}
