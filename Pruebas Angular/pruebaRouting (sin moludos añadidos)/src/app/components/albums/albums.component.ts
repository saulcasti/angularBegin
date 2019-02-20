import { Component, OnInit } from '@angular/core';

import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';
import { JsonPlaceholder } from 'src/app/interfaces/jsonPlaceholder.class';


import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;

  itemSelected:JsonPlaceholder = {
    userId:-1,
    id: -1,
    title:"-1",
    completed: false
  };
  jsonList: JsonPlaceholder[];


  constructor(private jsonPlaceholderService:JsonPlaceholderService){
    
  }
  ngOnInit(): void {
    this.jsonPlaceholderService.getJSON("albums", null).subscribe((data)=>{
      this.jsonList = <JsonPlaceholder[]>data;
      
    });
  }

  

  selectOne(item:JsonPlaceholder){
    this.itemSelected = item;
  }

}
