import { FormsModule } from '@angular/forms';
// imports de bibliotecas de angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// imports de componentes
import { HomeDashboardComponent} from './home-dashboard/home-dashboard.component';
import { CrearEntradaComponent } from './crear-entrada/crear-entrada.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EntradaDeConocimientoComponent } from './entrada-de-conocimiento/entrada-de-conocimiento.component';
import { BusquedasComponent } from './busquedas/busquedas.component';
import { EditarEntradaComponent } from './editar-entrada/editar-entrada.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { EditarCatalogoComponent } from './editar-catalogo/editar-catalogo.component';
import { AdministradoresComponent } from './administradores/administradores.component';
import { DatosComponent } from './datos/datos.component';


const routes: Routes = [ { path: '', component: LoginComponent},
{ path: 'login', component: LoginComponent},
{ path: 'home-dashboard', component:  HomeDashboardComponent},
{ path: 'crear-entrada', component:  CrearEntradaComponent},
{ path: 'perfil', component:  PerfilComponent},
{ path: 'entrada/:id', component:  EntradaDeConocimientoComponent},
{ path: 'editar-entrada/:id', component:  EditarEntradaComponent },
{ path: 'entradas', component:  BusquedasComponent},
{ path: 'catalogos', component:  CatalogosComponent},
{ path: 'catalogo/:id', component:  CatalogoComponent},
{ path: 'editar-catalogo/:id', component:  EditarCatalogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
