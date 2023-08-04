import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { db } from 'src/app/services/indexeddb.service';
import { Project } from 'src/app/models/projects';
import { Resources } from 'src/app/models/Resources';

@Component({
  selector: 'app-project-resource-dialog',
  templateUrl: './project-resource-dialog.component.html',
  styleUrls: ['./project-resource-dialog.component.css']
})
export class ProjectResourceDialogComponent {
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter();

  projects: Project[] = [];
  resources: Resources[] = [];
  selectedResource: Resources | undefined;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {}

  projectResourceForm = this.formBuilder.group({
    selectedProject: new FormControl(),
    selectedResource: new FormControl()
  });

  async  asignResourceToProject(){
  
      const flag = await db.isResourceInProject(this.projectResourceForm.value.selectedProject.id, this.projectResourceForm.value.selectedResource.id)
      if(flag){
        return this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Resource already assigned to this project' }); 
      }

      const resourceAssignedFlag = await db.addResourceToProject(this.projectResourceForm.value.selectedProject.id, this.projectResourceForm.value.selectedResource.id);

      if(resourceAssignedFlag){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Resource assigned succesfully' });
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Resource not assigned' });
      }
    

  }

  onSubmit() {
    this.asignResourceToProject();
  }


  async getData(){
    this.projects = await db.getProjects();
    this.resources = await db.getResources();
  }

  ngOnInit() {
    this.getData();
  }


}
