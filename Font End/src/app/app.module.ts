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
import { MatCardModule } from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';

import { BusquedasComponent } from './busquedas/busquedas.component';
import { EditarEntradaComponent } from './editar-entrada/editar-entrada.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { EditarCatalogoComponent } from './editar-catalogo/editar-catalogo.component';
import { AdministradoresComponent } from './administradores/administradores.component';
import { DatosComponent } from './datos/datos.component';



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
    BusquedasComponent,
    EditarEntradaComponent,
    CatalogosComponent,
    CatalogoComponent,
    EditarCatalogoComponent,
    AdministradoresComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDividerModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
