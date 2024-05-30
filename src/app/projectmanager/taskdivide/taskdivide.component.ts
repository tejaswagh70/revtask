import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../admin.service';
import { Projecttable } from '../../projecttable';
import { Tmemeber } from '../../tmemeber';
import { Task } from '../../task';

@Component({
  selector: 'app-taskdivide',
  templateUrl: './taskdivide.component.html',
  styleUrls: ['./taskdivide.component.css']
})
export class TaskdivideComponent implements OnInit {
  project: Projecttable | null = null;
  teamMembers: Tmemeber[] = [];
  selectedTeamMembers: Tmemeber[] = [];
  showAddTeamMember: boolean = false;
  taskDescriptions: { [key: number]: string } = {};
  taskStatuses: { [key: number]: string } = {};
  tasks: Task[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectService: AdminService,
    private teamMemberService: AdminService
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.projectService.getProjectById(+projectId).subscribe((project: Projecttable) => {
        this.project = project;
      });
    }

    this.teamMemberService.getTeammemebrs().subscribe((teamMembers: Tmemeber[]) => {
      this.teamMembers = teamMembers;
      this.initializeTaskDescriptions();
    });
  }

  initializeTaskDescriptions(): void {
    this.teamMembers.forEach(teamMember => {
      if (teamMember.id !== undefined) {
        this.taskDescriptions[teamMember.id] = '';
        this.taskStatuses[teamMember.id] = '';
      }
    });
  }

  toggleAddTeamMember(): void {
    alert("hiis")
    this.showAddTeamMember = !this.showAddTeamMember;
  }

  onTeamMemberSelected(teamMember: Tmemeber, event: any): void {
    if (event.target.checked) {
      this.selectedTeamMembers.push(teamMember);
      if (teamMember.id !== undefined && !this.taskDescriptions[teamMember.id]) {
        this.taskDescriptions[teamMember.id] = '';
        this.taskStatuses[teamMember.id] = '';
      }
    } else {
      const index = this.selectedTeamMembers.findIndex(member => member.id === teamMember.id);
      if (index > -1) {
        this.selectedTeamMembers.splice(index, 1);
        if (teamMember.id !== undefined) {
          delete this.taskDescriptions[teamMember.id];
          delete this.taskStatuses[teamMember.id];
        }
      }
    }
  }

  confirmTeamMembers(): void {
    this.showAddTeamMember = false;
  }

  assignTask(index: number): void {
    const teamMember = this.selectedTeamMembers[index];
    if (this.project && this.project.id && teamMember.id !== undefined) {
      const description = this.taskDescriptions[teamMember.id];
      const status = this.taskStatuses[teamMember.id];
      if (description && description.trim() !== '' && status && status.trim() !== '') {
        const newTask: Task = {
          id: 0, // id will be generated by the backend
          description: description.trim(),
          status: status.trim(),
          project: {
            id: this.project.id,
            projectName: this.project.projectName || ''
          },
          teamMember: {
            id: teamMember.id,
            name: teamMember.name || '',
            email: teamMember.email || ''
          }
        };

        this.projectService.assignTaskToTeamMember(teamMember.id, newTask).subscribe(
          (task) => {
            console.log('Task assigned:', task);
            alert("Task assigned successfully");
            this.tasks.push(task);
            // Clear the task description and status
            this.taskDescriptions[teamMember.id] = '';
            this.taskStatuses[teamMember.id] = '';
          },
          (error) => {
            console.error('Error assigning task:', error);
          }
        );
      } else {
        console.log('Task description or status is empty or invalid.');
      }
    } else {
      console.log('No project selected, project ID is undefined, or team member ID is undefined.');
    }
  }

  assignTasks(): void {
    this.selectedTeamMembers.forEach((teamMember, index) => {
      this.assignTask(index);
    });
  }

  getTaskStatus(teamMemberId: number | undefined): string {
    return teamMemberId !== undefined ? this.taskStatuses[teamMemberId] || '' : '';
  }

  getTaskDescription(teamMemberId: number | undefined): string {
    return teamMemberId !== undefined ? this.taskDescriptions[teamMemberId] || '' : '';
  }
}
