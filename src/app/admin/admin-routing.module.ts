import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AloginComponent } from './admin-login/alogin.component';
import { AdhomeComponent } from './admin-home/adhome.component';
import { CreateaccountComponent } from './account-creation/createaccount.component';
import { PmanagerComponent } from './create-projectmanager/pmanager.component';
import { TmemberComponent } from './create-teammember/tmember.component';
import { ProjectlistComponent } from './projectmanagers-list/projectlist.component';
import { TeamlistComponent } from './teammembers-list/teamlist.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { ProjecttitlelistComponent } from './project-tittles-list/projecttitlelist.component';
import { EditteammembersComponent } from './edit-teammember/editteammembers.component';
import { EditProjectManagerComponent } from './edit-project-manager/edit-project-manager.component';
const routes: Routes = [
  {
    path:'alogin',
    component:AloginComponent
  },
  {
    path:'ahome',
    component:AdhomeComponent
  },
  {
    path:'createaccount',
    component:CreateaccountComponent
  },
  {
    path:'paccount',
    component:PmanagerComponent
  },
  {
    path:'tmember',
    component:TmemberComponent
  },
  {
    path:'pmanlist',
    component:ProjectlistComponent
  },
  {
    path:'teamlist',
    component:TeamlistComponent
  },
  {
    path:'createproject',
    component:CreateprojectComponent
  },
  {
    path:'listprojects',
    component:ProjecttitlelistComponent
  },
  {
    path:'editteam/:id',
    component:EditteammembersComponent
  }
  ,{
    path:'edit-projectmanager/:id',component:EditProjectManagerComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
