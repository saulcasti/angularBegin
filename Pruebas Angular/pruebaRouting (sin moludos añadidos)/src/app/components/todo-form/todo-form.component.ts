import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

import {ActivatedRoute, Router, ActivatedRouteSnapshot} from "@angular/router";
import { JsonPlaceholder } from 'src/app/interfaces/jsonPlaceholder.class';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  providers: [MessageService]
})
export class TodoFormComponent implements OnInit {
  msgs: Message[] = [];

  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;

  titleEdit:FormControl;
  completedEdit:FormControl;

  item:JsonPlaceholder;

  constructor(private route: ActivatedRoute,
    private jsonPlaceholderService:JsonPlaceholderService,
    private router: Router,
    private messageService: MessageService,
    private activeRoutesnap:ActivatedRoute) {
    
  }

  ngOnInit() {
    this.item = this.activeRoutesnap.snapshot.data["item"];

    console.log( this.activeRoutesnap.snapshot.url);
    if(!this.item){
      this.item = new JsonPlaceholder();
    }
    this.completedEdit= new FormControl(this.item.completed);  
    this.titleEdit = new FormControl(this.item.title);
   
  }

  editItem(){
    this.item.title = this.titleEdit.value;
    this.item.completed = this.completedEdit.value;
    this.jsonPlaceholderService.putJSON(this.item).subscribe((data)=> {
      this.showSuccess();
      console.log(data)
      this.router.navigate(["todos"])
    });
  }

  showSuccess() {
    this.msgs = [];
    let text = " id: " + this.item.id;
    this.msgs.push({severity:'success', summary:'Item was edited', detail:text});
  }



}
