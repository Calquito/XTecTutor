import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CambiarContrasenaModel } from '../services/cambiar-contrasena.model';
import { HttpClient } from '@angular/common/http';
import { ConnectionService } from '../services/connection.service';

import { MisEntradasComponent } from '../mis-entradas/mis-entradas.component';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  profile = 'true';
  password = false;
  formUpdate: CambiarContrasenaModel= {
    old_password: null,
    new_password: null,
  };
  
  //aquí importa el servicio que conecta con el back
  constructor(
    private httpClient: HttpClient,
    private service : ConnectionService) { } 

  //url del back donde se envian los datos
  readonly rootURL = "";


  ngOnInit(): void {
  }
  /*sustituir por los datos necesarios para el backend*/
  update(form: NgForm) {
    //este es UPDATE, el servicio tiene todas las operaciones CRUD
    this.service.Update(this.formUpdate,this.rootURL).subscribe(
      response => {
        if(response==true){
          window.location.reload();
        }
        else{
          alert("No se logró actualizar la contraseña");
        }
      },
      error => {
        alert("No se logró actualizar la contraseña");
       }
  );;
  }



}
