import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mis-entradas',
  templateUrl: './mis-entradas.component.html',
  styleUrls: ['./mis-entradas.component.css']
})
export class MisEntradasComponent implements OnInit {
  entradas;
  constructor( private router: Router) { }

  ngOnInit(): void {
    this.entradas= [{
      titulo:"Titulo de la entrada",
      carrera:"Ingenieria en computadores",
      curso:"Especificacion y diseño de software",
      autor: "Stephanie Abarca",
      tema: "Requerimientos no funcionales",
      creacion: new Date(),
      modificacion: new Date(),
      calificacion: 9,
      vistas: 100,
      cantComentarios: 10
    },
    {
      titulo:"Titulo de la entrada",
      carrera:"Ingenieria en electronica",
      curso:"Elementos activos",
      autor: "Stephanie Abarca",
      tema: "MOSFET",
      creacion: new Date(),
      modificacion: new Date(),
      calificacion: 9,
      vistas: 100,
      cantComentarios: 10
    },
    {
      titulo:"Titulo de la entrada",
      carrera:"Ingenieria en electronica",
      curso:"Elementos activos",
      autor: "Stephanie Abarca",
      tema: "MOSFET",
      creacion: new Date(),
      modificacion: new Date(),
      calificacion: 9,
      vistas: 100,
      cantComentarios: 10
    }];
  }
  verEntrada(id){
    this.router.navigate(['entry', id.toString()]);

  }
}
