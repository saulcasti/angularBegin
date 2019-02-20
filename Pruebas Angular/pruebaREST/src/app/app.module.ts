import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule }    from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    AccordionModule,
    BrowserAnimationsModule, NoopAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
