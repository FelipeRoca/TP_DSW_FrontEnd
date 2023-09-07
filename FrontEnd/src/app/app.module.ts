import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { SiginComponent } from './modules/sigin/sigin.component';
import { InicioComponent } from './modules/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiginComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
