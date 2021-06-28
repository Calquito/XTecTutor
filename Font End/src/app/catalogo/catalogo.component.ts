import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
carreras=[
{nombre:"Ingenieria en jbdfc",
cursos:['dusdlsdfws','edfvshbj','efwfrefer']},{nombre:"Ingenieria en jbdfc",
cursos:['dusdlsdfws','edfvshbj','efwfrefer']},{nombre:"Ingenieria en jbdfc",
cursos:['dusdlsdfws','edfvshbj','efwfrefer']}];
  constructor() { }

  ngOnInit(): void {
  }

}
