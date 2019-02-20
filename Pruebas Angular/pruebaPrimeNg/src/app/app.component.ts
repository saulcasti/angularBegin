import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaPrimeNg';
  selected:boolean = false;
  message:string = 'button clicked';

  handleClick() {
    this.selected = !this.selected;
}
}
