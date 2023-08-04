import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  recreate = false;
  newResourceVisible: boolean = false;

  onNewResourceNotify() {
    this.onNewResourceClose(); // Close dialog
    this.recreate = true;
  }

  onNewResourceClose() {
    this.newResourceVisible = false;
  }
}
