import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html',
  styleUrls: ['./busquedas.component.css']
})
export class BusquedasComponent implements OnInit {
entradas;
relevantes;
recientes;
tipo;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.tipo = 'rel';
     this.relevantes = [{
      titulo:"Titulo de la entrada",
      carrera:"Ingenieria en computadores",
      curso:"Especificacion y diseño de software",
      autor: "Stephanie Abarca",
      tema: "Requerimientos no funcionales",
      creacion: new Date(),
      modificacion: new Date(),
      calificacion: 9,
      vistas: 100,
      cantComentarios: 10,
      relevancia: 80
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
      cantComentarios: 10,
      relevancia: 8
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
      cantComentarios: 10,
      relevancia: 90
    }];
    this.recientes = [{
      titulo:"Titulooo de la entrada",
      carrera:"Ingenieriaaa en computadores",
      curso:"Especificacion y diseño de software",
      autor: "Stephanie Abarcaaa",
      tema: "Requerimientos no funcionales",
      creacion: new Date(),
      modificacion: new Date(),
      calificacion: 9,
      vistas: 100,
      cantComentarios: 10
    },
    {
      titulo:"Titulooo de la entrada",
      carrera:"Ingenieriaaa en electronica",
      curso:"Elementos activos",
      autor: "Stephanie Abarcaaa",
      tema: "MOSFET",
      creacion: new Date(),
      modificacion: new Date(),
      calificacion: 9,
      vistas: 100,
      cantComentarios: 10
    },
    {
      titulo:"Titulooo de la entrada",
      carrera:"Ingenieriaaa en electronica",
      curso:"Elementos activos",
      autor: "Stephanie Abarcaaa",
      tema: "MOSFET",
      creacion: new Date(),
      modificacion: new Date(),
      calificacion: 9,
      vistas: 100,
      cantComentarios: 10
    }];
    this.entradas = this.relevantes;
  }
  verEntrada(id){
    this.router.navigate(['entry', id.toString()]);

  }
  change(tipo){
    if(tipo == 'rel'){
      this.tipo = 'rel';
      this.entradas = this.relevantes;
    }
    else{
      this.tipo = 'rec';
      this.entradas = this.recientes;
    }
  }
}
