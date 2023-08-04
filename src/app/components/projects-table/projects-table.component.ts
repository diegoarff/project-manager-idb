import { Component, Input } from '@angular/core';
import { Project, projectTableColumns} from 'src/app/models/projects';
import { db } from 'src/app/services/indexeddb.service';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})

export class ProjectsTableComponent {
  
  @Input() recreate: boolean = false;


  projects: Project[] = [];
  resourceInProjectVisible: boolean = false;
  selectedProjectId: number = 0;

  async loadProjects() {
    try {
      // Obtener todos los proyectos de la base de datos
      this.projects = await db.getProjects();
    } catch (error) {
      console.error('Error al cargar los proyectos:', error);
    }
  }

  async deleteProject(number: number) {
    try {
      // Eliminar el proyecto de la base de datos
      await db.deleteProject(number);
      // Volver a cargar los proyectos
      this.loadProjects();
    } catch (error) {
      console.error('Error al eliminar el proyecto:', error);
    }
  }

  openProjectResourcesDialog(idProject: number) {
    this.selectedProjectId = idProject;
    this.resourceInProjectVisible = true;
  }

  onResourceInProjectClose() {
    this.resourceInProjectVisible = false;
  }

  
      


  cols: string[] = projectTableColumns;


  ngOnInit() {
    this.loadProjects();
  }

  ngOnChanges() {
    if (this.recreate) {
      this.loadProjects();
    }
  }


}
