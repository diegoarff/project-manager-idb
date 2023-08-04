import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { db } from 'src/app/services/indexeddb.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-resources-dialog',
  templateUrl: './resources-dialog.component.html',
  styleUrls: ['./resources-dialog.component.css'],
})
export class ResourcesDialogComponent {
  @Input() visible: boolean = false;

  @Output() close = new EventEmitter();
  @Output() notify = new EventEmitter();

  resourceForm = this.formBuilder.group({
    resourceName: new FormControl(''),
    resourceLastName: new FormControl(''),
    resourceRole: new FormControl(''),
  });


  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {}



  // TODO: VALIDATE INPUT DATA AND USE INDEXEDDBSERVICE TO ADD NEW PROJECT, START PROJECT WITH PROGRESS = 0
  onSubmit() {
    console.log(this.resourceForm.value);
    
    if(this.resourceForm.value.resourceName == "" || this.resourceForm.value.resourceLastName == "" || this.resourceForm.value.resourceRole == ""){
      return this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill all the fields' });
    }

    db.addResource({
      name: this.resourceForm.value.resourceName!,
      lastName: this.resourceForm.value.resourceLastName!,
      role: this.resourceForm.value.resourceRole!,
    });

    this.notify.emit();
    return this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Resource added succesfully' });

    
  }

  
}

