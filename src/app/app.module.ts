import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UserPlatformComponent } from './pages/user-platform/user-platform.component';
import { RegisterComponent } from './pages/register/register.component';
import { IntranetComponent } from './pages/intranet/intranet.component';
import { BienvenidosComponent } from './pages/bienvenidos/bienvenidos.component';
import { RegistroInfraccionComponent } from './pages/registro-infraccion/registro-infraccion.component';
import { UsuariovalComponent } from './pages/usuarioval/usuarioval.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserPlatformComponent,
    RegisterComponent,
    IntranetComponent,
    RegistroInfraccionComponent,
    BienvenidosComponent,
    UsuariovalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
