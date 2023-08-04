import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from './prime-module/prime.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ReportsComponent } from './components/reports/reports.component';
import { NewProjectDialogComponent } from './components/new-project-dialog/new-project-dialog.component';
import { ProjectsTableComponent } from './components/projects-table/projects-table.component';
import { ResourcesDialogComponent } from './components/resources-dialog/resources-dialog.component';
import { ResourcesTableComponent } from './components/resources-table/resources-table.component';
import { ProjectResourceDialogComponent } from './components/project-resource-dialog/project-resource-dialog.component';
import { ResourceInProjectDialogComponent } from './components/resource-in-project-dialog/resource-in-project-dialog.component';
import { NotificationsDialogComponent } from './components/notifications-dialog/notifications-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    ResourcesComponent,
    ReportsComponent,
    NewProjectDialogComponent,
    ProjectsTableComponent,
    ResourcesDialogComponent,
    ResourcesTableComponent,
    ProjectResourceDialogComponent,
    ResourceInProjectDialogComponent,
    NotificationsDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
