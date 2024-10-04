import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Needed for two-way data binding

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';  // Import HelloComponent

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent  // Declare HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Import FormsModule for [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]  // Root component
})
export class AppModule { }

