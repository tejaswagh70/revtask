import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProjectManagerComponent } from './admin/edit-project-manager/edit-project-manager.component';

const routes: Routes = [

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'projectmanager',
    loadChildren:()=>import('./projectmanager/projectmanager.module').then(m=>m.ProjectmanagerModule)
  },
  {
    path:'teammember',
    loadChildren:()=>import('./teammember/teammember.module').then(m=>m.TeammemberModule)

  },
  {
    path: '', 
      redirectTo: 'admin/alogin',
      pathMatch: 'full'
     }, // Default route
      { path: '**',
       redirectTo: 'admin/alogin' 
      }
    ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
