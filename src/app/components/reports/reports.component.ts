import { Component } from '@angular/core';
import { Project } from 'src/app/models/projects';
import { db } from 'src/app/services/indexeddb.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {

  projects : Project[] = [];
  selectedProject: Project | undefined;
  reports: string[] = ['Line Chart'];
  selectedReport : string | undefined;
  data: any;
  options: any;

  ngOnInit() {
    this.getData();
  }

  async getData(){
    this.projects = await db.getProjects();
  }

  onSelectedProject(project: Project){
    this.selectedProject = project;
  }

  onSelectedReport(report: string){
    this.selectedReport = report;
  }

  //Get notifications from selected project, loop through them and make a variable with the acumulated progress
  async generateReport(){
    let acumulatedProgress : number = 0;
    let progressArray : number[] = [];

    let notifications= this.selectedProject?.notifications.sort((a,b) => a.date.getTime() - b.date.getTime());

    for (let notification of notifications!){
      acumulatedProgress += notification.progression;
      progressArray.push(acumulatedProgress);
    }



    this.data = {
      labels: [
        ...notifications!.map((notificacion) =>
          notificacion.date.toLocaleDateString()
        ),
      ],
      datasets: [
        {
          label: 'Acumulated Progress',
          data: progressArray,
          fill: true,
          borderColor: '#4bc0c0',
        }

        
      ],


    };

  

    this.options = {
      responsive: true,
      title: {
        display: true,
        text: 'Line Graph',
      },
    };
  

  }

}
