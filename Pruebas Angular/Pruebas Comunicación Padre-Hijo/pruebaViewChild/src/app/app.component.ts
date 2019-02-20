import { Component, ViewChild } from '@angular/core';
import { ContComponent } from './cont/cont.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba2';

  @ViewChild(ContComponent)
  private contComponent: ContComponent;

  times(){return 0;}

  pulsar(){
    this.contComponent.pulsar()
  }

  ngAfterViewInit() {
    setTimeout(() => this.times = () => this.contComponent.times, 0);
  }

}
