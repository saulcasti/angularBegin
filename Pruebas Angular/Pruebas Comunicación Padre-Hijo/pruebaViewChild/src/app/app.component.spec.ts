import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ContComponent } from './cont/cont.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContComponent
      ],
    }).compileComponents();
  }));

  it(`Título`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('prueba2');
  });


});
