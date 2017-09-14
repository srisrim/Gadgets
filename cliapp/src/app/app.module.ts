import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { GadgetsService } from './gadgets/gadgets.service';


@NgModule({
  declarations: [
    AppComponent,
    GadgetsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [GadgetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
