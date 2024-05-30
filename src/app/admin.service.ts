import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin'; 
import { ProjectManager } from './project-manager';
import { Tmemeber } from './tmemeber';
import { Project } from './project';
import { Projecttable } from './projecttable';
import { Task } from './task';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private selectedList: string="";
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  registerAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.apiUrl}/admin/register`, admin);
  }


  login(email: string, password: string): Observable<{ role: string, id: number }> {
    return this.http.post<{ role: string, id: number }>(`${this.apiUrl}/admin/alogin`, { email, password }).pipe(
      map(response => {
        console.log(response);
        localStorage.setItem('TeamMember', JSON.stringify(response));
        return response;
      })
    );
  }


  regsiterProjectManager(pmanager:ProjectManager):Observable<ProjectManager>{
    return this.http.post<ProjectManager>(`${this.apiUrl}/admin/paccount`,pmanager);
  }


  regsiterTeammember(teammemb:Tmemeber):Observable<Tmemeber>{
    return this.http.post<Tmemeber>(`${this.apiUrl}/admin/tmember`,teammemb)
  }

  getPmanagers(): Observable<ProjectManager[]> {
    return this.http.get<ProjectManager[]>(`${this.apiUrl}/admin/listpmanagers`);
  }

  setSelectedList(listType: string) {
    this.selectedList = listType;
  }

  getSelectedList(): string {
    return this.selectedList;
  }


  getTeammemebrs():Observable<Tmemeber[]> {
    return this.http.get<Tmemeber[]>(`${this.apiUrl}/admin/listteam`);
  }

 
  createProject(project:Project):Observable<Project>{
   return this.http.post<Project>(`${this.apiUrl}/admin/projectcreate`,project)
 }


 getallProjects():Observable<Project[]>{
  return this.http.get<Project[]>(`${this.apiUrl}/admin/listprojects`);
 }



//  project creation done by the projectmanager

 projecttablecreation(projectcreation:Projecttable):Observable<Projecttable>{
  return this.http.post<Projecttable>(`${this.apiUrl}/projectmanager/projectcreate`,projectcreation);
 }


//  het all the projects table list to check the project manager

getallProjectslist():Observable<Projecttable[]>{
  return this.http.get<Projecttable[]>(`${this.apiUrl}/projectmanager/projectslist`);
 }






 getProjectById(id: number): Observable<Projecttable> {
  return this.http.get<Projecttable>(`${this.apiUrl}/projectmanager/projects/${id}`);
}

 // addding the team emeber to the project

 assignTaskToTeamMember(teamMemberId: number, task: Task): Observable<Task> {
  return this.http.post<Task>(`${this.apiUrl}/projectmanager/${teamMemberId}/tasks`, task);
}



getlisttaskes():Observable<Task[]>{
  return this.http.get<Task[]>(`${this.apiUrl}/projectmanager/tasklist`);
 }


 
 getTasksForTeamMember(teamMemberId: number): Observable<Task[]> {
  return this.http.get<Task[]>(`${this.apiUrl}/teammember/teammembertasks/${teamMemberId}`);
}

getLoggedInTeamMemberId(): number | null {
  const teamMemberString = localStorage.getItem('TeamMember');
  if (teamMemberString) {
    const teamMember = JSON.parse(teamMemberString);
    if (teamMember && teamMember.id) {
      return teamMember.id;
    }
  }
  return null; // Return null if id is not found or team member is not found
}

getProjectManagerById(id: number): Observable<ProjectManager> {
  return this.http.get<ProjectManager>(`${this.apiUrl}/admin/PManager/${id}`);
}











  // changePassword(pmanager: Pmanager): Observable<Pmanager> {
  //   return this.http.post<Pmanager>(`${this.apiUrl}/pmanager/reset`, pmanager);
  // }


  updateTask(id: number, task: Task): Observable<Object> {
    return this.http.put(`${this.apiUrl}/teammember/uptasks/${id}`, task);
  }


 
  getTeammemberById(id: number): Observable<Tmemeber> {
    return this.http.get<Tmemeber>(`${this.apiUrl}/admin/teammember/${id}`);
  }

  updateProjectManager(pmanager:ProjectManager): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/admin/editPmanager/${pmanager.id}`,pmanager);
  }
  
  

  updateTeammember(teammember: Tmemeber): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/admin/editteam/${teammember.id}`, teammember);
  }

  deleteTeammember(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/team/${id}`);
  }

  deleteProjectManager(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/deletePmanager/${id}`);
  }

  

  

  
}
