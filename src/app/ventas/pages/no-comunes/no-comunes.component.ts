import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

nombre: string = 'Fernando';
genero: string = 'masculino';

clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Arnaldo', 'Jennifer'];
clientesMap = {
  '=0': 'no tenemos clientes esperando',
  '=1': 'tenemos un cliente esperando',
  '=2': 'tenemos dos clientes esperando',
  'other': 'tenemos # clientes esperando'
};

invitacionMapa = {
  'masculino': 'invitarlo',
  'femenino': 'invitarla'
}

cambiarCliente() {
  this.nombre = 'Melissa';
  this.genero = 'femenino';
}

borrarCliente() {
  this.clientes.pop();
}

persona = {
  nombre: 'Fernando',
  edad: 35,
  direccion: 'Ottawa, Canadá'
}

heroes = [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Batman',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
];

miObservable = interval(1000);


valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
});

}
