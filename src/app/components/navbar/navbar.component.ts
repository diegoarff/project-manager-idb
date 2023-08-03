import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  ngOnInit(): void {
      this.items = [
        {
          label: 'Projects',
          icon: 'pi pi-fw pi-file',
          routerLink: '/projects',
        },
        {
          label: 'Resources',
          icon: 'pi pi-fw pi-users',
          routerLink: '/resources'
        },
        {
          label: 'Reports',
          icon: 'pi pi-fw pi-chart-bar',
          routerLink: '/reports'
        }
      ]
  }
}
