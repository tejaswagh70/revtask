import { Component, OnInit } from '@angular/core';
import { Tmemeber } from '../../tmemeber'; // Ensure you have the correct path
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {
  teammembers: Tmemeber[] = [];

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getTeammemebrs().subscribe(data => {
      this.teammembers = data;
    });
  }
  editTeammember(pmanager: Tmemeber) {
    this.router.navigate(['/admin/editteam', pmanager.id]);
  }

  deleteTeammember(id: number) {
     this.adminService.deleteTeammember(id).subscribe(() => {
       this.teammembers = this.teammembers.filter(tm => tm.id !== id);
       alert("deleted sucessfully");
     });
  }
}
