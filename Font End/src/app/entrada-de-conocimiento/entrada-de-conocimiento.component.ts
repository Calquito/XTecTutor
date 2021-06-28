import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-entrada-de-conocimiento',
  templateUrl: './entrada-de-conocimiento.component.html',
  styleUrls: ['./entrada-de-conocimiento.component.css']
})
export class EntradaDeConocimientoComponent implements OnInit {
entrada;
coautor = '';
cal;
comments;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.entrada= {
      titulo:"Titulo de la entrada",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae consectetur sem. Etiam porttitor vestibulum dictum. Nullam tempor enim ut dolor sollicitudin, eu pharetra nulla suscipit.",
      contenido:"Quisque pretium nisi odio, vitae mollis dolor viverra sed. Integer molestie purus sed laoreet dignissim. Etiam commodo tellus nulla, vel ornare elit pellentesque non. Phasellus ut est pharetra, tincidunt leo at, gravida leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum nisi ipsum, iaculis fringilla eros eget, blandit aliquet arcu. Etiam at ex vel justo pellentesque lacinia id ac eros. Curabitur dignissim, orci vitae imperdiet egestas, leo nibh placerat nisi, eu auctor urna orci vel quam. Donec congue posuere velit, non rutrum magna posuere in. Ut nec cursus ex. Vivamus blandit non lorem non interdum. Ut vel porttitor sapien. Donec turpis odio, fringilla tincidunt ornare sed, varius a quam. Vestibulum massa nisi, finibus vitae lorem molestie, egestas iaculis augue. Proin vitae convallis quam. Curabitur risus nulla, consectetur eget pulvinar elementum, dictum et nibh.Fusce mattis vel velit vitae sollicitudin. Mauris laoreet suscipit leo id blandit. Aliquam eu sodales ante. Vestibulum eget convallis metus. Nam sem leo, malesuada vel placerat nec, consequat eget odio. Aenean scelerisque lacus in vulputate euismod. Mauris condimentum tincidunt malesuada. Duis faucibus turpis tortor, non tempus ex molestie a. Aliquam eleifend dapibus sapien, sit amet vestibulum metus imperdiet non.Sed finibus laoreet pellentesque. Nullam odio arcu, ultrices iaculis augue quis, vehicula finibus nunc. Donec dignissim ultricies justo et suscipit. Vivamus laoreet massa in libero fermentum ultrices. Suspendisse id quam nibh. Donec pharetra neque neque, eu sollicitudin enim cursus ut. Morbi lacus quam, ornare nec ornare non, maximus vitae libero. Nullam lacinia enim at aliquet porta. Vestibulum mauris lorem, ultrices a mollis eu, dapibus in magna. Sed vel suscipit turpis. Fusce tempus suscipit porta. Donec at vestibulum enim. Pellentesque facilisis aliquam maximus. Integer aliquet erat scelerisque ante euismod gravida.Nulla aliquet, tellus porta mattis porttitor, nunc ex interdum nibh, eu accumsan lectus ligula quis sapien. Etiam non dui non erat rhoncus volutpat. Nullam pharetra faucibus lectus. Fusce lobortis facilisis lacinia. Etiam hendrerit enim a urna ultricies malesuada. Sed ornare, lectus ac consequat commodo, orci elit bibendum lorem, vel euismod ipsum odio ut ante. Nulla euismod vel turpis id pharetra. Nullam hendrerit eros id lacus mollis, eu ultrices sapien rhoncus. Sed velit enim, hendrerit id lorem quis, ultrices luctus mauris.",
      autor: "Stephanie Abarca",
      coautores: ["Ronny Santamaria","Jonathan Gonzalez","Allan Calderon"],
      creacion: new Date(),
      modificacion: new Date(),
      calificacion: 9,
      vistas: 100
    };
    this.coautor = this.entrada.autor;
    for(const autor of this.entrada.coautores){
      this.coautor += ' - ' + autor;
    }
    this.comments = [
      {
        nombre: 'José Fernando Salas ',
        fecha: '8 Sep 2019',
        comentario:
          'Como base de información laboral o de colocación ideal de vacantes ha sido realmente' +
          ' cuestionable, a partir de las pocas opciones de convocatorias empresariales que aún emplean "in". Sin' +
          ' embargo, como formato electrónico de CV a sido un acierto a la hora de colocarlo como enlace en información' +
          ' profesional y para demostrar la productividad laboral.'
      },
      {
        nombre: 'José Fernando Salas ',
        fecha: '8 Sep 2019',
        comentario:
          'Como base de información laboral o de colocación ideal de vacantes ha sido realmente' +
          ' cuestionable, a partir de las pocas opciones de convocatorias '
      },
      {
        nombre: 'José Fernando Salas ',
        fecha: '8 Sep 2019',
        comentario:
          'Como base de información laboral o de colocación ideal de vacantes ha sido realmente' +
          ' cuestionable, a partir de las pocas opciones de convocatorias".'
      },
      {
        nombre: 'José Fernando Salas ',
        fecha: '8 Sep 2019',
        comentario:
          'Como base de información laboral o de colocación ideal de vacantes ha sido realmente' +
          ' cuestionable, a partir de las pocas opciones de convocatorias empresariales que aún emplean "in". Sin' +
          ' embargo, como formato electrónico de CV a sido un acierto a la hora de colocarlo como enlace en información' +
          ' profesional.'
      },
      {
        nombre: 'José Fernando Salas ',
        fecha: '8 Sep 2019',
        comentario:
          'Como base de información laboral o de colocación ideal de vacantes ha sido realmente' +
          ' cuestionable, a partir de las pocas opciones de convocatorias empresariales que aún emplean "in". Sin' +
          ' embargo, como formato electrónico de CV a sido un acierto a la hora de colocarlo como enlace en información' +
          ' profesional.'
      },
      {
        nombre: 'José Fernando Salas ',
        fecha: '8 Sep 2019',
        comentario:
          'Como base de información laboral o de colocación ideal de vacantes ha sido realmente' +
          ' cuestionable, a partir de las pocas opciones de convocatorias empresariales que aún emplean "in". Sin' +
          ' embargo, como formato electrónico de CV a sido un acierto a la hora de colocarlo como enlace en información' +
          ' profesional.'
      }
    ];
  }
  editarEntrada(id){
    this.router.navigate(['editar-entrada', id.toString()]);

  }

}
