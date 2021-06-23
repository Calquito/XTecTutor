import { FormsModule } from '@angular/forms';
//imports de bibliotecas de angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//imports de componentes
import { HomeDashboardComponent} from './home-dashboard/home-dashboard.component'
import { CrearEntradaComponent } from './crear-entrada/crear-entrada.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';



const routes: Routes = [ { path: '', component: LoginComponent},
{ path: 'login', component: LoginComponent},
{ path: 'home-dashboard', component:  HomeDashboardComponent},
{ path: 'crear-entrada', component:  CrearEntradaComponent},
{ path: 'perfil', component:  PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
