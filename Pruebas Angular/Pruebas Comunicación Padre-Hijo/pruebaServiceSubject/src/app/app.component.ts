import { Component } from '@angular/core';
import { ContadorService } from './services/contador.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba Servicio';

  constructor(private contadorService:ContadorService){
    contadorService.clicks$.subscribe(num => this.numClicks = num)
  }

  numClicks:number = 0;

}
