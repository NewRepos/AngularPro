import {  NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule }  from '@angular/forms';
import { AppComponent }  from './app.component';

import { HeaderComponent }  from './Header/Header.component';
import { loginComponent }  from './login/login.component';
import { AboutComponent }  from './About/About.component';
import { ServicesComponent }  from './Services/Services.component';
import { TableComponent }  from './Table/Table.component';
import { directivesComponent }  from './directives/directives.component';
import { Routes, RouterModule } from "@angular/router";
import { ArrayComponent }  from './Array/Array.component';

export const ROUTES: Routes = [

  { path: "page1", component: loginComponent },
  { path: "page2", component: AboutComponent },
  { path: "page3", component: ServicesComponent },
  { path: "page4", component: TableComponent },
  {path: "page5", component: directivesComponent },
 
 ];

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent,directivesComponent,HeaderComponent,loginComponent ,AboutComponent,ServicesComponent,TableComponent,ArrayComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
