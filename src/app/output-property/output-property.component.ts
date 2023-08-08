import {
  Component,
  Input,
  Output,
  ViewChild,
  EventEmitter,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef | any;

  increment() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ newValue: this.valor });
  }
  decrement() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ newValue: this.valor });
  }
}
