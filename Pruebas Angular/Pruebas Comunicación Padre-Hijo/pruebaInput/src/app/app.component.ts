import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaBoton';

  message:string = 'botón pulsado';
  selected = false;

  select(){
    this.selected = !this.selected
  }
}
