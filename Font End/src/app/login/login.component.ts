  
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../services/connection.service';
import { LoginFormModel } from '../services/login-form.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData: LoginFormModel = {
    username: null,
    pin: null,
  };

  constructor(private http: HttpClient,
              private service: ConnectionService,
              private router: Router,
              private route: ActivatedRoute) { }

  // url del back
readonly rootURL = 'https://localhost:44323/api/login/login';
  ngOnInit(): void {
  }


  onSubmit(form: NgForm) {
    this.formData.pin = Number(this.formData.pin);
    this.service.Post(this.formData, this.rootURL).subscribe(
     response => {
        if ( response === 1){
          this.router.navigate(['/home-dashboard']);      
        }
        else if ( response === 2){
          this.router.navigate(['/catalogos']);
        }else {
          alert('No se logro conectar con el servidor');
        }
     },
     error => {
       if (error.status === 400){
          this.service.usuario = null;
          this.service.password = '';
          alert('No se encontro el usuario');      
       }else{
          alert('No se logro conectar con el servidor');

        }
      }
     );


    }
  }