import { Component, Input } from '@angular/core';
import { db } from 'src/app/services/indexeddb.service';
import { Resources, resourceTableColumns } from 'src/app/models/Resources';

@Component({
  selector: 'app-resources-table',
  templateUrl: './resources-table.component.html',
  styleUrls: ['./resources-table.component.css']
})


export class ResourcesTableComponent {

  @Input() recreate: boolean = false;

  resources:Resources[] = [];
  cols: string[] = resourceTableColumns;

  async loadResources() {
    try {
      // Obtener todos los proyectos de la base de datos
      this.resources = await db.getResources();
    } catch (error) {
      console.error('Error al cargar los proyectos:', error);
    }
  }

  async deleteResource(number: number) {
    try {
      // Eliminar el proyecto de la base de datos
      await db.deleteResource(number);
      // Volver a cargar los proyectos
      this.loadResources();
    } catch (error) {
      console.error('Error al eliminar el proyecto:', error);
    }
  }

  ngOnInit() {
    this.loadResources();
  }

  ngOnChanges() {
    if (this.recreate) {
      this.loadResources();
    }
  }
  
}
