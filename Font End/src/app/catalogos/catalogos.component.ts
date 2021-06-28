import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {

  constructor(private service: ConnectionService) { }
  catalogos;
  nombre;
  ngOnInit(): void {
    this.catalogos = [
    {
      Name: "Ingenieria en computadores",
    },
    {
      Name: "Ingenieria en electronica"
    },
    {
      Name: "Ingenieria en materiales"
    }];
    this.service.Get('https://localhost:44323/api/Catalogue').subscribe(
     response => {
        this.catalogos = response;
     },
     error => {
       console.log(error);
      }
     );
  }
add(){
  let catalogue = {Name : this.nombre}
this.service.Post(catalogue, 'https://localhost:44323/api/Catalogue').subscribe(
     response => { },
     error => {
       console.log(error);
      }
     );
}
}
