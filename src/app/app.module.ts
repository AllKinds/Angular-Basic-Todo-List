import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Tasks } from './tasks.compnnent';
import { MdlModule } from 'angular2-mdl';


@NgModule({
  declarations: [
    AppComponent,
    Tasks
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
