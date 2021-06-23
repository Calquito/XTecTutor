import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { EntradaDeConocimientoComponent } from './entrada-de-conocimiento/entrada-de-conocimiento.component';
import { CrearEntradaComponent } from './crear-entrada/crear-entrada.component';
import { LoginComponent } from './login/login.component';
import { MisEntradasComponent } from './mis-entradas/mis-entradas.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeDashboardComponent,
    EntradaDeConocimientoComponent,
    CrearEntradaComponent,
    LoginComponent,
    MisEntradasComponent,
    PerfilComponent,
  
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
