import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full'},
  { path: 'resources', component: ResourcesComponent },
  { path: 'reports', component: ReportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
