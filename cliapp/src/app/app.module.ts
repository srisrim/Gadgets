import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { GadgetsService } from './gadgets/gadgets.service';
import { HeaderComponent } from './header/header.component';
import { FormsModule,ReactiveFormsModule,FormControl, Validators } from '@angular/forms';

/**
 * Importing Angular Material Here
 */
import {MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule,MdSidenavModule,MdTabsModule,MdInputModule} from '@angular/material';

/**
 * Router Configurations 
 */
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: 'app-gadgets',
    component: GadgetsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    GadgetsComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, HttpModule, BrowserAnimationsModule,
    /* Material Design */
    MdButtonModule, 
    MdCheckboxModule, 
    FormsModule, 
    ReactiveFormsModule,
    MdSidenavModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTabsModule,
    MdInputModule,
    /**Router Configurations */
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [GadgetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
