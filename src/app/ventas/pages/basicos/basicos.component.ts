import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

nombreLower: string = 'eulalio';
nombreUpper: string = 'EULALIO';
nombreCompleto: string = 'eUlAlIo hErrErA';

fecha: Date = new Date();

}
