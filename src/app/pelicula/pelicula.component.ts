import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input('varPadre') varHijo;

  constructor() {

   }

  ngOnInit() {
  }

}
