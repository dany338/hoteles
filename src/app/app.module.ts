import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { CrearHotelComponentComponent } from './crear-hotel-component/crear-hotel-component.component';
import { environment } from '../environments/environment.prod';
@NgModule({
  declarations: [
    AppComponent,
    CrearHotelComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: environment.baseHref }],
  bootstrap: [AppComponent]
})
export class AppModule { }
