import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../services/connection.service';
import { CrearEntradaModel } from '../services/crear-entrada.model';

@Component({
  selector: 'app-crear-entrada',
  templateUrl: './crear-entrada.component.html',
  styleUrls: ['./crear-entrada.component.css']
})
export class CrearEntradaComponent implements OnInit {

  constructor(private http: HttpClient,
    private service : ConnectionService,
    private router: Router,
    private route: ActivatedRoute) { }

  //url del back end
  readonly rootURL = 'http://xtecmongodb.azurewebsites.net/api/estudiante/login';

  formData: CrearEntradaModel= {
    carrera: null,
    curso: null,
    tema: null,
    titulo: null,
    coautores: null,
    descripcion: null,
    contenido: null,
    anexos:null,
    visibilidad:null,
  };

  ngOnInit(): void {
  }


  onSubmit(form: NgForm) {
    this.service.Post(this.formData,this.rootURL).subscribe(
     //aqui va el response de la entrada
     response => {
       
     },
     error => {
       alert("no se logro conectar con el servidor");
      }
     );
    }
}
