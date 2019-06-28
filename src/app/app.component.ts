  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'platzisquare';
    lugares:any = [
      { plan: 'pagado',cercania: 2, distancia:11, active: true, nombre: 'Practicando'},
      { plan: 'gratuito',cercania: 1, distancia:11.8, active: false, nombre: 'Papa'}
  ];
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(){
  }
}
