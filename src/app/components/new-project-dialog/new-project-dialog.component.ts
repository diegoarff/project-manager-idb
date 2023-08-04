import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { db } from 'src/app/services/indexeddb.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-project-dialog',
  templateUrl: './new-project-dialog.component.html',
  styleUrls: ['./new-project-dialog.component.css'],
})
export class NewProjectDialogComponent {
  @Input() visible: boolean = false;

  @Output() close = new EventEmitter();
  @Output() notify = new EventEmitter();

  projectForm = this.formBuilder.group({
    projectTitle:"",
    projectDescription: new FormControl(''),
    projectStartDate: new FormControl(''),
    projectEndDate: new FormControl(''),
  });


  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {}



  // TODO: VALIDATE INPUT DATA AND USE INDEXEDDBSERVICE TO ADD NEW PROJECT, START PROJECT WITH PROGRESS = 0
  onSubmit() {
    console.log(this.projectForm.value);
    if(this.projectForm.value.projectTitle === ""){
      return this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Project title cannot be empty' });
      
    }

    if(this.projectForm.value.projectDescription === ""){
      return this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Project description cannot be empty' });
    }

    if(this.projectForm.value.projectStartDate === ""){
      return this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Project start date cannot be empty' });
    }

    if(this.projectForm.value.projectEndDate === ""){
      return this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Project end date cannot be empty' });
    }

    const startDate = new Date(this.projectForm.value.projectStartDate!);
    const endDate = new Date(this.projectForm.value.projectEndDate!);

    if(startDate > endDate){
      return this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Project start date cannot be greater than end date' });
    }

    db.addProject({
      title: this.projectForm.value.projectTitle!,
      description: this.projectForm.value.projectDescription!,
      startDate: startDate,
      endDate: endDate,
      progress: 0,
      resourcesId: [],
      notifications: [],
    })

    this.notify.emit();
    return this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Project added succesfully' });

    
  }

  
}

