import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';
import { JsonPlaceholder } from 'src/app/interfaces/jsonPlaceholder.class';


import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import {Router, NavigationExtras} from "@angular/router";
import { EditableColumn } from 'primeng/table';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;

  itemSelected:JsonPlaceholder = {
    userId:-1,
    id: -1,
    title:"-1",
    completed: false
  };
  jsonList: JsonPlaceholder[];



  constructor(private jsonPlaceholderService:JsonPlaceholderService,
    private router: Router){
    
  }
  ngOnInit(): void {
    this.jsonPlaceholderService.getJSON("todos", null).subscribe((data)=>{
      this.jsonList = <JsonPlaceholder[]>data;
    });

 
  }


  selectOne(item:JsonPlaceholder){
    this.itemSelected = item;
    this.edit();
  }

  edit(){
    this.router.navigate(["todos/item",this.itemSelected.id]);
    }

}
