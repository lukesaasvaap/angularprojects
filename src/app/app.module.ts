import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { DataDrivenComponent } from './add/datadriven.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import {APP_ROUTES} from './app.routing';
import {HttpService} from './http.service';
import {MyPipe} from './view/mykey.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    HomeComponent,
    ViewComponent,
    DataDrivenComponent,
    MyPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
