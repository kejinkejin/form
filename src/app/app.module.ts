import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatadrivenComponent } from './datadriven/datadriven.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpserviceService} from './httpservice.service';
@NgModule({
  declarations: [
    AppComponent,
    DatadrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    ReactiveFormsModule
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
