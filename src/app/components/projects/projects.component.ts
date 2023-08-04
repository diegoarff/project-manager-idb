import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  newProjectVisible: boolean = false;
  recreate = false;
  assignResourceVisible: boolean = false;
  notificationVisible: boolean = false;


  onNewProjectClose() {
    this.newProjectVisible = false;
  }
  onNewProjectNotify() {
    this.onNewProjectClose(); // Close dialog
    this.recreate = true;
  }

  onNotificationClose() {
    this.notificationVisible = false;
  }

  onCreateNotification() {
    this.notificationVisible = true;
  }

  onNotificationRefresh() {
    this.notificationVisible = false;
    this.recreate = true;
  }


  onAssignResourceClose() {
    this.assignResourceVisible = false;
  }
  

}
