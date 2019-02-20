import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// PrimeNG imports
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api'; 
import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
