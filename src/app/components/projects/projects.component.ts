import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  newProjectVisible: boolean = false;

  onNewProjectClose() {
    this.newProjectVisible = false;
  }
}
