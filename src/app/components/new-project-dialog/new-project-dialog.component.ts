import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-project-dialog',
  templateUrl: './new-project-dialog.component.html',
  styleUrls: ['./new-project-dialog.component.css'],
})
export class NewProjectDialogComponent {
  @Input() visible: boolean = false;

  @Output() close = new EventEmitter();

  newProjectForm = this.formBuilder.group({
    projectTitle: '',
    projectDescription: '',
    projectStartDate: '',
    projectEndDate: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  // TODO: VALIDATE INPUT DATA AND USE INDEXEDDBSERVICE TO ADD NEW PROJECT, START PROJECT WITH PROGRESS = 0
  onSubmit() {}
}
