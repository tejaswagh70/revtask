import { Component } from '@angular/core';
import { Task } from '../../task';

import { AdminService } from '../../admin.service';
import { TmemberComponent } from '../../admin/create-teammember/tmember.component';
import { Projecttable } from '../../projecttable';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrl: './view-tasks.component.css'
})
export class ViewTasksComponent {
  tasklists: Task[] = [];
  teammeber:TmemberComponent[] =[];
  projecttable:Projecttable[] = [];

  constructor(private taskService: AdminService) {}

  ngOnInit(): void {
    this.taskService.getlisttaskes().subscribe(data => {
      this.tasklists = data;
      console.log(data);
    });
  }

}
