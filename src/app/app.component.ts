import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello World';
  valor: number = Number((Math.random() * 100).toFixed(2));
  isMostrandoCiclo: boolean = true;
  mudarValor() {
    this.valor = Number((Math.random() * 100).toFixed(2));
  }

  mostrarCiclo() {
    this.isMostrandoCiclo = true;
  }

  onDestruirComponent(event: any) {
    console.log('x');

    console.log('onDestruirComponentX', event);
    this.isMostrandoCiclo = event;
  }
}
