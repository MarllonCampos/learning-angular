import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss'],
})
// implements
//   OnChanges,
//   OnInit,
//   DoCheck,
//   AfterContentInit,
//   AfterContentChecked,
//   AfterViewInit,
//   AfterViewChecked,
//   OnDestroy
export class CicloComponent {
  @Input({}) valorInicial: number | undefined;
  @Output() mostrarComponent = new EventEmitter();
  constructor() {
    this.log('constructor');
  }

  // ngOnChanges() {
  //   this.log('ngOnChanges');
  //   this.valorInicial = this.valorInicial;
  // }

  // ngOnInit() {
  //   this.log('ngOnInit');
  // }

  // ngDoCheck() {
  //   this.log('ngDoCheck');
  // }

  // ngAfterContentInit() {
  //   this.log('ngAfterContentInit');
  // }

  // ngAfterContentChecked() {
  //   this.log('ngAfterContentChecked');
  // }

  // ngAfterViewInit() {
  //   this.log('ngAfterViewInit');
  // }

  // ngAfterViewChecked() {
  //   this.log('ngAfterViewChecked');
  // }

  // ngOnDestroy() {
  //   this.log('ngOnDestroy');
  // }

  mostrarCiclo() {
    this.mostrarComponent.emit(false);
  }

  log(value: any) {
    console.log(value);
  }
}
