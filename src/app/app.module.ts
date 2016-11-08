import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Tasks } from './tasks.compnnent';
import { TaskFormComponent } from './task-form.component';
import { MdlModule } from 'angular2-mdl';

import { TaskDataService } from './task-data-service';



@NgModule({
  declarations: [
    AppComponent,
    Tasks,
    TaskFormComponent
    // MdlTextFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    
  ],
  providers: [
    TaskDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
