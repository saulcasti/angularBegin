import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  numclicks:number = 0;

  clicks$ = new Subject<number>();


  constructor() { }

  click(){
    this.numclicks ++;
    this.clicks$.next(this.numclicks);
  }

}
