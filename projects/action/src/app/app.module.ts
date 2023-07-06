import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatCheckboxModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
