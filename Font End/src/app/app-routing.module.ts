import { FormsModule } from '@angular/forms';
//imports de bibliotecas de angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//imports de componentes
import { LoginEstudianteComponent } from './login-estudiante/login-estudiante.component';
import { LoginAdministradorComponent } from './login-administrador/login-administrador.component';
import { PaginaDeInicioComponent} from './pagina-de-inicio/pagina-de-inicio.component'


const routes: Routes = [ { path: '', component: PaginaDeInicioComponent},
{ path: 'login-estudiante', component: LoginEstudianteComponent},
{ path: 'login-administrador', component: LoginAdministradorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
