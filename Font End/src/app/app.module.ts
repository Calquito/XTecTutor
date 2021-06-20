import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginEstudianteComponent } from './login-estudiante/login-estudiante.component';
import { PaginaDeInicioComponent } from './pagina-de-inicio/pagina-de-inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginAdministradorComponent } from './login-administrador/login-administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginEstudianteComponent,
    PaginaDeInicioComponent,
    LoginAdministradorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
