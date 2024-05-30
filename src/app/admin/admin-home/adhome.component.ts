import { Component } from '@angular/core';

import { Router} from '@angular/router';

import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-adhome',
  templateUrl: './adhome.component.html',
  styleUrl: './adhome.component.css'
})
export class AdhomeComponent {


  showMembersSublist = false;

  constructor(
    private router: Router,
    private memberService: AdminService) {}

  toggleMembersSublist() {
    this.showMembersSublist = !this.showMembersSublist;
  }

  navigateToList(listType: string) {
    this.memberService.setSelectedList(listType);
    const route = listType === 'pm' ? '/admin/pmanlist' : '/admin/teamlist';
    this.router.navigate([route]);
  }
  //   // Assuming you have some logic to display project details for Project Managers
  //   // You can add that logic here based on the listType
  //   if (listType === 'pm') {
  //     // Logic to display project details
  //   }
  // }
  showChild: string = 'child1';

  showCreateAccount() {
    this.showChild = 'child1';
  }

  showlLsts() {
    this.showChild = 'child2';
  }

  showClientInfo()
  {
    this.showChild='child3';
  }

  

}
