import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../../services/contador.service';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor(private contadorService:ContadorService) { }

  ngOnInit() {
  }

  click(){
    this.contadorService.click();
  }

}
