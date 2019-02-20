import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css']
})
export class ContComponent implements OnInit {

  times:number =0
  constructor() { }

  ngOnInit() {
  }
  pulsar(){
    this.times ++;
  }
}
