import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  url: string = 'https://marlloncampos.github.io';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://picsum.photos/300/200?blur=1';

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nomeDoCurso: string = 'Angular';
  nomeDoCurso2: string = 'React';
  inlineInput: string = 'Python';

  valorInicial: number = 15;

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  buttonClick() {
    alert('Botão Clicado');
  }

  onKeyUp(event: KeyboardEvent) {
    console.log((<HTMLInputElement>event.target).value);
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(value: any) {
    this.valorSalvo = value;
  }

  onMouseOuverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.newValue);
  }
}
