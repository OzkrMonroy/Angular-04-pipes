import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styles: [
  ]
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texts and Dates',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No commons',
            icon: 'pi pi-globe',
            routerLink: 'no-commons'
          },
        ]
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-cog',
        routerLink: 'order'
      }
  ];
  }

}
