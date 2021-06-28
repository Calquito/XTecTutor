import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {

  constructor() { }
  catalogos;
  nombre;
  ngOnInit(): void {
    this.catalogos = [
    {
      nombre: "Ingenieria en computadores",
    },
    {
      nombre: "Ingenieria en electronica"
    },
    {
      nombre: "Ingenieria en materiales"
    }]
  }

}
