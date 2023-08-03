import { Component } from '@angular/core';
import { Project, projectTableColumns, projectsData } from 'src/app/models/projects';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent {

  projects: Project[] = projectsData;

  cols: string[] = projectTableColumns;

}
