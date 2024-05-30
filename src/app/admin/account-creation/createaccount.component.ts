import { Component } from '@angular/core';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {
  showForm: boolean = false;
  showContainer: boolean = true;
  
  showfun1():void{
    this.showForm=true;
    this.showContainer=!this.showContainer;
  }


}
