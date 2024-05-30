import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeammemberRoutingModule } from './teammember-routing.module';
import { ThomeComponent } from './thome/thome.component';
import { TeammembertasksComponent } from './teammembertasks/teammembertasks.component';


@NgModule({
  declarations: [
    ThomeComponent,
    TeammembertasksComponent
  ],
  imports: [
    CommonModule,
    TeammemberRoutingModule
  ]
})
export class TeammemberModule { }
