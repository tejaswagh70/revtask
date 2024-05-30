import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientinfoComponent } from './clientinfo/clientinfo.component';
import { TeammemberslistComponent } from './teammemberslist/teammemberslist.component';
import { CreateprojectprojectmanagerComponent } from './createprojectprojectmanager/createproject.component';
import { projecctsslistComponent } from './projecctsslist/projecctsslist.component';
import { AddTeammembersComponent } from './add-teammembers/add-teammembers.component';
import { TaskdivideComponent } from './taskdivide/taskdivide.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
const routes: Routes = [
  {
    path:'phome',
    component:HomeComponent
  },
  {
    path:'listprojectss',
    component:ClientinfoComponent
  },
  {
    path:'teamlists',
    component:TeammemberslistComponent
  },
  {
    path:'createproject',
    component:CreateprojectprojectmanagerComponent
  },
  {
    path:'projectslist',
    component:projecctsslistComponent
  },
  {
    path:'task',
    component:AddTeammembersComponent
  },
  {
    path:'taskdivide/:id',
    component:TaskdivideComponent
  },
  {
    path:'tasklist',
    component:ViewTasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectmanagerRoutingModule { }
