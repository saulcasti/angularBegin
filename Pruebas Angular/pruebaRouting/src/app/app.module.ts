import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule }    from '@angular/common/http';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {MenubarModule} from 'primeng/menubar';



import { AlbumsComponent } from './components/albums/albums.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    AccordionModule,
    BrowserAnimationsModule, NoopAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ToggleButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
