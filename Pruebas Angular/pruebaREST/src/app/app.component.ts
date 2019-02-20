import { Component } from '@angular/core';
import { JsonPlaceholderService } from './services/json-placeholder.service';
import { JsonPlaceholder } from './interfaces/jsonPlaceholder.class';

import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaREST';

  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;

  jsonList:JsonPlaceholder[];
  itemSelected:JsonPlaceholder = {
    userId:-1,
    id: -1,
    title:"-1",
    completed: false
  };

  constructor(private jsonPlaceholderService:JsonPlaceholderService){}

  requestGET(){
    this.jsonPlaceholderService.getJSON("todos", null).subscribe((data)=>{
      this.jsonList = <JsonPlaceholder[]>data;
    });
  }

  selectOne(item:JsonPlaceholder){
    this.itemSelected = item;
  }
}
