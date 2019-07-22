import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { BemVindo2Component } from './bem-vindo2/bem-vindo2.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BemVindoComponent,
    BemVindo2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
