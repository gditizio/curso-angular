import { Component } from '@angular/core';
import { Mis_datos } from '../Mis_datos';

@Component({
  selector: 'app-contador2',
  templateUrl: './contador2.component.html',
  styleUrls: ['./contador2.component.scss']
})

export class Contador2Component {

  nombre: string = 'Giannino Di Tizio';

  misdatos: Mis_datos = {
    edad: 56,
    estado_civil: 'Casado',
    conyugue: 'Roraima Contreras',
  };

  numero: number = 1;

  decrementar() {
    this.numero--;
  }

  incrementar () {
    this.numero++;
  }

}
