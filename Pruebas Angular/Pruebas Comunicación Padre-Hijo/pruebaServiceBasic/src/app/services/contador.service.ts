import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  numclicks:number = 0;

  constructor() { }

  click(){
    this.numclicks++;
  }
}
