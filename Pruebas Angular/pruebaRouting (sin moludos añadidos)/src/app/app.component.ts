import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { JsonPlaceholder } from './interfaces/jsonPlaceholder.class';
import { JsonPlaceholderService } from './services/json-placeholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaRouting';

    constructor(private jsonPlaceholderService:JsonPlaceholderService){}

    menuItems: MenuItem[];

    ngOnInit() {
        this.menuItems = [
          {separator:true},
          {
              label: 'To dos',
              routerLink: "/todos"
          },
          {separator:true},
          {
              label: 'Albums',
              routerLink: "/albums"
          }
        ];
    }

    

}
