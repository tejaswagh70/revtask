import { Component, OnInit } from '@angular/core';
import { ProjectManager } from '../../project-manager';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {
  pmanagers: ProjectManager[] = [];
  isLoading: boolean = true; // Boolean property to track loading state

  constructor(private pmanagerService: AdminService,private router:Router) {}

  ngOnInit(): void {
    this.isLoading = true; // Start loading
    this.pmanagerService.getPmanagers().subscribe(data => {
      this.pmanagers = data;
      this.isLoading = false; // End loading
    }, error => {
      this.isLoading = false; // End loading in case of error
      console.error('Error loading project managers', error);
    });
  }

  deleteProjectManager(id: number|undefined) {
    if (id !== undefined) {
      this.pmanagerService.deleteProjectManager(id).subscribe(() => {
        this.pmanagers = this.pmanagers.filter(tm => tm.id !== id);
        alert("deleted sucessfully");
      });
    }
    else{
      console.log("ID Is Undefined")
    }
  }
  
  
  
  editProjectManager(pmanager:ProjectManager){
    this.router.navigate(['/admin/edit-projectmanager', pmanager.id]);
  }
}
