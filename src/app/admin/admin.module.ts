import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
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
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { EditProjectManagerComponent } from './edit-project-manager/edit-project-manager.component';
@NgModule({
  declarations: [
    AloginComponent,
    AdhomeComponent,
    CreateaccountComponent,
    PmanagerComponent,
    TmemberComponent,
    ProjectlistComponent,
    TeamlistComponent,
    CreateprojectComponent,
    ProjecttitlelistComponent,
    EditteammembersComponent,
    AdminNavbarComponent,
    EditProjectManagerComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    RouterModule // Make sure RouterModule is imported if you have routing within AdminModule
  ]
})
export class AdminModule { }
