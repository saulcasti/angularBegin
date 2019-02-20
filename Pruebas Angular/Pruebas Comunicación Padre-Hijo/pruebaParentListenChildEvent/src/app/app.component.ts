import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaParentListenChildEvent';

  clicks = 0;

  onClick(click:boolean){
    this.clicks ++;
  }
}
