import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
            label: 'Signature Generate',
            icon: 'pi pi-fw pi-pencil',
          },
      ];
  }
}
