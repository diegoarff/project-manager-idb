import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Resources } from 'src/app/models/Resources';
import { Project } from 'src/app/models/projects';
import { db } from 'src/app/services/indexeddb.service';

@Component({
  selector: 'app-notifications-dialog',
  templateUrl: './notifications-dialog.component.html',
  styleUrls: ['./notifications-dialog.component.css']
})
export class NotificationsDialogComponent {

  @Input() visible: boolean = false;
  @Output() close = new EventEmitter();
  @Output() refresh = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {}
  projects : Project[] = [];
  maxProgression :number = 0;
  resources : Resources[] = [];
  selectedResource: Resources | undefined;
  

  notificationForm = this.formBuilder.group({
    notificationMessage:"",
    progression: new FormControl(),
    selectedProject: new FormControl(),
    hoursSpent: new FormControl(),
    date: new FormControl(),
    selectedResource: new FormControl()
    
  });
  
  onSubmit() {
    this.addNotification();
  }

  ngOnChanges() {
    if (this.visible) {
      this.getData();
    }
  }

  async getData() { 
    this.projects = await db.projects.toArray(); 
    this.resources = await db.resources.toArray();
  }

  async onSelectedProject(){
    this.maxProgression = 100-this.notificationForm.get('selectedProject')?.value.progress;
    this.resources = await db.getProjectResources(this.notificationForm.get('selectedProject')?.value.id);
  }

  async addNotification(){

    const flag = await db.isProjectCompleted(this.notificationForm.get('selectedProject')?.value.id);

    if(flag){
      this.messageService.add({severity:'error', summary:'Error', detail:'Project is completed'});
      return;
    }



    await db.addNotificationToProject(this.notificationForm.get('selectedProject')?.value.id, {
      message: this.notificationForm.get('notificationMessage')?.value!,
      progression: this.notificationForm.get('progression')?.value,
      hoursSpent: this.notificationForm.get('hoursSpent')?.value,
      date: this.notificationForm.get('date')?.value!,
      resourceId: this.notificationForm.get('selectedResource')?.value.id
    });



    this.messageService.add({severity:'success', summary:'Success', detail:'Notification Added'});
    this.refresh.emit();

  }


}
