import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-counter',
  templateUrl: './child-counter.component.html',
  styleUrls: ['./child-counter.component.css']
})
export class ChildCounterComponent implements OnInit {

  @Output() onClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  clickMethod(){
    this.onClick.emit(true);
  }

}
