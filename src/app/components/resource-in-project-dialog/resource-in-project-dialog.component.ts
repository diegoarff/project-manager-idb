import { Component, EventEmitter, Input, Output } from '@angular/core';
import { db } from 'src/app/services/indexeddb.service';
import { Resources, resourceTableColumns } from 'src/app/models/Resources';

@Component({
  selector: 'app-resource-in-project-dialog',
  templateUrl: './resource-in-project-dialog.component.html',
  styleUrls: ['./resource-in-project-dialog.component.css']
})
export class ResourceInProjectDialogComponent {

  @Input() selectedProject: number = 2;
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter();

  resourcesInProject: Resources[] = []; 
  cols: string[] = resourceTableColumns;


  ngOnChanges() {
    if (this.visible) {
      this.getProjectResources();
    }
  }


  async getProjectResources() {
    this.resourcesInProject = await db.getProjectResources(this.selectedProject);
    }

  async deleteResourceFromProject(idResource: number) {
    await db.deleteResourceFromProject(this.selectedProject, idResource);
    this.getProjectResources();
  }

}
