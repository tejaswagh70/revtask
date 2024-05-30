import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThomeComponent } from './thome/thome.component';
import { TeammembertasksComponent } from './teammembertasks/teammembertasks.component';

const routes: Routes = [
  {
    path:'thome',
    component:ThomeComponent
  },
  {
    path:'teammembertasks',
    component:TeammembertasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeammemberRoutingModule { }
