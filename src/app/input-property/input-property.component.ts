import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss'],
  inputs: ['inlineInput'],
})
export class InputPropertyComponent {
  @Input() nome: string = '';
  @Input('nome2') nomeCurso: string = '';
  inlineInput: string = '';
  @Input() hide: boolean = false;
}
